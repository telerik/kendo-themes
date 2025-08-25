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
 * Parse a CSS selector and provide comprehensive analysis
 * Consolidates all selector parsing operations into a single function
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
 * Comprehensive selector analysis that provides all commonly needed selector information
 * Replaces multiple individual functions with a single cached analysis
 */
function analyzeSelector(selector: string) {
  const parsed = parseSelector(selector);

  return {
    parsed,
    hasClassName: (className: string) => parsed.classes.includes(className),
    countClassOccurrences: (className: string) => parsed.classes.filter(cls => cls === className).length,
    getClassNames: () => parsed.classes,
    hasPseudoClass: (pseudoClass: string) => parsed.pseudoClasses.includes(pseudoClass),
    countPseudoClassOccurrences: (pseudoClass: string) => parsed.pseudoClasses.filter(pc => pc === pseudoClass).length,
    hasPseudoElement: () => parsed.pseudoElements.length > 0,
    hasElements: () => parsed.elements.length > 0,
  };
}

// Backward compatibility functions (lightweight wrappers)
function hasClassName(selector: string, className: string): boolean {
  return analyzeSelector(selector).hasClassName(className);
}

function countClassOccurrences(selector: string, className: string): number {
  return analyzeSelector(selector).countClassOccurrences(className);
}

function getClassNames(selector: string): string[] {
  return analyzeSelector(selector).getClassNames();
}

function hasPseudoClass(selector: string, pseudoClass: string): boolean {
  return analyzeSelector(selector).hasPseudoClass(pseudoClass);
}

function countPseudoClassOccurrences(selector: string, pseudoClass: string): number {
  return analyzeSelector(selector).countPseudoClassOccurrences(pseudoClass);
}

function hasPseudoElement(selector: string): boolean {
  return analyzeSelector(selector).hasPseudoElement();
}

