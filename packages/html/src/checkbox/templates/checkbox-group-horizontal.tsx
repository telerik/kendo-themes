import { CheckboxItem, CheckboxGroup, CheckboxWithLabelAfter } from "..";

export const CheckboxGroupHorizontal = (props: any) => (
    <CheckboxGroup children={
        <>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-h-1">Option 1</CheckboxWithLabelAfter>
            </CheckboxItem>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-h-2">Option 2</CheckboxWithLabelAfter>
            </CheckboxItem>
            <CheckboxItem>
                <CheckboxWithLabelAfter id="chk-grp-h-3">Option 3</CheckboxWithLabelAfter>
            </CheckboxItem>
        </>
    }
    layout="horizontal"
    {...props}
    />
);
