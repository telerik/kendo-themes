import postcss from "postcss";
import { selectorSpecificity } from "@csstools/selector-specificity";
import selectorParser, { Selector, Node, ClassName, Tag, Pseudo, Attribute } from "postcss-selector-parser";
import { SourceMapConsumer } from "@jridgewell/source-map";
import { optionClassNames, stateClassNames, variantClassNames } from "../packages/html/src/misc/component-class-names";
import * as htmlComponents from "../packages/html/src/index";
import * as sass from "sass";
import * as path from "path";
import { it, expect } from "@jest/globals";

const presets: Record<string, TestSpecificityOptions> = {
  "2025Q4": {
    baseClass: false,
    scope: "component",
    maxStates: Number.MAX_SAFE_INTEGER,
    maxComponents: Number.MAX_SAFE_INTEGER,
    maxElements: Number.MAX_SAFE_INTEGER,
    maxPseudoElements: Number.MAX_SAFE_INTEGER,
  },
  "2026Q2": {
    baseClass: true, // Requires changes in component suits
    scope: "theme", // Would reveal cross-component selectors (.e.g grid touching button styles)
    maxStates: 1, // Material theme is famous for :hover:focus:active selectors
    maxComponents: 2, // Reduce component nesting to 2 (k-grid -> k-button)
    maxElements: 0, // We should not have any element selectors
  },
} as const;

// Types
interface SelectorInfo {
  selector: string;
  specificity: number[];
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
  sourceMap?: any;
}

interface ParsedSelector {
  classes: string[];
  pseudoClasses: string[];
  pseudoElements: string[];
  elements: string[];
  attributes: string[];
  ids: string[];
}

/**
 * Compare two specificity arrays
 * Returns: 1 if a > b, -1 if a < b, 0 if equal
 * CSS specificity comparison follows: [IDs, classes/attributes/pseudo-classes, types/pseudo-elements]
 */
function compareSpecificity(a: number[], b: number[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const valueA = a[i] || 0;
    const valueB = b[i] || 0;

    if (valueA > valueB) return 1;
    if (valueA < valueB) return -1;
  }
  return 0;
}

/**
 * Get the more specific of two specificity arrays
 * Returns the array with higher specificity, or the first one if they're equal
 */
function getMoreSpecific(a: number[], b: number[]): number[] {
  return compareSpecificity(a, b) >= 0 ? a : b;
}

/**
 * Parse a CSS selector using postcss-selector-parser to extract all components
 * This replaces manual string manipulation and regex patterns
 */
function parseSelector(selector: string): ParsedSelector {
  const result: ParsedSelector = {
    classes: [],
    pseudoClasses: [],
    pseudoElements: [],
    elements: [],
    attributes: [],
    ids: [],
  };

  try {
    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walk((node) => {
          switch (node.type) {
            case "class":
              result.classes.push((node as ClassName).value);
              break;
            case "tag":
              result.elements.push((node as Tag).value);
              break;
            case "pseudo":
              const pseudo = node as Pseudo;
              if (pseudo.value.startsWith("::")) {
                result.pseudoElements.push(pseudo.value);
              } else {
                result.pseudoClasses.push(pseudo.value);
              }
              break;
            case "attribute":
              result.attributes.push((node as Attribute).attribute);
              break;
            case "id":
              result.ids.push(node.value);
              break;
          }
        });
      });
    }).processSync(selector);
  } catch (error) {
    console.warn(`Failed to parse selector "${selector}":`, error);
  }

  return result;
}

/**
 * Check if a selector contains a specific CSS class name using proper CSS parsing
 * This replaces the regex-based hasClassName function
 */
function hasClassName(selector: string, className: string): boolean {
  const parsed = parseSelector(selector);
  return parsed.classes.includes(className);
}

/**
 * Count how many times a specific class name appears in a CSS selector
 * This replaces the regex-based countClassOccurrences function
 */
function countClassOccurrences(selector: string, className: string): number {
  const parsed = parseSelector(selector);
  return parsed.classes.filter((cls) => cls === className).length;
}

/**
 * Get all class names from a selector
 * This replaces manual regex extraction
 */
function getClassNames(selector: string): string[] {
  const parsed = parseSelector(selector);
  return parsed.classes;
}

/**
 * Check if selector contains any pseudo-classes
 * This replaces manual string matching for pseudo-classes
 */
