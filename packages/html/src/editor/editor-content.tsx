import { classNames, stateClassNames, States } from '../misc';

export const EDITORCONTENT_CLASSNAME = `k-editor-content`;

const states = [
    States.focus
];

export type KendoEditorContentProps = {
    contentEditable?: boolean;
    readonly?: boolean;
};

export type KendoEditorContentState = { [K in (typeof states)[number]]?: boolean };

export const EditorContent = (
    props: KendoEditorContentProps &
        KendoEditorContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        contentEditable,
        readonly,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                EDITORCONTENT_CLASSNAME,
                stateClassNames(EDITORCONTENT_CLASSNAME, {
                    focus,
                }),
            )}
            role={contentEditable ? "textbox" : undefined}
            aria-readonly={contentEditable && readonly ? "true" : undefined}
            contentEditable={contentEditable}
        >
            {props.children}
        </div>
    );
};

EditorContent.states = states;
EditorContent.className = EDITORCONTENT_CLASSNAME;

export default EditorContent;
