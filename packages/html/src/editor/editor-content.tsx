import { classNames, stateClassNames, States } from '../utils-new';

export const EDITORCONTENT_CLASSNAME = `k-editor-content`;

const states = [
    States.focus,
];

export type KendoEditorContentState = { [K in (typeof states)[number]]?: boolean };

export const EditorContent = (
    props: KendoEditorContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
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
            )}>
            {props.children}
        </div>
    );
};