function hasPseudoClass(selector: string, pseudoClass: string): boolean {
  const parsed = parseSelector(selector);
  return parsed.pseudoClasses.includes(pseudoClass);
}

/**
 * Count occurrences of a specific pseudo-class
 */
function countPseudoClassOccurrences(selector: string, pseudoClass: string): number {
  const parsed = parseSelector(selector);
  return parsed.pseudoClasses.filter((pc) => pc === pseudoClass).length;
}

/**
 * Check if selector contains any pseudo-elements
 */
function hasPseudoElement(selector: string): boolean {
  const parsed = parseSelector(selector);
  return parsed.pseudoElements.length > 0;
}

/**
 * Check if selector contains any DOM elements
 */
function hasElements(selector: string): boolean {
  const parsed = parseSelector(selector);
  return parsed.elements.length > 0;
}

/** Returns one subject per comma-separated selector */
export function getSubjects(selector: string): string[] {
  const subjects: string[] = [];

  selectorParser((selectors) => {
    selectors.each((sel: Selector) => {
      // Walk from the end until you hit a combinator
      const nodes = sel.nodes ?? [];
      const lastCompound: Node[] = [];
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        if (n.type === "combinator") break;
        lastCompound.unshift(n);
      }
      subjects.push(lastCompound.map((n) => n.toString()).join(""));
    });
  }).processSync(selector);

  return subjects;
}

/**
 * Calculate CSS selector specificity using the @csstools/selector-specificity package
 * Returns the specificity as an array [IDs, classes/attributes/pseudo-classes, types/pseudo-elements]
 */
function calculateSpecificity(selector: string): number[] {
  try {
    const selectorAST = selectorParser().astSync(selector);
    const specificity = selectorSpecificity(selectorAST);

    // The selectorSpecificity returns { a, b, c } where:
    // a = IDs, b = classes/attributes/pseudo-classes, c = types/pseudo-elements
    return [specificity.a, specificity.b, specificity.c];
  } catch {
    // Fallback for malformed selectors - silently return minimal specificity
    return [0, 0, 1];
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
  const { sourceMap } = options;
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
      const subjects = getSubjects(selector);

      // Check if any subject would target our component
      let wouldTargetComponent = false;

      for (const subject of subjects) {
        // Check if subject contains our base class
        if (hasClassName(subject, component.className)) {
          // Extract all class names from the subject using proper parsing
          const subjectClasses = getClassNames(subject);

          // Check if all non-base classes in the subject are classes our component can generate
          const otherClasses = subjectClasses.filter((cls) => cls !== component.className);
          if (otherClasses.length === 0 || otherClasses.every((cls) => componentClassNames.has(cls))) {
            wouldTargetComponent = true;
            break;
          }
        }
      }

      if (!wouldTargetComponent) {
        return; // Skip this selector - none of its subjects target our component
      }

      const specificityResult = calculateSpecificity(selector);

      let sourceLocation = "Source location not available";

      // Get source location using source map if available
      if (sourceMap && rule.source && rule.source.start) {
        sourceLocation = resolveSourceLocation(sourceMap, rule.source.start.line, rule.source.start.column);
      }

      selectors.push({
        selector: selector.trim(),
        specificity: specificityResult,
        sourceLocation: sourceLocation,
      });
    });
  });

  return selectors;
}

/**
 * Detect component variants in a CSS selector using proper CSS parsing
 * Returns array of detected variant class names
 */
function detectVariants(selector: string, component: Component | null = null): string[] {
  const detectedVariants: string[] = [];

  if (!component || !component.variants || !Array.isArray(component.variants)) {
    return detectedVariants;
  }

  const selectorClasses = getClassNames(selector);

  // Use the actual variantClassNames function to generate the variant classes
  for (const variant of component.variants) {
    const generatedClasses = variantClassNames(component.className, variant);

    // Check if any of the generated variant classes appear in the selector
    for (const [className, isActive] of Object.entries(generatedClasses)) {
      if (isActive && selectorClasses.includes(className)) {
        detectedVariants.push(className);
      }
    }
  }

  return detectedVariants;
}

/**
 * Detect component options in a CSS selector using proper CSS parsing
 * Returns array of detected option class names
 */
