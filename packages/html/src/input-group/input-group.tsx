import { classNames, optionClassNames, stateClassNames, States, FillMode } from '../misc';

export const INPUTGROUP_CLASSNAME = `k-input-group`;

const states = [
    States.disabled
];

const options = {
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoInputGroupOptions = {
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoInputGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    fillMode: FillMode.solid
};

export const InputGroup = (
    props: KendoInputGroupOptions &
        KendoInputGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode = defaultOptions.fillMode,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                INPUTGROUP_CLASSNAME,
                optionClassNames(INPUTGROUP_CLASSNAME, {
                    fillMode
                }),
                stateClassNames(INPUTGROUP_CLASSNAME, {
                    disabled
                })
            )}
        >
            { props.children }
        </div>
    );
};

InputGroup.states = states;
InputGroup.options = options;
InputGroup.className = INPUTGROUP_CLASSNAME;
InputGroup.defaultOptions = defaultOptions;

export default InputGroup;
