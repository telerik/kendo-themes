import { RadioGroup } from "../radio-group.spec";
import { RadioItem } from "../radio-item.spec";
import RadioButton from "../radio.spec";

export const RadioGroupDisabled = (props: any) => (
    <RadioGroup children={
        <>
            <RadioItem className="k-disabled">
                <RadioButton disabled aria-label="Disabled option 1" />
            </RadioItem>
            <RadioItem className="k-disabled">
                <RadioButton disabled aria-label="Disabled option 2" />
            </RadioItem>
        </>
    }
    {...props}
    />
);