function detectOptions(selector: string, component: Component | null = null): string[] {
  const detectedOptions = new Set<string>();

  if (!component || !component.options) {
    return [];
  }

  const selectorClasses = getClassNames(selector);
  const { options } = component;

  // Test each option type individually using the actual optionClassNames function

  // Size options
  if (options.size) {
    for (const size of options.size) {
      const generatedClasses = optionClassNames(component.className, { size });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        classNames.forEach((className) => {
          if (selectorClasses.includes(className)) {
            detectedOptions.add(className);
          }
        });
      }
    }
  }

  // FillMode options (standalone)
  if (options.fillMode) {
    for (const fillMode of options.fillMode) {
      const generatedClasses = optionClassNames(component.className, { fillMode });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        classNames.forEach((className) => {
          if (selectorClasses.includes(className)) {
            detectedOptions.add(className);
          }
        });
      }
    }
  }

  // ThemeColor options (standalone)
  if (options.themeColor) {
    for (const themeColor of options.themeColor) {
      const generatedClasses = optionClassNames(component.className, { themeColor });
      if (generatedClasses) {
        const classNames = generatedClasses.split(" ").filter((c) => c.trim());
        classNames.forEach((className) => {
          if (selectorClasses.includes(className)) {
            detectedOptions.add(className);
          }
        });
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
          classNames.forEach((className) => {
            if (selectorClasses.includes(className)) {
              detectedOptions.add(className);
            }
          });
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
        classNames.forEach((className) => {
          if (selectorClasses.includes(className)) {
            detectedOptions.add(className);
          }
        });
      }
    }
  }

  // Convert Set to array only at the end
  return Array.from(detectedOptions);
}

/**
 * Detect states in a CSS selector for threshold calculation
 * Returns array of detected state class names and pseudo-classes
 */
function detectStates(selector: string, component: Component | null = null): string[] {
  const detectedStates: string[] = [];

  try {
    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walk((node) => {
          if (node.type === "pseudo") {
            const pseudo = node as Pseudo;

            if (pseudo.value.startsWith("::")) {
              // Skip pseudo-elements, they're counted separately
              return;
            }

            // Count all pseudo-classes
            detectedStates.push(pseudo.value);
          }
        });
      });
    }).processSync(selector);
  } catch (error) {
    console.warn(`Failed to parse selector for state detection "${selector}":`, error);
  }

  // Check component-specific states if component is provided
  if (component && component.states) {
    const selectorClasses = getClassNames(selector);

    for (const state of component.states) {
      // Handle deprecated states that are already k-prefixed class names
      if (selectorClasses.includes(state)) {
        detectedStates.push(state);
        continue;
      }

      // Use the actual stateClassNames function for standard state names
      const stateProps = { [state]: true };
      const generatedClasses = stateClassNames(component.className, stateProps);

      // Check if any of the generated state classes appear in the selector
      for (const className of generatedClasses.split(" ")) {
        if (className && className.trim() && selectorClasses.includes(className)) {
          detectedStates.push(className);
        }
      }
    }
  }

  return detectedStates;
}

/**
 * Detect if a selector contains class names from other component specs
 * Excludes the current component being tested to avoid false positives
 * Returns array of detected component class names
 */
function detectComponents(selector: string, currentComponent: Component | null = null): string[] {
  const detectedComponents: string[] = [];
  const selectorClasses = getClassNames(selector);

  // Get all component specs from the html package
  const componentSpecs: any[] = [];

  // Extract all exported values that have a className property (indicating they're component specs)
  // This includes both object specs and React component functions with attached properties
  for (const exportName in htmlComponents) {
    const exportedValue = (htmlComponents as any)[exportName];
    if (exportedValue && exportedValue.className) {
      componentSpecs.push(exportedValue);
    }
  }

  // Check if selector contains any other component class names
  for (const spec of componentSpecs) {
    // Skip the current component to avoid false positives
    if (currentComponent && spec.className === currentComponent.className) {
      continue;
    }

    // Check if this component's class name appears in the selector
    if (selectorClasses.includes(spec.className)) {
      detectedComponents.push(spec.className);
    }
  }

  return detectedComponents;
}

/**
 * Strip :not() selectors from a CSS selector string
 * This is used to clean the selector before passing it to detection functions
 */
