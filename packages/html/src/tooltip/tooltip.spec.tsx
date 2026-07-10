import { classNames, optionClassNames, kendoThemeMaps, ThemeColor, nextId } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { TOOLTIP_FOLDER_NAME, TOOLTIP_MODULE_NAME } from './constants';
export const TOOLTIP_CLASSNAME = `k-tooltip`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.inverse,
        ThemeColor.info,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error
    ],
};

export type KendoTooltipOptions = {
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoTooltipProps = KendoTooltipOptions & {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    closable?: boolean;
    title?: string | React.JSX.Element;
    content?: string | React.JSX.Element;
    icon?: string;
    id?: string;
};

const defaultOptions = {
    closable: false
};

/**
 * @aria {role="tooltip"} Specifies the tooltip role of the tooltip container.
 * @aria {role="button"} The close button needs an explicit button role.
 * @aria {aria-label} The close button needs an accessible name.
 * @aria {id} required so the trigger element can reference it via aria-describedby
 * @ux {Hover trigger} Appears when the cursor hovers over the target element.
 * @ux {Focus trigger} Also appears when the target receives keyboard focus.
 * @ux {Auto-positioning} Automatically repositions to remain within the viewport.
 * @ux {Delay} Configurable show and hide delays prevent flickering.
 */
export const Tooltip: KendoComponent<KendoTooltipProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>> = (
    props: KendoTooltipProps &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
) => {
    const {
        closable = defaultOptions.closable,
        callout,
        themeColor,
        title,
        content,
        icon,
        id = nextId('tooltip'),
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
            )}
            role="tooltip"
            id={id}
        >
            {icon && <Icon className="k-tooltip-icon" icon={icon} />}
            {<div className="k-tooltip-content">
                {title && <div className="k-tooltip-title">{title}</div>}
                {content}
            </div>
            }
            {closable && <div className="k-tooltip-button" role="button" aria-label="Close" tabIndex={0}><Icon icon="x"></Icon></div>}
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
Tooltip.defaultOptions = defaultOptions;
Tooltip.moduleName = TOOLTIP_MODULE_NAME;
Tooltip.folderName = TOOLTIP_FOLDER_NAME;

/**
 * @keyboard {Escape} Dismisses the Tooltip.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/ WAI-ARIA specification for tooltip
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role MDN description for tooltip role
 */

export default Tooltip;
