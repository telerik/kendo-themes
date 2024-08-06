import { EditorContent, EditorToolbar } from '..';
import { classNames, stateClassNames, States } from '../misc';

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

export type KendoEditorState = { [K in (typeof states)[number]]?: boolean };

export const Editor = (
    props: KendoEditorState &
        KendoEditorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarResizable = false,
        readonly,
        disabled,
        focus,
        toolbarItems,
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

export default Editor;
