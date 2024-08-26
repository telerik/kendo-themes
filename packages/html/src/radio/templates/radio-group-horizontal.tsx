import { RadioButtonNormal, RadioItem, RadioGroup } from "..";

export const RadioGroupHorizontal = ({ name, ...other }: any) => (
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
    layout="horizontal"
    {...other}
    />
);

export default RadioGroupHorizontal;
