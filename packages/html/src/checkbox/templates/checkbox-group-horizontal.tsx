import { Checkbox, CheckboxItem, CheckboxGroup } from "..";

export const CheckboxGroupHorizontal = (props: any) => (
    <CheckboxGroup children={
        <>
            <CheckboxItem>
                <Checkbox aria-label="Option 1"/>
            </CheckboxItem>
            <CheckboxItem>
                <Checkbox aria-label="Option 2"/>
            </CheckboxItem>
            <CheckboxItem>
                <Checkbox aria-label="Option 3"/>
            </CheckboxItem>
        </>
    }
    layout="horizontal"
    {...props}
    />
);
