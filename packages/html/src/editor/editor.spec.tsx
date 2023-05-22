import { classNames, stateClassNames, States } from '../misc';

export const EDITOR_CLASSNAME = `k-editor`;

const states = [
    States.readonly
];

const options = {};

const defaultProps = {};

export type KendoEditorState = { [K in (typeof states)[number]]?: boolean };

export const Editor = (
    props: KendoEditorState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        readonly,
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
                }),
            )}>
            {props.children}
        </div>
    );
};

Editor.states = states;
Editor.options = options;
Editor.className = EDITOR_CLASSNAME;
Editor.defaultProps = defaultProps;

export default Editor;
