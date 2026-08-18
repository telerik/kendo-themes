import * as React from "react";
import { classNames } from "../misc";
import { Icon } from "../icon";
import { Badge } from "../badge";
import { KendoComponent } from "../_types/component";
import { AGENT_RESPONSE_FOLDER_NAME, AGENT_RESPONSE_MODULE_NAME } from "./constants";

export const THOUGHT_CLASSNAME = "k-thought";

const states = [] as const;
const options = {};

export type KendoThoughtProps = {
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
  /** Status badge text — e.g. "Completed", "Awaiting Approval", "No results found" */
  status?: string;
  /** Theme color for the status Badge */
  statusThemeColor?: "base" | "success" | "warning" | "error" | "info";
  /** Status Badge icon — e.g. "check-circle", "exclamation-circle", "x-circle" */
  statusIcon?: string;
  /** Whether the thought has completed (disables the label shimmer and dims the icon/label) */
  completed?: boolean;
};

const defaultOptions = {
  completed: false,
};

/**
 * @ux {Completed state} When completed, the label stops shimmering and the icon/label dim to a subtle color.
 * @ux {Diff stats} Added/removed line counts always render in success/error colors, regardless of completed state.
 */
export const Thought: KendoComponent<KendoThoughtProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoThoughtProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { icon, label, labelClassName, secondaryLabel, linesAdded, linesRemoved, status, statusThemeColor = "success", statusIcon, completed = defaultOptions.completed, className, children, ...other } = props;

  return (
    <div
      {...other}
      className={classNames(className, THOUGHT_CLASSNAME, {
        "k-thought-completed": completed,
      })}
    >
      {icon && (
        <span className="k-agent-step-icon-col">
          <Icon icon={icon} size="small" className="k-agent-step-icon" />
        </span>
      )}
      <span className="k-agent-step-content">
        {label && <span className={classNames("k-agent-step-label", labelClassName)}>{label}</span>}
        {secondaryLabel && (
          <>
            <span className="k-agent-step-sep">·</span>
            <span className="k-agent-step-secondary">{secondaryLabel}</span>
          </>
        )}
        {linesAdded && <span className="k-agent-step-added">+{linesAdded}</span>}
        {linesRemoved && <span className="k-agent-step-removed">-{linesRemoved}</span>}
        {status && (
          <Badge size="small" themeColor={statusThemeColor} rounded="full">
            {statusIcon && <Icon icon={statusIcon} size="small" />}
            {status}
          </Badge>
        )}
        {children && <div className="k-agent-step-body">{children}</div>}
      </span>
    </div>
  );
};

Thought.states = states;
Thought.options = options;
Thought.className = THOUGHT_CLASSNAME;
Thought.defaultOptions = defaultOptions;
Thought.moduleName = AGENT_RESPONSE_MODULE_NAME;
Thought.folderName = AGENT_RESPONSE_FOLDER_NAME;

export default Thought;
