import { classNames, optionClassNames, kendoThemeMaps, ThemeColor } from '../misc';
import { Icon } from '../icon';

export const TOOLTIP_CLASSNAME = `k-tooltip`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};

export type KendoTooltipOptions = {
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoTooltipProps = KendoTooltipOptions & {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    closable?: boolean;
    title?: string | JSX.Element;
    content?: string | JSX.Element;
    icon?: string;
};

const defaultProps = {
    closable: false
};

export const Tooltip = (
    props: KendoTooltipProps &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
) => {
    const {
        callout,
        closable,
        themeColor,
        title,
        content,
        icon,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TOOLTIP_CLASSNAME,
                optionClassNames(TOOLTIP_CLASSNAME, {
                    themeColor
                }),
                {
                    'k-tooltip-closable': closable
                }
            )}>
            {icon && <Icon className="k-tooltip-icon" icon={icon} />}
            {<div className="k-tooltip-content">
                {title && <div className="k-tooltip-title">{title}</div>}
                {content}
            </div>
            }
            {closable && <div className="k-tooltip-button"><Icon icon="x"></Icon></div>}
            {callout &&
                <div className={classNames(
                    'k-callout',
                    {
                        [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                    }
                )}></div>
            }
        </div>
    );
};

Tooltip.states = states;
Tooltip.options = options;
Tooltip.className = TOOLTIP_CLASSNAME;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
