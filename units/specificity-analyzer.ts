import postcss from "postcss";
import selectorParser from "postcss-selector-parser";
import { selectorSpecificity } from "@csstools/selector-specificity";
import { SourceMapConsumer } from "@jridgewell/source-map";
import { optionClassNames, stateClassNames, variantClassNames } from "../packages/html/src/misc/component-class-names";
import * as htmlPackage from "../packages/html/src/index";

// Types
interface SelectorInfo {
  selector: string;
  specificity: number[];
  specificityValue: number;
  sourceLocation: string;
}

interface Component {
  className: string;
  variants?: string[];
  options?: {
    size?: string[];
    fillMode?: string[];
    themeColor?: string[];
    rounded?: string[];
  };
  readonly states?: string[];
}

interface GetSelectorsSpecificityOptions {
  filter?: string;
  minSpecificity?: number;
  sourceMap?: any;
  exactComponentMatch?: boolean; // When true, uses smart component-aware filtering
}

// Cache for official components to avoid re-extraction
let officialComponentsCache: Set<string> | null = null;

/**
 * Check if a selector contains a specific CSS class name using exact matching
 * This prevents substring matches like 'k-icon' matching within 'k-icon-button'
 */
function hasClassName(selector: string, className: string): boolean {
  // Use word boundary regex to match exact class name, not substring
  const classPattern = new RegExp(`\\.${className}(?=\\s|\\.|:|$|>|\\+|~)`);
  return classPattern.test(selector);
}

/**
 * Extract official components from the HTML package exports
 * This uses the actual component exports from the HTML package
 */
function getOfficialComponents(): Set<string> {
  if (officialComponentsCache) {
    return officialComponentsCache;
  }

  const officialComponents = new Set<string>();

  // Iterate through all exports from the HTML package to find components with className
  for (const [, exportValue] of Object.entries(htmlPackage)) {
    if (exportValue && (typeof exportValue === "object" || typeof exportValue === "function") && "className" in exportValue) {
      const className = exportValue.className;
      if (typeof className === "string") {
        // Split multiple class names and extract individual k-* classes
        const classes = className.split(" ").filter((cls) => cls.startsWith("k-"));
        classes.forEach((cls) => officialComponents.add(cls));
      }
    }
  }

  officialComponentsCache = officialComponents;
  return officialComponents;
}

/**
 * Calculate CSS selector specificity using the @csstools/selector-specificity package
 * Returns an object with both the array format and calculated value
 */
function calculateSpecificity(selector: string) {
  try {
    const selectorAST = selectorParser().astSync(selector);
    const specificity = selectorSpecificity(selectorAST);

    // The selectorSpecificity returns { a, b, c } where:
    // a = IDs, b = classes/attributes/pseudo-classes, c = types/pseudo-elements
    const specificityArray = [specificity.a, specificity.b, specificity.c];
    const specificityValue = specificity.a * 100 + specificity.b * 10 + specificity.c;

    return {
      specificity: specificityArray,
      specificityValue,
    };
  } catch {
    // Fallback for malformed selectors - silently return minimal specificity
    return {
      specificity: [0, 0, 1],
      specificityValue: 1,
    };
  }
}

/**
 * Resolve source location from CSS line using source map
 */
function resolveSourceLocation(sourceMap: any, cssLine: number, cssColumn: number = 0): string {
  if (!sourceMap) {
    return `CSS line ${cssLine}`;
  }

  try {
    const consumer = new SourceMapConsumer(sourceMap);
    const position = consumer.originalPositionFor({
      line: cssLine,
      column: cssColumn,
    });

    if (position && position.source && position.line !== null) {
      return `${position.source}:${position.line}`;
    }

    return `CSS line ${cssLine}`;
  } catch (error) {
    throw new Error(`Error resolving source location for CSS line ${cssLine}: ${error.message}`);
  }
}

/**
 * Parse CSS and extract selectors with their specificity and source locations
 */
