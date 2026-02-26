import { RadioButtonNormal, RadioItem, RadioGroup } from "..";

export const RadioGroupNormal = ({ name, ...other }: any) => (
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
    {...other}
    />
);
