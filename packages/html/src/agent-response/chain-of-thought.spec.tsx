import * as React from "react";
import { classNames } from "../misc";
import { AgentStep, KendoAgentStepProps } from "./agent-step";
import { KendoComponent, KendoBaseProps } from "../_types/component";
import { AGENT_RESPONSE_FOLDER_NAME, AGENT_RESPONSE_MODULE_NAME } from "./constants";

export const CHAIN_OF_THOUGHT_CLASSNAME = "k-chain-of-thought";

const states = [] as const;
const options = {};

export type KendoChainOfThoughtProps = KendoAgentStepProps;

const defaultOptions = {
  icon: "sparkles",
};

/**
 * @aria {role="button"} The role is implicit from the native <button> element used for the step's head.
 * @aria {aria-expanded="true"|"false"} Rendered on the head only when the step is expandable, indicating whether its body is currently shown.
 * @aria {aria-label|aria-labelledby} Required on the head when it has no visible label/secondaryLabel text.
 * @ux {Expand / Collapse} Clicking or activating the head toggles the nested Thought steps open and closed.
 * @ux {Completed state} When completed, the label stops shimmering and the icon/label/expand icon dim to a subtle color.
 */
export const ChainOfThought: KendoComponent<KendoChainOfThoughtProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoChainOfThoughtProps & KendoBaseProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { icon = defaultOptions.icon, className, ...other } = props;

  return <AgentStep {...other} icon={icon} className={classNames(className, CHAIN_OF_THOUGHT_CLASSNAME)} />;
};

ChainOfThought.states = states;
ChainOfThought.options = options;
ChainOfThought.className = CHAIN_OF_THOUGHT_CLASSNAME;
ChainOfThought.defaultOptions = defaultOptions;
ChainOfThought.moduleName = AGENT_RESPONSE_MODULE_NAME;
ChainOfThought.folderName = AGENT_RESPONSE_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers the focused head, toggling the expanded state when expandable.
 * @keyboard {Tab} Moves focus to the next ChainOfThought head; each instance is its own stop in the tab sequence.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ WAI-ARIA Authoring Practices: Disclosure (Show/Hide) Pattern
 */

export default ChainOfThought;