function stripNotSelectors(selector: string): string {
  try {
    let result = selector;

    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walkPseudos((pseudo) => {
          if (pseudo.value === ":not") {
            pseudo.remove();
          }
        });
      });
      result = selectors.toString();
    }).processSync(selector);

    return result;
  } catch (error) {
    console.warn(`Failed to strip :not() from selector "${selector}":`, error);
    return selector;
  }
}

/**
 * Strip :where() selectors from a CSS selector string
 * This is used to clean the selector before passing it to detection functions
 * Since :where() has zero specificity, its contents should not contribute to threshold calculations
 */
function stripWhereSelectors(selector: string): string {
  try {
    let result = selector;

    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walkPseudos((pseudo) => {
          if (pseudo.value === ":where") {
            pseudo.remove();
          }
        });
      });
      result = selectors.toString();
    }).processSync(selector);

    return result;
  } catch (error) {
    console.warn(`Failed to strip :where() from selector "${selector}":`, error);
    return selector;
  }
}

/**
 * Strip both :not() and :where() selectors from a CSS selector string
 * This is used to clean the selector before passing it to detection functions
 * - :not() content contributes to specificity but is handled separately
 * - :where() content has zero specificity and should be completely ignored
 */
function stripSpecialSelectors(selector: string): string {
  try {
    let result = selector;

    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walkPseudos((pseudo) => {
          if (pseudo.value === ":not" || pseudo.value === ":where") {
            pseudo.remove();
          }
        });
      });
      result = selectors.toString();
    }).processSync(selector);

    return result;
  } catch (error) {
    console.warn(`Failed to strip special selectors from selector "${selector}":`, error);
    return selector;
  }
}

/**
 * Detect and calculate specificity contribution from :not() pseudo-classes
 *
 * This function handles the complex CSS specificity rules for :not() selectors:
 * - :not() itself doesn't contribute to specificity
 * - The content inside :not() does contribute
 * - For comma-separated selectors inside :not(), only the most specific one counts
 *
 * Examples:
 * - :not(:first-child) → counts as 1 pseudo-class
 * - :not(:first-child, :last-child) → counts as 1 pseudo-class (highest of the two)
 * - :not(.class1, .class2) → counts as 1 class (both have same specificity)
 *
 * Returns specificity as [IDs, classes/attributes/pseudo-classes, types/pseudo-elements]
 */
function detectNot(selector: string, component: any | null = null): number[] {
  let totalIds = 0;
  let totalClasses = 0;
  let totalElements = 0;

  try {
    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walk((node) => {
          if (node.type === "pseudo") {
            const pseudo = node as Pseudo;
            if (pseudo.value === ":not" && pseudo.nodes) {
              // For :not() with comma-separated selectors, only the most specific counts
              let maxSpecificity = [0, 0, 0];

              // Calculate threshold for each selector inside :not()
              pseudo.nodes.forEach((notNode) => {
                if (notNode.type === "selector") {
                  const notSelector = notNode as Selector;
                  const notSelectorString = notSelector.toString().trim();

                  if (notSelectorString) {
                    // Recursively calculate threshold for the content inside :not()
                    const notThreshold = calculateSpecificityThreshold(notSelectorString, component, { baseClass: false });

                    // Keep only the most specific (highest specificity)
                    maxSpecificity = getMoreSpecific(notThreshold, maxSpecificity);
                  }
                }
              });

              // Add the most specific threshold values to our total
              totalIds += maxSpecificity[0];
              totalClasses += maxSpecificity[1];
              totalElements += maxSpecificity[2];
            }
          }
        });
      });
    }).processSync(selector);
  } catch (error) {
    console.warn(`Failed to parse selector for :not() detection "${selector}":`, error);
  }

  return [totalIds, totalClasses, totalElements];
}

/**
 * Detailed breakdown information for specificity threshold calculation
 */
interface SpecificityBreakdown {
  baseClassCount: number;
  baseClassName: string;
  variants: string[];
  options: string[];
  states: string[];
  components: string[];
  unrecognizedClasses: string[];
  totalIds: number;
  totalClasses: number;
  totalElements: number;
}

/**
 * Result of enhanced specificity threshold calculation with debugging information
 */
interface SpecificityThresholdResult {
  threshold: number[];
  breakdown: SpecificityBreakdown;
}

/**
 * Configuration options for specificity threshold calculation
 */
