import { RadioButtonNormal } from '../templates/radio-normal';
import { RadioItem } from '../radio-item.spec';
import { RadioGroup } from '../radio-group.spec';

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
