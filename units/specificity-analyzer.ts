import postcss from "postcss";
import { selectorSpecificity } from "@csstools/selector-specificity";
import selectorParser from "postcss-selector-parser";
import { SourceMapConsumer } from "@jridgewell/source-map";
import { optionClassNames, stateClassNames, variantClassNames } from "../packages/html/src/misc/component-class-names";

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

interface GetComponentSelectorsOptions {
  minSpecificity?: number;
  sourceMap?: any;
}

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
 * Parse CSS and extract selectors that are relevant to a specific component
 */
function getComponentSelectors(css: string, component: any, options: GetComponentSelectorsOptions = {}): SelectorInfo[] {
  const { minSpecificity = 0, sourceMap } = options;
  const selectors: SelectorInfo[] = [];

  if (!component || !component.className) {
    console.warn(`Component ${component} must have a className property`);
    return [];
  }

  // Generate all possible class names for this component inline
  const componentClassNames = new Set<string>();

  // Add base className
  componentClassNames.add(component.className);

  // Add variant class names
  if (component.variants && Array.isArray(component.variants)) {
    component.variants.forEach((variant: string) => {
      const variantClasses = variantClassNames(component.className, variant);
      Object.keys(variantClasses).forEach((className) => componentClassNames.add(className));
    });
  }

  // Add option class names
  if (component.options) {
    const { options } = component;

    // Size options
    if (options.size && Array.isArray(options.size)) {
      options.size.forEach((size: string) => {
        const optionClasses = optionClassNames(component.className, { size });
        if (optionClasses) {
          optionClasses
            .split(" ")
            .filter((c) => c.trim())
            .forEach((className) => componentClassNames.add(className));
        }
      });
    }

    // FillMode options
    if (options.fillMode && Array.isArray(options.fillMode)) {
      options.fillMode.forEach((fillMode: string) => {
        const optionClasses = optionClassNames(component.className, { fillMode });
        if (optionClasses) {
          optionClasses
            .split(" ")
            .filter((c) => c.trim())
            .forEach((className) => componentClassNames.add(className));
        }
      });
    }

    // ThemeColor options
    if (options.themeColor && Array.isArray(options.themeColor)) {
      options.themeColor.forEach((themeColor: string) => {
        const optionClasses = optionClassNames(component.className, { themeColor });
        if (optionClasses) {
          optionClasses
            .split(" ")
            .filter((c) => c.trim())
            .forEach((className) => componentClassNames.add(className));
        }
      });
    }

    // Rounded options
    if (options.rounded && Array.isArray(options.rounded)) {
      options.rounded.forEach((rounded: string) => {
        const optionClasses = optionClassNames(component.className, { rounded });
        if (optionClasses) {
          optionClasses
            .split(" ")
            .filter((c) => c.trim())
            .forEach((className) => componentClassNames.add(className));
        }
      });
    }

    // Combined fillMode + themeColor options
    if (options.fillMode && options.themeColor && Array.isArray(options.fillMode) && Array.isArray(options.themeColor)) {
      options.fillMode.forEach((fillMode: string) => {
        options.themeColor.forEach((themeColor: string) => {
          const optionClasses = optionClassNames(component.className, { fillMode, themeColor });
          if (optionClasses) {
            optionClasses
              .split(" ")
              .filter((c) => c.trim())
              .forEach((className) => componentClassNames.add(className));
          }
        });
      });
    }
  }

  // Add state class names
  if (component.states && Array.isArray(component.states)) {
    component.states.forEach((state: string) => {
      // Handle deprecated states that are already k-prefixed class names
      if (state.startsWith("k-")) {
        componentClassNames.add(state);
      } else {
        // Use the actual stateClassNames function for standard state names
        const stateProps = { [state]: true };
        const stateClasses = stateClassNames(component.className, stateProps);
        if (stateClasses) {
          stateClasses
            .split(" ")
            .filter((c) => c.trim())
            .forEach((className) => componentClassNames.add(className));
        }
      }
    });
  }

  // Remove base class from the list since we'll test it separately
  componentClassNames.delete(component.className);

  // Add empty string to represent "base class only" combination
  componentClassNames.add("");

  const root = postcss.parse(css, { from: undefined });

  root.walkRules((rule) => {
    rule.selectors.forEach((selector) => {
      // Skip :root and html selectors immediately - they can't target component elements
      if (selector.includes(":root") || selector.trim().startsWith("html")) {
        return;
      }

      let wouldTargetComponent = false;

      // Strip pseudo-classes from selector for testing since we can't simulate them on mock elements
      const baseSelector = selector.replace(/:(hover|focus|active|disabled|enabled|checked|unchecked|indeterminate|valid|invalid|required|optional|read-only|read-write|first-child|last-child|first-of-type|last-of-type|only-child|only-of-type|nth-child|nth-of-type|not|empty|target|visited|link)(\([^)]*\))?/g, "");

      // If stripping pseudo-classes results in empty string, skip this selector
      if (!baseSelector.trim()) {
        return;
      }

      try {
        // Test all combinations: base class + each variant/option/state class (including empty string for base alone)
        for (const className of componentClassNames) {
          const classCombo = className ? `${component.className} ${className}` : component.className;
          const element = document.createElement("div");
          element.className = classCombo;

          if (element.matches(baseSelector)) {
            wouldTargetComponent = true;
            break;
          }
        }
      } catch {
        // Fallback for malformed selectors - skip them
        wouldTargetComponent = false;
      }

      if (!wouldTargetComponent) {
        return; // Skip this selector - it doesn't target our component
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
  const cssPseudoClasses = [":hover", ":focus", ":active", ":disabled", ":enabled", ":checked", ":unchecked", ":indeterminate", ":valid", ":invalid", ":required", ":optional", ":read-only", ":read-write", ":first-child", ":last-child", ":first-of-type", ":last-of-type", ":only-child", ":only-of-type", ":nth-child", ":nth-of-type", ":not", ":empty", ":target", ":visited", ":link", ":-webkit-autofill"];

  return cssPseudoClasses.some((pseudoClass) => selector.includes(pseudoClass));
}

/**
 * Calculate dynamic specificity threshold starting from 0
 * Simplified version focused on the component's own properties
 */
function calculateSpecificityThreshold(selector: string, component: any | null = null, enforceBaseClassName: boolean = true): number {
  let threshold = 0;

  // Exception for global styles which are not part of the component
  const rootDetected = selector.includes(":root") || selector.includes("html");
  if (rootDetected) {
    threshold += 10;
  }

  if (selector.includes("%")) {
    threshold += 1;
  }

  // Base component class (+10) - foundational requirement
  const hasBaseClass = hasClassName(selector, component.className);
  if (!enforceBaseClassName || hasBaseClass) {
    if (hasBaseClass) {
      threshold += 10;
    }

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
  const elementMatches = selector.match(/(?:^|[\s>+~])(svg|input|span|div|button|a|i|em|strong|p|h[1-6]|ul|li|table|tr|td|th|form|label|select|textarea|img)(?=[\s>+~#.[:]|$)/g);
  if (elementMatches && elementMatches.length) {
    threshold += 1;
  }

  return threshold;
}

// ESM exports
export { calculateSpecificity, calculateSpecificityThreshold, getComponentSelectors };

// CommonJS compatibility
module.exports = {
  calculateSpecificity,
  calculateSpecificityThreshold,
  getComponentSelectors,
};
