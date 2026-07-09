import { classNames, stateClassNames, States } from '../misc';
import { EditorContent } from './editor-content.spec';
import { EditorToolbar } from './editor-toolbar';

import { KendoComponent } from '../_types/component';
import { EDITOR_FOLDER_NAME, EDITOR_MODULE_NAME } from './constants';
export const EDITOR_CLASSNAME = `k-editor`;

const states = [
    States.readonly,
    States.disabled,
    States.focus
];

const options = {};

export type KendoEditorProps = {
    toolbarItems?: React.JSX.Element[] | React.JSX.Element;
    resizable?: boolean;
    toolbarResizable?: boolean;
};

const defaultOptions = {
    toolbarResizable: false
};

export type KendoEditorState = { [K in (typeof states)[number]]?: boolean };

export const Editor: KendoComponent<KendoEditorState & KendoEditorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoEditorState &
        KendoEditorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        readonly,
        disabled,
        focus,
        toolbarItems,
        toolbarResizable = defaultOptions.toolbarResizable,
        resizable,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                EDITOR_CLASSNAME,
                stateClassNames(EDITOR_CLASSNAME, {
                    readonly,
                    disabled,
                }),
                {
                    [`${EDITOR_CLASSNAME}-resizable`]: resizable
                }
            )}>
            <EditorToolbar resizable={toolbarResizable}>
                {toolbarItems}
            </EditorToolbar>
            <EditorContent
                readonly={readonly}
                className={classNames(
                    stateClassNames(EDITOR_CLASSNAME, {
                        focus,
                    }),
                )}>
                {props.children}
            </EditorContent>
        </div>
    );
};

Editor.states = states;
Editor.options = options;
Editor.className = EDITOR_CLASSNAME;
Editor.defaultOptions = defaultOptions;
Editor.moduleName = EDITOR_MODULE_NAME;
Editor.folderName = EDITOR_FOLDER_NAME;

/**
 * @keyboard {Control/Cmd(Mac) + B} Executes bold command.
 * @keyboard {Control/Cmd(Mac) + I} Executes italic command.
 * @keyboard {Control/Cmd(Mac) + U} Executes underline command.
 * @keyboard {Control/Cmd(Mac) + Z} Executes undo command.
 * @keyboard {Control/Cmd(Mac) + Y} Executes redo command.
 * @keyboard {Shift + Enter} Adds ` ` to content.
 * @keyboard {Enter} Adds `` to content.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#textbox WAI-ARIA specification for textbox
 */

export default Editor;