interface SpecificityThresholdOptions {
  /** Whether to enforce base className presence (defaults to true) */
  baseClass?: boolean;
  /** Maximum number of state selectors allowed (defaults to no limit) */
  maxStates?: number;
  /** Maximum number of component nesting allowed (defaults to 2) */
  maxComponents?: number;
  /** Maximum DOM elements allowed (defaults to 1) */
  maxElements?: number;
  /** Maximum pseudo-elements allowed (defaults to 1) */
  maxPseudoElements?: number;
}

/**
 * Calculate dynamic specificity threshold using standard CSS specificity as base
 * Returns specificity as [IDs, classes/attributes/pseudo-classes, types/pseudo-elements]
 */
function calculateSpecificityThreshold(selector: string, component: any | null = null, options: SpecificityThresholdOptions = {}): number[] {
  const result = calculateSpecificityThresholdWithBreakdown(selector, component, options);
  return result.threshold;
}

/**
 * Calculate dynamic specificity threshold with detailed breakdown for debugging
 * Returns both the threshold and detailed information about how it was calculated
 */
function calculateSpecificityThresholdWithBreakdown(selector: string, component: any | null = null, options: SpecificityThresholdOptions = {}): SpecificityThresholdResult {
  const { baseClass = false, maxStates = Number.MAX_SAFE_INTEGER, maxComponents = Number.MAX_SAFE_INTEGER, maxElements = Number.MAX_SAFE_INTEGER, maxPseudoElements = Number.MAX_SAFE_INTEGER } = options;

  let ids = 0;
  let classes = 0;
  let elements = 0;

  // Strip :not() and :where() selectors from the main selector for detection functions
  // :not() is handled separately, :where() should be completely ignored due to zero specificity
  const strippedSelector = stripSpecialSelectors(selector);

  // Initialize breakdown tracking
  const breakdown: SpecificityBreakdown = {
    baseClassCount: 0,
    baseClassName: component?.className || "",
    variants: [],
    options: [],
    states: [],
    components: [],
    unrecognizedClasses: [],
    totalIds: 0,
    totalClasses: 0,
    totalElements: 0,
  };

  // Count how many times the base component class appears in the selector
  const baseClassCount = countClassOccurrences(strippedSelector, component?.className || "");
  const hasBaseClass = baseClassCount > 0;
  breakdown.baseClassCount = baseClassCount;

  if (!baseClass || hasBaseClass) {
    if (hasBaseClass) {
      // Add classes based on the number of base class instances, respecting the limit
      const actualCount = Math.min(baseClassCount, maxComponents);
      classes += actualCount;
    }

    // Component variants (count each detected variant class)
    const detectedVariants = detectVariants(strippedSelector, component);
    breakdown.variants = detectedVariants;
    classes += detectedVariants.length;

    // Component options (count each detected option class)
    const detectedOptions = detectOptions(strippedSelector, component);
    breakdown.options = detectedOptions;
    classes += detectedOptions.length;

    // Component states (count each detected state class and pseudo-class)
    const detectedStates = detectStates(strippedSelector, component);
    breakdown.states = detectedStates;
    const stateCount = maxStates !== undefined ? Math.min(detectedStates.length, maxStates) : detectedStates.length;
    classes += stateCount;

    // Other components (count each detected component class)
    const detectedComponents = detectComponents(strippedSelector, component);
    breakdown.components = detectedComponents;
    const componentCount = Math.min(detectedComponents.length, maxComponents);
    classes += componentCount;
  }

  // Handle :not() selectors using dedicated function
  const notSpecificity = detectNot(selector, component);
  ids += notSpecificity[0];
  classes += notSpecificity[1];
  elements += notSpecificity[2];

  // Check for pseudo-elements using proper parsing (on stripped selector)
  const hasPseudoEl = hasPseudoElement(strippedSelector);
  if (hasPseudoEl) {
    elements += Math.min(1, maxPseudoElements);
  }

  // Check for DOM elements using proper parsing (on stripped selector)
  const hasEls = hasElements(strippedSelector);
  if (hasEls) {
    elements += Math.min(1, maxElements);
  }

  // Identify unrecognized classes (classes that don't fit into any category)
  if (component?.className) {
    const allSelectorClasses = getClassNames(strippedSelector);
    const recognizedClasses = new Set([
      component.className,
      ...breakdown.variants,
      ...breakdown.options,
      ...breakdown.states.filter((s) => s.startsWith("k-") || s.startsWith(".")), // Filter out pseudo-classes
      ...breakdown.components,
    ]);

    breakdown.unrecognizedClasses = allSelectorClasses.filter((cls) => !recognizedClasses.has(cls) && cls !== component.className);
  }

  // Set final totals
  breakdown.totalIds = ids;
  breakdown.totalClasses = classes;
  breakdown.totalElements = elements;

  return {
    threshold: [ids, classes, elements],
    breakdown: breakdown,
  };
}

