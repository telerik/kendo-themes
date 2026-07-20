import * as React from "react";
import { classNames } from "../misc";
import { Icon } from "../icon";
import { Badge } from "../badge";
import { KendoComponent, KendoBaseProps } from "../_types/component";
import { AGENT_RESPONSE_FOLDER_NAME, AGENT_RESPONSE_MODULE_NAME } from "./constants";

export const AGENT_STEP_CLASSNAME = "k-agent-step";

const states = [] as const;
const options = {};

export type KendoAgentStepProps = {
  /** Icon name for the step type (e.g. "sparkles", "search", "wrench", "code", "file-txt") */
  icon?: string;
  /** Primary label text (bold) — e.g. "Thinking", "bash", "edit", "read" */
  label?: string;
  /** Additional class names applied to the label span (e.g. "k-text-shimmer" for active/streaming state) */
  labelClassName?: string;
  /** Secondary descriptive text (subtle) — e.g. "src/utils/formatDate.ts", "git diff --stat" */
  secondaryLabel?: string;
  /** Number of lines added (rendered green with + prefix) */
  linesAdded?: number;
  /** Number of lines removed (rendered red with - prefix) */
  linesRemoved?: number;
  /** Duration string — e.g. "120ms", "4m 18s" */
  time?: string;
  /** Status badge text — e.g. "Completed", "Awaiting Approval", "No results found" */
  status?: string;
  /** Theme color for the status Badge */
  statusThemeColor?: "base" | "success" | "warning" | "error" | "info";
  /** Status Badge icon — e.g. "check-circle", "exclamation-circle", "x-circle" */
  statusIcon?: string;
  /** Whether the step can be expanded */
  expandable?: boolean;
  /** Whether the step is currently expanded */
  expanded?: boolean;
  /** Whether the step has completed (disables the label shimmer and dims the icon/label) */
  completed?: boolean;
};

const defaultOptions = {
  expandable: false,
  expanded: false,
  completed: false,
};

/**
 * @aria {role="button"} The role is implicit from the native <button> element used for the step's head.
 * @aria {aria-expanded="true"|"false"} Rendered on the head only when the step is expandable, indicating whether its body is currently shown.
 * @aria {aria-label|aria-labelledby} Required on the head when it has no visible label/secondaryLabel text (e.g. icon-only steps).
 * @ux {Expand / Collapse} Clicking or activating the step's head via keyboard toggles the body content open and closed.
 * @ux {Hover feedback} Hovering the head highlights it with the app-surface background and normalizes all text/icon colors to on-app-surface.
 * @ux {Completed state} When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color.
 * @ux {Diff stats} Added/removed line counts always render in success/error colors, regardless of hover or completed state.
 */
export const AgentStep: KendoComponent<KendoAgentStepProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoAgentStepProps & KendoBaseProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { icon, label, labelClassName, secondaryLabel, linesAdded, linesRemoved, time, status, statusThemeColor = "success", statusIcon, expandable = defaultOptions.expandable, expanded = defaultOptions.expanded, completed = defaultOptions.completed, className, children, ...other } = props;

  return (
    <div
      {...other}
      className={classNames(className, AGENT_STEP_CLASSNAME, {
        "k-agent-completed": completed,
      })}
    >
      <button className="k-agent-step-head" aria-expanded={expandable ? expanded : undefined}>
        {icon && <Icon icon={icon} size="small" className="k-agent-step-icon" />}
        <span className="k-agent-step-content">
          {label && <span className={classNames("k-agent-step-label", labelClassName)}>{label}</span>}
          {secondaryLabel && (
            <>
              <span className="k-agent-step-sep">·</span>
              <span className="k-agent-step-secondary">{secondaryLabel}</span>
            </>
          )}
          {linesAdded  && <span className="k-agent-step-added">+{linesAdded}</span>}
          {linesRemoved && <span className="k-agent-step-removed">-{linesRemoved}</span>}
          {time && (
            <>
              <span className="k-agent-step-sep">·</span>
              <span className="k-agent-step-time">{time}</span>
            </>
          )}
          {status && (
            <Badge size="small" themeColor={statusThemeColor} rounded="full">
              {statusIcon && <Icon icon={statusIcon} size="small" />}
              {status}
            </Badge>
          )}
          {expandable && <Icon icon={expanded ? "chevron-up" : "chevron-right"} size="small" className="k-agent-step-expand" />}
        </span>
      </button>
      {expanded && children && <div className="k-agent-step-body">{children}</div>}
    </div>
  );
};

AgentStep.states = states;
AgentStep.options = options;
AgentStep.className = AGENT_STEP_CLASSNAME;
AgentStep.defaultOptions = defaultOptions;
AgentStep.moduleName = AGENT_RESPONSE_MODULE_NAME;
AgentStep.folderName = AGENT_RESPONSE_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers the focused step's head, toggling the expanded state when the step is expandable.
 * @keyboard {Tab} Moves focus to the next step's head; each AgentStep head is its own stop in the tab sequence.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern
 */

export default AgentStep;
