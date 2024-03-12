import { RadioButtonNormal, RadioItem, RadioGroup } from "..";

export const RadioGroupNormal = ({ name, ...other }: any) => (
    <RadioGroup children={
        <>
            <RadioItem>
                <RadioButtonNormal name={name} />
            </RadioItem>
            <RadioItem>
                <RadioButtonNormal name={name}/>
            </RadioItem>
            <RadioItem>
                <RadioButtonNormal name={name}/>
            </RadioItem>
        </>
    }
    {...other}
    />
);
