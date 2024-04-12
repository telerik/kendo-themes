import { classNames, stateClassNames, States } from '../misc';

export const WIZZARD_CLASSNAME = `k-wizard`;

const states = [
    States.disabled,
];

const options = {};

export type KendoWizardProps = {
    orientation?: "vertical" | "horizontal";
    contentPosition?: "right" | "left";
};

export type KendoWizardState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    orientation: "horizontal",
    contentPosition: "right",
};

export const Wizard = (
    props: KendoWizardProps & KendoWizardState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        orientation = defaultProps.orientation,
        contentPosition = defaultProps.contentPosition,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WIZZARD_CLASSNAME,
                stateClassNames(WIZZARD_CLASSNAME, { disabled }),
                {
                    [`${WIZZARD_CLASSNAME}-${orientation}`]: orientation,
                    [`${WIZZARD_CLASSNAME}-${contentPosition}`]: contentPosition && orientation !== "horizontal",
                }
            )}>
            {props.children}
        </div>
    );
};

Wizard.states = states;
Wizard.options = options;
Wizard.className = WIZZARD_CLASSNAME;
Wizard.defaultProps = defaultProps;

export default Wizard;
