import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from "../misc";

export type SrAnnouncerProps = HTMLAttributes<HTMLDivElement> & {
  message?: ReactNode;
};

/**
 * Visually hidden (k-sr-only) live region that announces status messages to screen readers.
 * It must stay rendered so screen readers detect when its text changes. Dropdowns render it next to
 * the input (never inside the popup), e.g. "No data found." when the popup opens empty, or "{n} found items" after filtering.
 *
 * @aria {aria-live="polite"} Announces the no-data state and the number of found items when filtering.
 */
export const SrAnnouncer = (props: SrAnnouncerProps) => {
  const { message, ...other } = props;

  return (
    <div {...other} className={classNames(props.className, 'k-sr-only')} aria-live="polite">
      <span>{message}</span>
    </div>
  );
};
