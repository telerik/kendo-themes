import { RadioButtonNormal, RadioItem, RadioGroup } from "..";

export const RadioGroupHorizontal = ({ name, ...other }: any) => (
    <RadioGroup children={
        <>
            <RadioItem>
                <RadioButtonNormal name={name} aria-label="Option 1" />
            </RadioItem>
            <RadioItem>
                <RadioButtonNormal name={name} aria-label="Option 2" />
            </RadioItem>
            <RadioItem>
                <RadioButtonNormal name={name} aria-label="Option 3" />
            </RadioItem>
        </>
    }
    layout="horizontal"
    {...other}
    />
);
