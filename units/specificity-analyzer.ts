import postcss from "postcss";
import { selectorSpecificity } from "@csstools/selector-specificity";
import selectorParser, { Selector, Node, ClassName, Tag, Pseudo, Attribute } from "postcss-selector-parser";
import { SourceMapConsumer } from "@jridgewell/source-map";
import { optionClassNames, stateClassNames, variantClassNames } from "../packages/html/src/misc/component-class-names";
import * as htmlComponents from "../packages/html/src/index";

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
            case 'class':
              result.classes.push((node as ClassName).value);
              break;
            case 'tag':
              result.elements.push((node as Tag).value);
              break;
            case 'pseudo':
              const pseudo = node as Pseudo;
              if (pseudo.value.startsWith('::')) {
                result.pseudoElements.push(pseudo.value);
              } else {
                result.pseudoClasses.push(pseudo.value);
              }
              break;
            case 'attribute':
              result.attributes.push((node as Attribute).attribute);
              break;
            case 'id':
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
  return parsed.classes.filter(cls => cls === className).length;
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
  return parsed.pseudoClasses.filter(pc => pc === pseudoClass).length;
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
          if (node.type === 'pseudo') {
            const pseudo = node as Pseudo;

            if (pseudo.value.startsWith('::')) {
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
          if (pseudo.value === ':not') {
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
          if (pseudo.value === ':where') {
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
          if (pseudo.value === ':not' || pseudo.value === ':where') {
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
          if (node.type === 'pseudo') {
            const pseudo = node as Pseudo;
            if (pseudo.value === ':not' && pseudo.nodes) {
              // For :not() with comma-separated selectors, only the most specific counts
              let maxSpecificity = [0, 0, 0];

              // Calculate threshold for each selector inside :not()
              pseudo.nodes.forEach((notNode) => {
                if (notNode.type === 'selector') {
                  const notSelector = notNode as Selector;
                  const notSelectorString = notSelector.toString().trim();

                  if (notSelectorString) {
                    // Recursively calculate threshold for the content inside :not()
                    const notThreshold = calculateSpecificityThreshold(notSelectorString, component, false);

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
 * Calculate dynamic specificity threshold using standard CSS specificity as base
 * Returns specificity as [IDs, classes/attributes/pseudo-classes, types/pseudo-elements]
 */
function calculateSpecificityThreshold(selector: string, component: any | null = null, enforceBaseClassName: boolean = true): number[] {
  let ids = 0;
  let classes = 0;
  let elements = 0;

  // Maximum allowed component instances
  const MAX_ALLOWED_INSTANCES = 2;

  // Strip :not() and :where() selectors from the main selector for detection functions
  // :not() is handled separately, :where() should be completely ignored due to zero specificity
  const strippedSelector = stripSpecialSelectors(selector);

  // Count how many times the base component class appears in the selector
  const baseClassCount = countClassOccurrences(strippedSelector, component.className);
  const hasBaseClass = baseClassCount > 0;

  if (!enforceBaseClassName || hasBaseClass) {
    if (hasBaseClass) {
      // Add classes based on the number of base class instances, respecting the limit
      classes += Math.min(baseClassCount, MAX_ALLOWED_INSTANCES);
    }

    // Component variants (count each detected variant class)
    const detectedVariants = detectVariants(strippedSelector, component);
    classes += detectedVariants.length;

    // Component options (count each detected option class)
    const detectedOptions = detectOptions(strippedSelector, component);
    classes += detectedOptions.length;

    // Component states (count each detected state class and pseudo-class)
    const detectedStates = detectStates(strippedSelector, component);
    classes += detectedStates.length;

    // Other components (count each detected component class)
    const detectedComponents = detectComponents(strippedSelector, component);
    classes += detectedComponents.length;
  }

  // Handle :not() selectors using dedicated function
  const notSpecificity = detectNot(selector, component);
  ids += notSpecificity[0];
  classes += notSpecificity[1];
  elements += notSpecificity[2];

  // Check for pseudo-elements using proper parsing (on stripped selector)
  if (hasPseudoElement(strippedSelector)) {
    elements += 1;
  }

  // Check for DOM elements using proper parsing (on stripped selector)
  if (hasElements(strippedSelector)) {
    elements += 1;
  }

  return [ids, classes, elements];
}

// ESM exports
export {
  calculateSpecificity,
  calculateSpecificityThreshold,
  getComponentSelectors,
  compareSpecificity,
  getMoreSpecific,
  parseSelector,
  hasClassName,
  countClassOccurrences,
  getClassNames,
  hasPseudoClass,
  countPseudoClassOccurrences,
  hasPseudoElement,
  hasElements,
  stripNotSelectors,
  stripWhereSelectors,
  stripSpecialSelectors,
  detectNot
};