/**
 * Get selectors with specificity information for a specific component
 * This is a convenience wrapper around getComponentSelectors that also calculates actual specificity
 */
function getSelectorsSpecificity(css: string, options: { filter: string; minSpecificity?: number; sourceMap?: any }): Array<{ selector: string; specificityValue: number[]; sourceLocation: string }> {
  // Create a minimal component object for filtering
  const component = { className: options.filter };

  const selectors = getComponentSelectors(css, component, { sourceMap: options.sourceMap });

  return selectors
    .filter(({ specificity }) => {
      if (options.minSpecificity === undefined) return true;
      const totalSpecificity = specificity.reduce((sum, val) => sum + val, 0);
      return totalSpecificity >= options.minSpecificity;
    })
    .map(({ selector, specificity, sourceLocation }) => ({
      selector,
      specificityValue: specificity,
      sourceLocation,
    }));
}

/**
 * Format the specificity breakdown for human-readable debugging output
 * Only shows relevant information when categories have values
 */
function formatSpecificityBreakdown(breakdown: SpecificityBreakdown): string {
  const parts: string[] = [];

  if (breakdown.baseClassCount > 0) {
    const countText = breakdown.baseClassCount > 1 ? ` (${breakdown.baseClassCount}x)` : "";
    parts.push(`Base class: ${breakdown.baseClassName}${countText}`);
  }

  if (breakdown.variants.length > 0) {
    parts.push(`Variants: ${breakdown.variants.join(", ")}`);
  }

  if (breakdown.options.length > 0) {
    parts.push(`Options: ${breakdown.options.join(", ")}`);
  }

  if (breakdown.states.length > 0) {
    parts.push(`States: ${breakdown.states.join(", ")}`);
  }

  if (breakdown.components.length > 0) {
    parts.push(`Components: ${breakdown.components.join(", ")}`);
  }

  if (breakdown.unrecognizedClasses.length > 0) {
    parts.push(`❌ Unrecognized classes: ${breakdown.unrecognizedClasses.join(", ")}`);
  }

  if (parts.length === 0) {
    return "No contributing factors detected";
  }

  return parts.join("\n");
}

/**
 * Test specificity configuration options
 */
interface TestSpecificityOptions {
  /** Theme name from environment (defaults to process.env.THEME) */
  theme?: string;
  /** Base path for resolving theme files (defaults to current directory structure) */
  basePath?: string;
  /** Whether to enforce base className presence (defaults to false for backward compatibility) */
  enforceBaseClassName?: boolean;
  /** Compilation mode - currently only 'component', but extensible for future compiles */
  scope?: "component" | "theme";
  /** Maximum number of state selectors allowed (defaults to no limit) */
  maxStates?: number;
  /** Maximum number of component nesting allowed (defaults to 2) */
  maxComponents?: number;
  /** Maximum DOM elements allowed (defaults to 1) */
  maxElements?: number;
  /** Maximum pseudo-elements allowed (defaults to 1) */
  maxPseudoElements?: number;
  /** Whether to enforce base className presence (new property name) */
  baseClass?: boolean;
}

/**
 * Component tuple type for array-based specificity testing
 */
type ComponentTuple = [Component: any, folder: string, mixin?: string];

/**
 * Utility function to test component specificity for multiple components
 * Handles compilation and generates Jest test cases for an array of components
 *
 * @param theme - Theme name (e.g., "default", "bootstrap", "material", "fluent")
 * @param options - Configuration options (preset)
 * @param components - Array of component tuples [Component, folder, mixin?]
 */
