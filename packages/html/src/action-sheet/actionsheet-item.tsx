import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const ACTIONSHEETITEM_CLASSNAME = `k-actionsheet-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

export type KendoActionSheetItemProps = {
    text?: string;
    description?: string;
    iconName?: string;
}

export type KendoActionSheetItemState = { [K in (typeof states)[number]]?: boolean };

export const ActionSheetItem = (
    props: KendoActionSheetItemProps &
        KendoActionSheetItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        iconName,
        text,
        description,
        hover,
        focus,
        selected,
        disabled,
        ...other
    } = props;


    return (
        <span
            {...other}
            className={classNames(
                props.className,
                ACTIONSHEETITEM_CLASSNAME,
                stateClassNames(ACTIONSHEETITEM_CLASSNAME, {
                    hover,
                    focus,
                    selected,
                    disabled,
                }),
            )}>
            {!props.children &&
                <>
                    <span className="k-actionsheet-action">
                        { iconName && <span className="k-icon-wrap"><Icon className="k-actionsheet-item-icon" icon={iconName} /></span> }
                        <span className="k-actionsheet-item-text">
                            { text && <span className="k-actionsheet-item-title">{text}</span> }
                            { description && <span className="k-actionsheet-item-description">{description}</span> }
                        </span>
                    </span>
                </>
            }
            {props.children}
        </span>
    );
};

ActionSheetItem.states = states;
ActionSheetItem.className = ACTIONSHEETITEM_CLASSNAME;

export default ActionSheetItem;
