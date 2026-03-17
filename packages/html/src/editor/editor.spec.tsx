import { classNames, stateClassNames, States } from '../misc';
import { EditorContent } from './editor-content';
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
 * @see Toolbar ariaSpec for editor toolbar accessibility
 */
Editor.ariaSpec = {
    selector: '.k-editor',
    rules: [
        { selector: '.k-editor-content[contenteditable]', attribute: 'role=textbox', usage: 'Specifies the role of the component as text input.' },
        { selector: '.k-editor-content[contenteditable]', attribute: 'aria-label', usage: 'The component focusable element needs an accessible name.' },
        { selector: '.k-editor.k-readonly .k-editor-content[contenteditable="false"]', attribute: 'aria-readonly=true', usage: 'Rendered only when the Editor is readonly.' },
    ]
};

export default Editor;
