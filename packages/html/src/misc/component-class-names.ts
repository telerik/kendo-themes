import { classNames } from "./class-names";

export const optionClassNames = (componentClassName: string, props: any) => {
  return classNames(
    {
      [`${componentClassName}-xs`]: props.size === "xsmall",
      [`${componentClassName}-sm`]: props.size === "small",
      [`${componentClassName}-md`]: props.size === "medium",
      [`${componentClassName}-lg`]: props.size === "large",
      [`${componentClassName}-xl`]: props.size === "xlarge",
      [`${componentClassName}-xxl`]: props.size === "xxlarge",
      [`${componentClassName}-xxxl`]: props.size === "xxxlarge",
    },
    {
      [`${componentClassName}-${props.fillMode}`]: props.fillMode,
    },
    {
      [`${componentClassName}-${props.fillMode}-${props.themeColor}`]: props.fillMode && props.themeColor,
    },
    {
      [`${componentClassName}-${props.themeColor}`]: props.themeColor && props.fillMode === undefined,
    },
    {
      "k-rounded-sm": props.rounded === "small",
      "k-rounded-md": props.rounded === "medium",
      "k-rounded-lg": props.rounded === "large",
      "k-rounded-full": props.rounded === "full",
    }
  );
};

export const stateClassNames = (_componentClassName: string | undefined, props: any) => {
  const { valid, invalid, hover, focus, checked, active, selected, disabled, indeterminate, loading, empty, readonly, highlighted, ...other } = props;
  return classNames(
    {
      "k-valid": valid,
      "k-invalid": invalid,
      "k-hover": hover,
      "k-focus": focus,
      "k-checked": checked,
      "k-active": active,
      "k-selected": selected,
      "k-disabled": disabled,
      "k-indeterminate": indeterminate && !checked,
      "k-loading": loading,
      "k-empty": empty,
      "k-readonly": readonly,
      "k-highlighted": highlighted,
    },
    Object.keys(other).reduce((acc, key) => {
      acc[`k-${key}`] = other[key];
      return acc;
    }, {})
  );
};

/**
 * Helper function to generate variant class names with k- prefix
 * @param baseClass - The base component class name (e.g., 'k-button')
 * @param variants - Single variant string, array of variants, or null
 * @returns Object with variant class names as keys and true as values
 */
export function variantClassNames(baseClass: string, variants?: string | string[] | null): Record<string, boolean> {
  if (!variants) return {};

  const variantArray = Array.isArray(variants) ? variants : [variants];
  return Object.fromEntries(variantArray.map((variant) => [`k-${variant}`, true]));
}
