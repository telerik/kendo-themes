import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Checkbox } from './checkbox.spec';
export const CHECKBOXITEM_CLASSNAME = `k-checkbox-list-item`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCheckboxItemState = { [K in (typeof states)[number]]?: boolean };

export const CheckboxItem: KendoComponent<KendoCheckboxItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoCheckboxItemState &
     React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        ...other
    } = props;
    return (
        <li
            {...other}
            className={classNames(
                props.className,
                CHECKBOXITEM_CLASSNAME,
            )}
        >
            {props.children}
        </li>
    );
};

CheckboxItem.states = states;
CheckboxItem.options = options;
CheckboxItem.className = CHECKBOXITEM_CLASSNAME;
CheckboxItem.defaultOptions = defaultOptions;
CheckboxItem.moduleName = Checkbox.moduleName;
CheckboxItem.folderName = Checkbox.folderName;

export default CheckboxItem;
