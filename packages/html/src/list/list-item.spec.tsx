import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LIST_FOLDER_NAME, LIST_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const LISTITEM_CLASSNAME = `k-list-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type KendoListItemProps = {
    text?: string;
    groupLabel?: string;
    group?: boolean;
    iconName?: string;
    iconClassName?: string;
    checked?: boolean;
    showCheckbox?: boolean;
    actions?: React.JSX.Element;
    description?: string;
    /**
     * Unique identifier for the list item. Required for aria-activedescendant navigation.
     * @aria id - Used by aria-activedescendant on the combobox/listbox
     */
    id?: string;
};

export type KendoListItemState = { [K in (typeof states)[number]]?: boolean };

export const ListItem: KendoComponent<KendoListItemProps & KendoListItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoListItemProps &
        KendoListItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        groupLabel,
        group,
        iconName,
        iconClassName,
        showCheckbox,
        checked,
        hover,
        focus,
        selected,
        disabled,
        actions,
        description,
        id,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    // Group items have role="presentation", regular items have role="option"
    const itemRole = group ? 'presentation' : 'option';
    // Non-focused items should have tabIndex=-1 for proper keyboard navigation
    const tabIndexValue = focus ? 0 : -1;

    return (
        <li
            {...other}
            id={id}
            role={itemRole}
            tabIndex={!group ? tabIndexValue : undefined}
            aria-selected={!group && selected ? 'true' : (!group ? 'false' : undefined)}
            aria-disabled={!group && disabled ? 'true' : undefined}
            className={classNames(
                props.className,
                group ? `k-list-group-item` : LISTITEM_CLASSNAME,
                stateClassNames(LISTITEM_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                })
            )}
        >
            {showCheckbox && <Checkbox checked={checked} />}
            {iconName && <span className="k-list-item-icon-wrapper"><Icon icon={iconName} className={classNames("k-list-item-icon", iconClassName)} /></span>}
            <span className="k-list-item-text">{textOrChildren}</span>
            {actions && <div className="k-list-item-actions">{actions}</div>}
            {description && <span className="k-list-item-description">{description}</span>}
            {groupLabel && groupLabel !== '' && <div className="k-list-item-group-label">{groupLabel}</div>}
        </li>
    );
};

ListItem.states = states;
ListItem.options = options;
ListItem.className = LISTITEM_CLASSNAME;
ListItem.defaultOptions = defaultOptions;
ListItem.moduleName = LIST_MODULE_NAME;
ListItem.folderName = LIST_FOLDER_NAME;

ListItem.ariaSpec = a11ySpec.ariaSpec;

export default ListItem;
