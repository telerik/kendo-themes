import { Stepper, KendoStepperProps } from '../stepper.spec';
import { Step } from '../step';
import { StepList } from '../step-list';
import { ProgressBarNormal } from '../../progressbar';

const options = Stepper.options;
const states = Stepper.states;
const defaults = {
  ...Stepper.defaultOptions,
  variant: 'horizontal',
};

const variants = [
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
    {
        name: 'vertical',
        title: 'Vertical',
    },
];

const modifiers = [
    {
        name: 'label',
        title: 'Label',
    },
    {
        name: 'optional',
        title: 'Optional',
    },
];

export const StepperDemo = (
    props: KendoStepperProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'label': {
                additionalProps.label = mods?.[modifier] ? "Label" : undefined;
                break;
            }
            case 'optional': {
                additionalProps.optional = mods?.[modifier] ? true : false;
                break;
            }
        }
    });

    switch (variant) {
        case 'vertical':
            return (
                <Stepper style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }} {...other}>
                    <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <Step first done icon="check" label={additionalProps.label} style={{ maxHeight: "33.333%" }} />
                        <Step current focus text="2" label={additionalProps.label} style={{ maxHeight: "33.333%" }} />
                        <Step last optional={additionalProps.optional} text="3" label={additionalProps.label} style={{ maxHeight: "33.333%" }} />
                    </StepList>
                    <ProgressBarNormal className="k-top-5 k-row-start-1 k-row-end-3" orientation="vertical" reverse={true} label={false} value="50" />
                </Stepper>
            );
        case 'horizontal':
        default:
            return (
                <Stepper style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }} {...other}>
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done icon="check" label={additionalProps.label} style={{ maxWidth: "33.333%" }} />
                        <Step current focus text="2" label={additionalProps.label} style={{ maxWidth: "33.333%" }} />
                        <Step last optional={additionalProps.optional} text="3" label={additionalProps.label} style={{ maxWidth: "33.333%" }} />
                    </StepList>
                    <ProgressBarNormal className="k-col-start-2 k-col-end-6" style={{ width: "400px" }} label={false} value="50" />
                </Stepper>
            );
    }
}


StepperDemo.options = options;
StepperDemo.states = states;
StepperDemo.variants = variants;
StepperDemo.defaultOptions = defaults;
StepperDemo.modifiers = modifiers;

export default StepperDemo;

