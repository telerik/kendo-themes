import { classNames, stateClassNames, States } from '../misc';

export const EDITORCONTENT_CLASSNAME = `k-editor-content`;

const states = [
    States.focus
];

export type KendoEditorContentState = { [K in (typeof states)[number]]?: boolean };

export type KendoEditorContentProps = {
    /** @aria aria-readonly=true when the editor is readonly */
    readonly?: boolean;
    'aria-label'?: string;
};

export const EditorContent = (
    props: KendoEditorContentProps &
        KendoEditorContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        readonly,
        'aria-label': ariaLabel,
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
            contentEditable={readonly ? 'false' : 'true'}
            role="textbox"
            aria-label={ariaLabel || 'Editor content'}
            aria-readonly={readonly ? 'true' : undefined}
        >
            {props.children}
        </div>
    );
};

EditorContent.states = states;
EditorContent.className = EDITORCONTENT_CLASSNAME;

export default EditorContent;