function getSelectorsSpecificity(css: string, options: GetSelectorsSpecificityOptions = {}): SelectorInfo[] {
  const { filter, minSpecificity = 0, sourceMap, exactComponentMatch = true } = options;
  const selectors: SelectorInfo[] = [];

  const root = postcss.parse(css, { from: undefined });

  root.walkRules((rule) => {
    rule.selectors.forEach((selector) => {
      // Apply filter if specified
      if (filter) {
        if (exactComponentMatch) {
          // For exact component matching, use hasClassName to avoid substring matches
          if (!hasClassName(selector, filter)) {
            // If the selector doesn't contain the filter component, check if it contains any other official component
            const officialComponents = getOfficialComponents();
            const containsOtherOfficialComponent = Array.from(officialComponents).some((component) => component !== filter && hasClassName(selector, component));

            // If it contains another official component, exclude it
            // If it doesn't contain any official component, include it (assume missing className)
            if (containsOtherOfficialComponent) {
              return;
            }
          } else {
            // Additional check: if selector contains the filter but doesn't start with it,
            // ensure it doesn't start with other official components
            if (hasClassName(selector, filter)) {
              // Check if selector starts with the target component
              const startsWithTargetComponent = selector.trim().startsWith(`.${filter}`);

              if (!startsWithTargetComponent) {
                // If it doesn't start with target component, check if it starts with any other official component
                const officialComponents = getOfficialComponents();
                const startsWithOtherOfficialComponent = Array.from(officialComponents).some((component) => component !== filter && selector.trim().startsWith(`.${component}`));

                // Exclude if it starts with another official component
                if (startsWithOtherOfficialComponent) {
                  return;
                }
              }
            }
          }
        } else {
          // Legacy behavior: simple substring matching
          if (!selector.includes(filter)) {
            return;
          }

          // Additional check: if selector contains the filter but doesn't start with it,
          // ensure it doesn't start with other official components
          if (selector.includes(filter)) {
            // Check if selector starts with the target component
            const startsWithTargetComponent = selector.trim().startsWith(`.${filter}`);

            if (!startsWithTargetComponent) {
              // If it doesn't start with target component, check if it starts with any other official component
              const officialComponents = getOfficialComponents();
              const startsWithOtherOfficialComponent = Array.from(officialComponents).some((component) => component !== filter && selector.trim().startsWith(`.${component}`));

              // Exclude if it starts with another official component
              if (startsWithOtherOfficialComponent) {
                return;
              }
            }
          }
        }
      }

      const specificityResult = calculateSpecificity(selector);

      // Apply minimum specificity filter
      if (specificityResult.specificityValue < minSpecificity) {
        return;
      }

      let sourceLocation = "Source location not available";

      // Get source location using source map if available
      if (sourceMap && rule.source && rule.source.start) {
        sourceLocation = resolveSourceLocation(sourceMap, rule.source.start.line, rule.source.start.column);
      }

      selectors.push({
        selector: selector.trim(),
        specificity: specificityResult.specificity,
        specificityValue: specificityResult.specificityValue,
        sourceLocation: sourceLocation,
      });
    });
  });

  return selectors;
}

/**
 * Detect component variants in a CSS selector using the actual variantClassNames function
 */