function hasElements(selector: string): boolean {
  return analyzeSelector(selector).hasElements();
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
 * Generate all possible class names for a component including base, variants, options, and states
 * Consolidates the repetitive class generation logic into a single function
 */
function generateComponentClasses(component: any): Set<string> {
  const componentClassNames = new Set<string>();

  if (!component?.className) return componentClassNames;

  // Add base className
  componentClassNames.add(component.className);

  // Add variant class names
  if (component.variants && Array.isArray(component.variants)) {
    component.variants.forEach((variant: string) => {
      const variantClasses = variantClassNames(component.className, variant);
      Object.keys(variantClasses).forEach((className) => componentClassNames.add(className));
    });
  }

  // Add option class names - consolidated processing
  if (component.options) {
    const { options } = component;
    const optionTypes = ["size", "fillMode", "themeColor", "rounded"] as const;

    // Process individual option types
    optionTypes.forEach((optionType) => {
      if (options[optionType] && Array.isArray(options[optionType])) {
        options[optionType].forEach((value: string) => {
          const optionClasses = optionClassNames(component.className, { [optionType]: value });
          if (optionClasses) {
            optionClasses
              .split(" ")
              .filter((c) => c.trim())
              .forEach((className) => componentClassNames.add(className));
          }
        });
      }
    });

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
      if (state.startsWith("k-")) {
        // Handle deprecated states that are already k-prefixed class names
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

  return componentClassNames;
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

  // Generate all possible class names for this component using the consolidated function
  const componentClassNames = generateComponentClasses(component);

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
        // Check if subject contains our base class OR any of the componentClassNames
        const subjectClasses = getClassNames(subject);
        const hasBaseClass = hasClassName(subject, component.className);
        const hasComponentClass = subjectClasses.some(cls => componentClassNames.has(cls));

        if (hasBaseClass || hasComponentClass) {
          // Check if all classes in the subject are classes our component can generate
          const allClassesRecognized = subjectClasses.every((cls) =>
            cls === component.className || componentClassNames.has(cls)
          );

          if (allClassesRecognized) {
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
 * Strip specified pseudo-classes from a CSS selector string
 * Consolidates stripNotSelectors, stripWhereSelectors, and stripSpecialSelectors into one function
 */
function stripPseudos(selector: string, pseudosToStrip: string[]): string {
  try {
    let result = selector;

    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        sel.walkPseudos((pseudo) => {
          if (pseudosToStrip.includes(pseudo.value)) {
            pseudo.remove();
          }
        });
      });
      result = selectors.toString();
    }).processSync(selector);

    return result;
  } catch (error) {
    console.warn(`Failed to strip pseudos from selector "${selector}":`, error);
    return selector;
  }
}

// Convenience functions for common stripping operations
function stripNotSelectors(selector: string): string {
  return stripPseudos(selector, [":not"]);
}

function stripWhereSelectors(selector: string): string {
  return stripPseudos(selector, [":where"]);
}

function stripSpecialSelectors(selector: string): string {
  return stripPseudos(selector, [":not", ":where"]);
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
function detectNot(selector: string): number[] {
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

              // Calculate actual CSS specificity for each selector inside :not()
              pseudo.nodes.forEach((notNode) => {
                if (notNode.type === "selector") {
                  const notSelector = notNode as Selector;
                  const notSelectorString = notSelector.toString().trim();

                  if (notSelectorString) {
                    // Use actual CSS specificity calculation instead of our threshold logic
                    // This prevents double-counting and recursive component analysis
                    const cssSpecificity = calculateSpecificity(notSelectorString);

                    // Keep only the most specific (highest specificity)
                    maxSpecificity = getMoreSpecific(cssSpecificity, maxSpecificity);
                  }
                }
              });

              // Add the most specific specificity values to our total
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
 * Extract individual selector parts separated by combinators
 * This function breaks down a selector like ".k-card-wrap.k-focus > .k-card" into individual parts
 * Returns array of selector parts
 */
function extractSelectorParts(selector: string): string[] {
  const parts: string[] = [];

  try {
    selectorParser((selectors) => {
      selectors.each((sel: Selector) => {
        let currentPart = "";

        sel.each((node) => {
          if (node.type === "combinator") {
            // When we hit a combinator, save the current part and reset
            if (currentPart.trim()) {
              parts.push(currentPart.trim());
            }
            currentPart = "";
          } else {
            // Accumulate non-combinator nodes
            currentPart += node.toString();
          }
        });

        // Add the final part
        if (currentPart.trim()) {
          parts.push(currentPart.trim());
        }
      });
    }).processSync(selector);
  } catch (error) {
    console.warn(`Failed to extract selector parts from "${selector}":`, error);
    // Fallback: treat the whole selector as one part
    return [selector];
  }

  return parts;
}

/**
 * Find which component a class belongs to based on all available component specs
 * Returns the component spec if found, null otherwise
 */
function findComponentForClass(className: string): any | null {
  // Get all component specs from the html package
  for (const exportName in htmlComponents) {
    const exportedValue = (htmlComponents as any)[exportName];
    if (exportedValue && exportedValue.className === className) {
      return exportedValue;
    }
  }
  return null;
}

/**
 * Check if a class name could belong to a specific component
 * Simplified using the consolidated component class generation
 */
function couldBelongToComponent(className: string, component: any): boolean {
  if (!component) return false;

  const componentClasses = generateComponentClasses(component);
  return componentClasses.has(className);
}

/**
 * Create a class categorizer for efficient component class analysis
 * Generates category maps once and reuses them for fast lookups
 */
function createClassCategorizer(component: any) {
  const categories = {
    variants: new Set<string>(),
    options: new Set<string>(),
    states: new Set<string>(),
  };

  if (!component) return categories;

  // Generate variant classes
  if (component.variants && Array.isArray(component.variants)) {
    component.variants.forEach((variant: string) => {
      const variantClasses = variantClassNames(component.className, variant);
      Object.entries(variantClasses).forEach(([className, isActive]) => {
        if (isActive) categories.variants.add(className);
      });
    });
  }

  // Generate option classes
  if (component.options) {
    const { options } = component;
    const optionTypes = ["size", "fillMode", "themeColor", "rounded"] as const;

    optionTypes.forEach((optionType) => {
      if (options[optionType] && Array.isArray(options[optionType])) {
        options[optionType].forEach((value: string) => {
          const optionClasses = optionClassNames(component.className, { [optionType]: value });
          if (optionClasses) {
            optionClasses.split(" ").filter(c => c.trim()).forEach(className => {
              categories.options.add(className);
            });
          }
        });
      }
    });

    // Combined fillMode + themeColor options
    if (options.fillMode && options.themeColor) {
      options.fillMode.forEach((fillMode: string) => {
        options.themeColor.forEach((themeColor: string) => {
          const optionClasses = optionClassNames(component.className, { fillMode, themeColor });
          if (optionClasses) {
            optionClasses.split(" ").filter(c => c.trim()).forEach(className => {
              categories.options.add(className);
            });
          }
        });
      });
    }
  }

  // Generate state classes
  if (component.states && Array.isArray(component.states)) {
    component.states.forEach((state: string) => {
      if (state.startsWith("k-")) {
        categories.states.add(state);
      } else {
        const stateProps = { [state]: true };
        const stateClasses = stateClassNames(component.className, stateProps);
        if (stateClasses) {
          stateClasses.split(" ").filter(c => c.trim()).forEach(className => {
            categories.states.add(className);
          });
        }
      }
    });
  }

  return categories;
}

/**
 * Analyze a single selector part using efficient categorization
 * Simplified and faster than the previous implementation
 */
function analyzeSelectorPart(
  part: string,
  targetComponent: any | null = null
): {
  foundComponent: any | null;
  baseClassCount: number;
  variants: string[];
  options: string[];
  states: string[];
  pseudoStates: string[];
  unrecognizedClasses: string[];
} {
  const result = {
    foundComponent: null as any | null,
    baseClassCount: 0,
    variants: [] as string[],
    options: [] as string[],
    states: [] as string[],
    pseudoStates: [] as string[],
    unrecognizedClasses: [] as string[],
  };

  const parsed = parseSelector(part);
  result.pseudoStates = parsed.pseudoClasses;

  // Find component in this part
  let componentInPart: any | null = null;

  // First try to find a component by base class name
  for (const className of parsed.classes) {
    const foundComponent = findComponentForClass(className);
    if (foundComponent) {
      componentInPart = foundComponent;
      result.foundComponent = foundComponent;
      result.baseClassCount = parsed.classes.filter(cls => cls === className).length;
      break;
    }
  }

  // If no component found, check target component
  if (!componentInPart && targetComponent) {
    if (parsed.classes.includes(targetComponent.className)) {
      componentInPart = targetComponent;
      result.foundComponent = targetComponent;
      result.baseClassCount = parsed.classes.filter(cls => cls === targetComponent.className).length;
    } else if (parsed.classes.some(className => couldBelongToComponent(className, targetComponent))) {
      componentInPart = targetComponent;
      result.foundComponent = targetComponent;
      result.baseClassCount = 0;
    }
  }

  // Categorize remaining classes efficiently
  if (componentInPart) {
    const categorizer = createClassCategorizer(componentInPart);

    for (const className of parsed.classes) {
      if (className === componentInPart.className) continue; // Already counted

      if (categorizer.variants.has(className)) {
        result.variants.push(className);
      } else if (categorizer.options.has(className)) {
        result.options.push(className);
      } else if (categorizer.states.has(className)) {
        result.states.push(className);
      } else {
        result.unrecognizedClasses.push(className);
      }
    }
  } else {
    // No component found, all classes are unrecognized
    result.unrecognizedClasses.push(...parsed.classes);
  }

  return result;
}

/**
 * Calculate dynamic specificity threshold with detailed breakdown for debugging
 * Returns both the threshold and detailed information about how it was calculated
 * Always includes breakdown - no separate function needed
 */
function calculateSpecificityThreshold(selector: string, component: any | null = null, options: SpecificityThresholdOptions = {}): SpecificityThresholdResult {
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

  // Extract individual selector parts separated by combinators
  const parts = extractSelectorParts(strippedSelector);

  // Process each part individually to find component-specific contributions
  for (const part of parts) {
    const analysis = analyzeSelectorPart(part, component);

    // Only count contributions from parts that contain recognized components
    if (analysis.foundComponent) {
      // Count the base component
      if (component && analysis.foundComponent.className === component.className) {
        breakdown.baseClassCount += analysis.baseClassCount;
        classes += analysis.baseClassCount;
      } else {
        // It's a different component
        breakdown.components.push(analysis.foundComponent.className);
        classes += analysis.baseClassCount;
      }

      // Count variants, options, and states for this component
      classes += analysis.variants.length;
      classes += analysis.options.length;
      classes += analysis.states.length;

      // Update breakdown tracking
      breakdown.variants.push(...analysis.variants);
      breakdown.options.push(...analysis.options);
      breakdown.states.push(...analysis.states);
    }

    // Always count pseudo-states (they apply regardless of component recognition)
    classes += analysis.pseudoStates.length;
    breakdown.states.push(...analysis.pseudoStates);

    // Track unrecognized classes for debugging but don't count them toward specificity
    breakdown.unrecognizedClasses.push(...analysis.unrecognizedClasses);
  }

  // Apply baseClass requirement if specified
  if (baseClass && breakdown.baseClassCount === 0) {
    // If base class is required but not found, reset everything to 0
    classes = 0;
    breakdown.variants = [];
    breakdown.options = [];
    breakdown.states = [];
    breakdown.components = [];
    breakdown.unrecognizedClasses = [];
  }

  // Apply limits after collecting all data
  const limitedBaseClasses = Math.min(breakdown.baseClassCount, maxComponents);
  const limitedComponents = Math.min(breakdown.components.length, maxComponents);
  const limitedStates = Math.min(breakdown.states.length, maxStates);

  // Recalculate total classes with limits applied - EXCLUDE unrecognized classes
  classes = limitedBaseClasses + breakdown.variants.length + breakdown.options.length + limitedStates + limitedComponents;

  // Handle :not() selectors using dedicated function
  const notSpecificity = detectNot(selector);
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
                expect(`[${String(specificity)}]`).toEqual(`[${String(expectedSpecificity.threshold)}]`);
              } catch (error) {
                // Get detailed breakdown for debugging when test fails
                const result = calculateSpecificityThreshold(selector, Component, thresholdOptions);
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
                expect(`[${String(specificity)}]`).toEqual(`[${String(expectedSpecificity.threshold)}]`);
              } catch (error) {
                // Get detailed breakdown for debugging when test fails
                const result = calculateSpecificityThreshold(selector, Component, thresholdOptions);
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
export { presets, calculateSpecificity, calculateSpecificityThreshold, formatSpecificityBreakdown, getComponentSelectors, getSelectorsSpecificity, compareSpecificity, getMoreSpecific, parseSelector, hasClassName, countClassOccurrences, getClassNames, hasPseudoClass, countPseudoClassOccurrences, hasPseudoElement, hasElements, stripNotSelectors, stripWhereSelectors, stripSpecialSelectors, detectNot, testSpecificity, analyzeSelectorPart, couldBelongToComponent };

// Export types for TypeScript consumers
export type { SelectorInfo, Component, ComponentTuple, GetComponentSelectorsOptions, ParsedSelector, SpecificityBreakdown, SpecificityThresholdResult, SpecificityThresholdOptions, TestSpecificityOptions };
