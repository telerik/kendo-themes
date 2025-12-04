import { CheckboxItem, CheckboxGroup, CheckboxWithLabelAfter } from "..";

export const CheckboxGroupNormal = (props: any) => (
    <CheckboxGroup children={
        <>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-1">Option 1</CheckboxWithLabelAfter>
            </CheckboxItem>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-2">Option 2</CheckboxWithLabelAfter>
            </CheckboxItem>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-3">Option 3</CheckboxWithLabelAfter>
            </CheckboxItem>
        </>
    }
    {...props}
    />
);
