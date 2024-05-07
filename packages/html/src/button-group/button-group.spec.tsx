import { classNames, optionClassNames, stateClassNames, States, Roundness, FillMode } from '../misc';

export const BUTTONGROUP_CLASSNAME = `k-button-group`;

const states = [
    States.disabled
];

const options = {
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ]
};

export type KendoButtonGroupOptions = {
  fillMode?: (typeof options.fillMode)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
};

export type KendoButtonGroupProps = KendoButtonGroupOptions & {
    stretched?: boolean;
};

export type KendoButtonGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    fillMode: FillMode.solid,
    rounded: Roundness.medium
};

export const ButtonGroup = (
    props: KendoButtonGroupProps &
        KendoButtonGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode = defaultProps.fillMode,
        rounded = defaultProps.rounded,
        disabled,
        stretched,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                BUTTONGROUP_CLASSNAME,
                optionClassNames(BUTTONGROUP_CLASSNAME, {
                    fillMode,
                    rounded
                }),
                stateClassNames(BUTTONGROUP_CLASSNAME, {
                    disabled
                }),
                {
                    [`${BUTTONGROUP_CLASSNAME}-stretched`]: stretched,
                }
            )}
        >
            { props.children }
        </div>
    );
};

ButtonGroup.states = states;
ButtonGroup.options = options;
ButtonGroup.className = BUTTONGROUP_CLASSNAME;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
