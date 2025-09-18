import { classNames, stateClassNames, States } from '../misc';
import { EditorContent } from './editor-content';
import { EditorToolbar } from './editor-toolbar';

import { KendoComponent } from '../_types/component';
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
Editor.moduleName = "editor";
Editor.folderName = Editor.moduleName;

export default Editor;
