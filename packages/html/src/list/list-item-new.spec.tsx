import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LIST_FOLDER_NAME, LIST_MODULE_NAME } from './constants';
export const LISTITEMNEW_CLASSNAME = `k-list-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type KendoListItemNewProps = {
    text?: string;
    groupLabel?: string;
    group?: boolean;
    showIcon?: boolean;
    iconName?: string;
    checked?: boolean;
    showCheckbox?: boolean;
    showIconEnd?: boolean;
    endIconName?: string;
    description?: string;
    endContent?: React.JSX.Element;
};

export type KendoListItemNewState = { [K in (typeof states)[number]]?: boolean };

export const ListItemNew: KendoComponent<KendoListItemNewProps & KendoListItemNewState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoListItemNewProps &
        KendoListItemNewState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        groupLabel,
        group,
        showIcon,
        iconName,
        showCheckbox,
        checked,
        hover,
        focus,
        selected,
        disabled,
        endContent,
        description,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                group ? `k-list-group-item` : LISTITEMNEW_CLASSNAME,
                stateClassNames(LISTITEMNEW_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                })
            )}
        >
            {showCheckbox && <Checkbox checked={checked} />}
            {showIcon && <Icon icon={iconName} />}
            <span className="k-list-item-text">{textOrChildren}</span>
            {endContent && <div className="endContent">{endContent}</div>}
            {description && <span className="k-list-item-description">{description}</span>}
            {groupLabel && groupLabel !== '' && <div className="k-list-item-group-label">{groupLabel}</div>}
        </li>
    );
};

ListItemNew.states = states;
ListItemNew.options = options;
ListItemNew.className = LISTITEMNEW_CLASSNAME;
ListItemNew.defaultOptions = defaultOptions;
ListItemNew.moduleName = LIST_MODULE_NAME;
ListItemNew.folderName = LIST_FOLDER_NAME;

export default ListItemNew;
