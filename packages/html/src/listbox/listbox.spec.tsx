import { Button } from '../button';
import List from '../list/list.spec';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../utils-new';

export const LISTBOX_CLASSNAME = `k-listbox`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoListBoxOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListBoxProps = KendoListBoxOptions & {
    children?: JSX.Element[];
    actionsPosition?: 'left' | 'right' | 'top' | 'bottom';
    actions?: string[];
};

export type KendoListBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    actionsPosition: 'left',
} as const;

export const ListBox = (
    props: KendoListBoxProps &
        KendoListBoxState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        disabled,
        children,
        actionsPosition = defaultProps.actionsPosition,
        actions,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LISTBOX_CLASSNAME,
                optionClassNames(LISTBOX_CLASSNAME, {
                    size,
                }),
                stateClassNames(LISTBOX_CLASSNAME, {
                    disabled,
                }),
                {
                    [`k-listbox-actions-${actionsPosition}`]: actionsPosition,
                }
            )}
        >
            { actions && (
                <div className="k-listbox-actions">
                    {actions.map(action =>
                        <Button icon={`caret-alt-${action}`} size={size} />
                    )}
                </div>
            )}
            <div className={classNames(
                'k-list-scroller',
                'k-selectable'
            )}>
                <List size={size}>
                    {children}
                </List>
            </div>
        </div>
    );
};

ListBox.states = states;
ListBox.options = options;
ListBox.className = LISTBOX_CLASSNAME;

export default ListBox;