function detectVariants(selector: string, component: Component | null = null): boolean {
  if (!component || !component.variants || !Array.isArray(component.variants)) {
    return false;
  }

  // Use the actual variantClassNames function to generate the variant classes
  for (const variant of component.variants) {
    const generatedClasses = variantClassNames(component.className, variant);

    // Check if any of the generated variant classes appear in the selector
    for (const [className, isActive] of Object.entries(generatedClasses)) {
      if (isActive && hasClassName(selector, className)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Detect component options in a CSS selector using the actual optionClassNames function
 */
function detectOptions(selector: string, component: Component | null = null): boolean {
  if (!component || !component.options) {
    return false;
  }

  const { options } = component;

  // Test each option type individually using the actual optionClassNames function

  // Size options
  if (options.size) {
    for (const size of options.size) {
      const generatedClasses = optionClassNames(component.className, { size });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        if (classNames.some((className) => hasClassName(selector, className))) {
          return true;
        }
      }
    }
  }

  // FillMode options (standalone)
  if (options.fillMode) {
    for (const fillMode of options.fillMode) {
      const generatedClasses = optionClassNames(component.className, { fillMode });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        if (classNames.some((className) => hasClassName(selector, className))) {
          return true;
        }
      }
    }
  }

  // ThemeColor options (standalone)
  if (options.themeColor) {
    for (const themeColor of options.themeColor) {
      const generatedClasses = optionClassNames(component.className, { themeColor });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        if (classNames.some((className) => hasClassName(selector, className))) {
          return true;
        }
      }
    }
  }

  // Combined fillMode + themeColor options
  if (options.fillMode && options.themeColor) {
    for (const fillMode of options.fillMode) {
      for (const themeColor of options.themeColor) {
        const generatedClasses = optionClassNames(component.className, { fillMode, themeColor });
        if (generatedClasses) {
          const classNames = generatedClasses.split(" ").filter((c) => c.trim());
          if (classNames.some((className) => hasClassName(selector, className))) {
            return true;
          }
        }
      }
    }
  }

  // Rounded options
  if (options.rounded) {
    for (const rounded of options.rounded) {
      const generatedClasses = optionClassNames(component.className, { rounded });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        if (classNames.some((className) => hasClassName(selector, className))) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Detect states in a CSS selector using the actual stateClassNames function and CSS pseudo-classes
 * Component spec is the source of truth for valid states (including deprecated ones)
 */
function detectStates(selector: string, component: Component | null = null): boolean {
  if (!component || !component.states) {
    return false;
  }

  // First check component-specific states from the spec using the actual stateClassNames function
  for (const state of component.states) {
    // Handle deprecated states that are already k-prefixed class names
    if (hasClassName(selector, state)) {
      return true;
    }

    // Use the actual stateClassNames function for standard state names
    const stateProps = { [state]: true };
    const generatedClasses = stateClassNames(component.className, stateProps);

    // Check if any of the generated state classes appear in the selector
    for (const className of generatedClasses.split(" ")) {
      if (className && className.trim() && hasClassName(selector, className)) {
        return true;
      }
    }
  }

  // Check for CSS pseudo-classes (complete list)
  const cssPseudoClasses = [":hover", ":focus", ":active", ":disabled", ":enabled", ":checked", ":unchecked", ":indeterminate", ":valid", ":invalid", ":required", ":optional", ":read-only", ":read-write", ":first-child", ":last-child", ":first-of-type", ":last-of-type", ":only-child", ":only-of-type", ":nth-child", ":nth-of-type", ":not", ":empty", ":target", ":visited", ":link"];

  return cssPseudoClasses.some((pseudoClass) => selector.includes(pseudoClass));
}

/**
 * Detect nested official components using the HTML package exports
 * Returns true if any nested component is detected (adds +10 only once)
 */
function detectNestedComponents(selector: string, component: Component | null = null): boolean {
  if (!component) return false;

  // Check if the selector contains the base component class
  const hasBaseComponent = hasClassName(selector, component.className);
  if (!hasBaseComponent) return false;

  // Get all official component class names from the HTML package
  const officialComponents = getOfficialComponents();

  // Check if any nested component class appears in the selector (excluding the base component)
  for (const nestedClass of officialComponents) {
    if (nestedClass !== component.className) {
      // Use the common hasClassName function for consistent class name matching
      if (hasClassName(selector, nestedClass)) {
        return true; // Return true immediately when any nested component is found
      }
    }
  }

  return false;
}

/**
 * Detect sibling combinators in a CSS selector when they're combining official components
 * Returns true if adjacent (+) or general (~) sibling combinators are detected between official components
 */
function detectSiblingCombinators(selector: string, component: Component | null = null): boolean {
  if (!component) return false;

  // Check if selector contains sibling combinators
  if (!selector.includes("+") && !selector.includes("~")) {
    return false;
  }

  // Get all official component class names
  const officialComponents = getOfficialComponents();

  // Split by combinators (including spaces, >, +, ~) and check for official components
  const parts = selector.split(/[\s>+~]+/).filter((part) => part.trim());

  let officialComponentsFound = 0;
  for (const part of parts) {
    const hasOfficial = Array.from(officialComponents).some((comp) => hasClassName(part, comp));
    if (hasOfficial) {
      officialComponentsFound++;
    }
  }

  // For sibling combinators to be meaningful, we need:
  // 1. At least 2 parts with official components (can be same component repeated)
  // 2. Actual sibling combinators in the selector
  return officialComponentsFound >= 2;
}

/**
 * Calculate dynamic specificity threshold starting from 0
 * Rewards proper structure with base class usage
 */
function calculateSpecificityThreshold(selector: string, component: any | null = null): number {
  let threshold = 0;

  // exceptions, global styles which are not part of the component
  const rootDetected = selector.includes(":root") || selector.includes("html");
  if (rootDetected) {
    threshold += 10;
  }

  if (selector.includes("%")) {
    threshold += 1;
  }

  // Base component class (+10) - foundational requirement
  // Use word boundary regex to match exact class name, not substring
  if (hasClassName(selector, component.className)) {
    threshold += 10;

    // Component variants (+10)
    const variantsDetected = detectVariants(selector, component);
    if (variantsDetected) {
      threshold += 10;
    }

    // Component options (+10)
    const optionsDetected = detectOptions(selector, component);
    if (optionsDetected) {
      threshold += 10;
    }

    // Component states (+10)
    const statesDetected = detectStates(selector, component);
    if (statesDetected) {
      threshold += 10;
    }

    // Nested components (+10) - max 1 additional official component
    const nestedDetected = detectNestedComponents(selector, component);
    if (nestedDetected) {
      threshold += 10;
    }

    // Sibling combinators (+10) - adjacent (+) or general (~) sibling selectors between official components
    const siblingDetected = detectSiblingCombinators(selector, component);
    if (siblingDetected) {
      threshold += 10;
    }
  }

  // :not() selectors (+10) - matches the actual CSS specificity weight of pseudo-classes
  if (selector.includes(":not(")) {
    threshold += 10;
  }

  // Pseudo-elements (+1) - comprehensive list including vendor-specific ones
  const pseudoElementPattern = /::(before|after|first-line|first-letter|placeholder|selection|backdrop|marker|file-selector-button|-webkit-[-\w]+|-moz-[-\w]+|-ms-[-\w]+)/;
  if (pseudoElementPattern.test(selector)) {
    threshold += 1;
  }

  // DOM elements (+1 per element) - match actual element selectors, not class names
  // Look for elements that are either at the start, after whitespace, or after combinators
  // but not after dots (class selectors) or dashes/letters (part of class names)
  const elementMatches = selector.match(/(?:^|[\s>+~])(svg|input|span|div|button|a|i|em|strong|p|h[1-6]|ul|li|table|tr|td|th|form|label|select|textarea|img)(?=[\s>+~#.[:]|$)/g);
  if (elementMatches && elementMatches.length) {
    threshold += 1;
  }

  return threshold;
}

// ESM exports
export { calculateSpecificity, calculateSpecificityThreshold, getSelectorsSpecificity, detectVariants, detectOptions, detectStates, detectNestedComponents, detectSiblingCombinators, getOfficialComponents, hasClassName };

// CommonJS compatibility
module.exports = {
  calculateSpecificity,
  calculateSpecificityThreshold,
  getSelectorsSpecificity,
  detectVariants,
  detectOptions,
  detectStates,
  detectNestedComponents,
  detectSiblingCombinators,
  getOfficialComponents,
  hasClassName,
};
