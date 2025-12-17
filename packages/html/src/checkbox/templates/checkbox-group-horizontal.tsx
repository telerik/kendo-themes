import { Checkbox, CheckboxItem, CheckboxGroup } from "..";

export const CheckboxGroupHorizontal = (props: any) => (
    <CheckboxGroup children={
        <>
            <CheckboxItem>
                <Checkbox/>
            </CheckboxItem>
            <CheckboxItem>
                <Checkbox/>
            </CheckboxItem>
            <CheckboxItem>
                <Checkbox/>
            </CheckboxItem>
        </>
    }
    layout="horizontal"
    {...props}
    />
);
