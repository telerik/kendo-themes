import { Checkbox, CheckboxItem, CheckboxGroup } from "..";

export const CheckboxGroupNormal = (props: any) => (
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
    {...props}
    />
);

export default CheckboxGroupNormal;
