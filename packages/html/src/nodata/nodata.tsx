import { classNames } from "../misc";

const className = `k-no-data`;

export type NoDataProps = React.HTMLAttributes<HTMLSpanElement> & {
  live?: boolean;
};

/**
 * When true, adds aria-live="polite" for screen reader announcements.
 * @aria {aria-live="polite"} Announces content changes to assistive technologies
 */
export const NoData = (props: NoDataProps) => {
  const { live, ...other } = props;
  return (
    <span {...other} className={classNames(className, props.className)} aria-live={live ? "polite" : undefined}>
      {props.children}
    </span>
  );
};
