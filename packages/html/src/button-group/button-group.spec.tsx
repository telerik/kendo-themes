import { classNames, optionClassNames, stateClassNames, States, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
export const BUTTONGROUP_CLASSNAME = `k-button-group`;

const states = [
    States.disabled
];

const options = {
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoButtonGroupOptions = {
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoButtonGroupProps = KendoButtonGroupOptions & {
    stretched?: boolean;
};

export type KendoButtonGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    fillMode: FillMode.solid
};

export const ButtonGroup: KendoComponent<KendoButtonGroupProps & KendoButtonGroupState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoButtonGroupProps &
        KendoButtonGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode = defaultOptions.fillMode,
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
                    fillMode
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
ButtonGroup.defaultOptions = defaultOptions;
ButtonGroup.moduleName = "button";
ButtonGroup.folderName = ButtonGroup.moduleName;

export default ButtonGroup;
