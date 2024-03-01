import { Button } from '../button';
import { List } from '../list';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

export const LISTBOX_CLASSNAME = `k-listbox`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoListBoxOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListBoxProps = KendoListBoxOptions & {
    children?: JSX.Element[];
    actionsPosition?: 'left' | 'right' | 'top' | 'bottom';
    actions?: string[];
    dir?: 'ltr' | 'rtl';
};

export type KendoListBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    actionsPosition: 'left'
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
        dir,
        ...other
    } = props;

    return (
        <div
            {...other}
            dir={dir}
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
                    {actions.map(action => {

                        const actionsIconMap = {
                            "left": dir !== "rtl" ? "caret-alt-left" : "caret-alt-right",
                            "right": dir !== 'rtl' ? "caret-alt-right" : "caret-alt-left",
                            "to": dir !== 'rtl' ? "caret-double-alt-right" : "caret-double-alt-left",
                            "from": dir !== 'rtl' ? "caret-double-alt-left" : "caret-double-alt-right",
                            "up": "caret-alt-up",
                            "down": "caret-alt-down",
                            "x": "x"
                        };

                        return <Button key={action} icon={actionsIconMap[action]} size={size} />;
                    })}
                </div>
            )}
            <div className={classNames(
                'k-list-scroller',
                'k-selectable'
            )}>
                <List size={size} children={children} />
            </div>
        </div>
    );
};

ListBox.states = states;
ListBox.options = options;
ListBox.className = LISTBOX_CLASSNAME;
ListBox.defaultProps = defaultProps;

export default ListBox;
