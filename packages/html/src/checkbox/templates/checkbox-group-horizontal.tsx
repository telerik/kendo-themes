import { Checkbox } from '../checkbox.spec';
import { CheckboxItem } from '../checkbox-item.spec';
import { CheckboxGroup } from '../checkbox-group.spec';

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