function testSpecificity(theme: string, options: TestSpecificityOptions = {}, components: ComponentTuple[]): void {
  const {
    basePath = path.resolve(__dirname, "../"),
    enforceBaseClassName = false,
    scope = "component",
    maxStates,
    maxComponents = 2,
    maxElements = 1,
    maxPseudoElements = 1,
    baseClass = enforceBaseClassName, // Use new name, fallback to old for compatibility
  } = options;

  const thresholdOptions: SpecificityThresholdOptions = {
    baseClass,
    maxStates,
    maxComponents,
    maxElements,
    maxPseudoElements,
  };

  switch (scope) {
    case "theme":
      const themeResult = sass.compileString(
        `
          @use '${basePath}/packages/${theme}/scss/index.scss' as *;

          @include kendo-theme--styles();
        `,
        {
          loadPaths: [basePath, path.resolve(basePath, "node_modules")],
          sourceMap: true,
        }
      );

      // Process each component against the compiled theme
      components.forEach(([Component]) => {
        describe(`${(Component as any).name} specificity`, () => {
          // Get component selectors from the full theme CSS
          const selectors = getComponentSelectors(themeResult.css, Component, {
            sourceMap: themeResult.sourceMap,
          });

          // Generate test cases for each selector
          selectors.forEach(({ selector, specificity, sourceLocation }) => {
            const expectedSpecificity = calculateSpecificityThreshold(selector, Component, thresholdOptions);

            it(`"${selector}" ([${specificity}])`, () => {
              try {
                expect(`[${String(specificity)}]`).toEqual(`[${String(expectedSpecificity)}]`);
              } catch (error) {
                // Get detailed breakdown for debugging when test fails
                const result = calculateSpecificityThresholdWithBreakdown(selector, Component, thresholdOptions);
                const breakdownInfo = formatSpecificityBreakdown(result.breakdown);

                throw new Error(`${error.message}\n` + `Source: ${sourceLocation}\n` + `${breakdownInfo}`);
              }
            });
          });
        });
      });
      break;
    case "component":
    default:
      // Individual component compilation (current behavior)
      components.forEach(([Component, folder, mixin = folder]) => {
        describe(`${(Component as any).name} specificity`, () => {
          // Compile component SCSS individually
          const result = sass.compileString(
            `
            @use '${basePath}/packages/${theme}/scss/${folder}/_variables.scss' as *;
            @use '${basePath}/packages/${theme}/scss/${folder}/_theme.scss' as *;
            @use '${basePath}/packages/${theme}/scss/${folder}/_layout.scss' as *;

            @include kendo-${mixin}--layout();
            @include kendo-${mixin}--theme();
          `,
            {
              loadPaths: [basePath, path.resolve(basePath, "node_modules")],
              sourceMap: true,
            }
          );

          // Get component selectors
          const selectors = getComponentSelectors(result.css, Component, {
            sourceMap: result.sourceMap,
          });

          // Generate test cases for each selector
          selectors.forEach(({ selector, specificity, sourceLocation }) => {
            const expectedSpecificity = calculateSpecificityThreshold(selector, Component, thresholdOptions);

            it(`"${selector}" ([${specificity}])`, () => {
              try {
                expect(`[${String(specificity)}]`).toEqual(`[${String(expectedSpecificity)}]`);
              } catch (error) {
                // Get detailed breakdown for debugging when test fails
                const result = calculateSpecificityThresholdWithBreakdown(selector, Component, thresholdOptions);
                const breakdownInfo = formatSpecificityBreakdown(result.breakdown);

                throw new Error(`${error.message}\n` + `Source: ${sourceLocation}\n` + `${breakdownInfo}`);
              }
            });
          });
        });
      });
      break;
  }
}

// ESM exports
export { presets, calculateSpecificity, calculateSpecificityThreshold, calculateSpecificityThresholdWithBreakdown, formatSpecificityBreakdown, getComponentSelectors, getSelectorsSpecificity, compareSpecificity, getMoreSpecific, parseSelector, hasClassName, countClassOccurrences, getClassNames, hasPseudoClass, countPseudoClassOccurrences, hasPseudoElement, hasElements, stripNotSelectors, stripWhereSelectors, stripSpecialSelectors, detectNot, testSpecificity };

// Export types for TypeScript consumers
export type { SelectorInfo, Component, ComponentTuple, GetComponentSelectorsOptions, ParsedSelector, SpecificityBreakdown, SpecificityThresholdResult, SpecificityThresholdOptions, TestSpecificityOptions };
