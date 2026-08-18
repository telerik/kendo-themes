import * as React from "react";
import { classNames, States } from "../misc";
import { AgentStep, KendoAgentStepProps, KendoAgentStepState } from "./agent-step";
import { KendoComponent, KendoBaseProps } from "../_types/component";
import { AGENT_RESPONSE_FOLDER_NAME, AGENT_RESPONSE_MODULE_NAME } from "./constants";

export const TOOL_CALL_CLASSNAME = "k-tool-call";

const states = [
  States.focus
] as const;

const options = {};

export type KendoToolCallProps = KendoAgentStepProps;
export type KendoToolCallState = KendoAgentStepState;

const defaultOptions = {
  icon: "wrench",
};

/**
 * @aria {role="button"} The role is implicit from the native <button> element used for the step's head.
 * @aria {aria-expanded="true"|"false"} Rendered on the head only when the step is expandable, indicating whether its body is currently shown.
 * @aria {aria-label|aria-labelledby} Required on the head when it has no visible label/secondaryLabel text.
 * @ux {Expand / Collapse} Clicking or activating the head toggles the tool call body (parameters, results, approval actions) open and closed.
 * @ux {Status} The optional status Badge reflects the call's outcome (e.g. "Completed", "Awaiting Approval", "Error").
 * @ux {Completed state} When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color.
 * @ux {Focus feedback} Keyboard focus on the head renders a focus indicator — an inset ring in most themes and an inset outline in Meridian.
 */
export const ToolCall: KendoComponent<KendoToolCallProps & KendoToolCallState & React.HTMLAttributes<HTMLDivElement>> = (props: KendoToolCallProps & KendoToolCallState & KendoBaseProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { icon = defaultOptions.icon, className, ...other } = props;

  return <AgentStep {...other} icon={icon} className={classNames(className, TOOL_CALL_CLASSNAME)} />;
};

ToolCall.states = states;
ToolCall.options = options;
ToolCall.className = TOOL_CALL_CLASSNAME;
ToolCall.defaultOptions = defaultOptions;
ToolCall.moduleName = AGENT_RESPONSE_MODULE_NAME;
ToolCall.folderName = AGENT_RESPONSE_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers the focused head, toggling the expanded state when expandable.
 * @keyboard {Tab} Moves focus to the next ToolCall head; each instance is its own stop in the tab sequence.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern
 */

export default ToolCall;
