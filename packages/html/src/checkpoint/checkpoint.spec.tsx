import * as React from "react";
import { classNames } from "../misc";
import { KendoComponent } from "../_types/component";
import { CHECKPOINT_FOLDER_NAME, CHECKPOINT_MODULE_NAME } from "./constants";

export const CHECKPOINT_CLASSNAME = "k-checkpoint";

const states = [] as const;
const options = {};

export type KendoCheckpointProps = {
  /** Forces the checkpoint to stay visible (opacity 1). By default it's only revealed on hover/focus. */
  visible?: boolean;
};

const defaultOptions = {};

/**
 * @aria {aria-hidden="true"} The gradient separator lines are decorative and hidden from assistive technologies.
 *
 * @ux {Hover reveal} Hidden by default and faded in on hover of the checkpoint or when a descendant (e.g. a Button) receives focus.
 * @ux {Always visible} Set the `visible` prop to keep the checkpoint permanently shown, bypassing the hover/focus reveal.
 * @ux {Conversation UI} When the checkpoint's retry option is used within a conversation UI, the sender's text should be populated into the conversation UI input.
 */
export const Checkpoint: KendoComponent<KendoCheckpointProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoCheckpointProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, visible, ...other } = props;

  return (
    <div
      {...other}
      className={classNames(className, CHECKPOINT_CLASSNAME, {
        "k-checkpoint-visible": visible === true,
      })}
    >
      <span className="k-checkpoint-line" aria-hidden="true"></span>
      {children}
      <span className="k-checkpoint-line" aria-hidden="true"></span>
    </div>
  );
};

Checkpoint.states = states;
Checkpoint.options = options;
Checkpoint.className = CHECKPOINT_CLASSNAME;
Checkpoint.defaultOptions = defaultOptions;
Checkpoint.moduleName = CHECKPOINT_MODULE_NAME;
Checkpoint.folderName = CHECKPOINT_FOLDER_NAME;

/**
 * @keyboard {Tab} Focusing an interactive descendant (e.g. a Button) reveals the checkpoint via `:focus-within`.
 */

export default Checkpoint;
