import { classNames, optionClassNames, kendoThemeMaps, ThemeColor, nextId } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { TOOLTIP_FOLDER_NAME, TOOLTIP_MODULE_NAME } from './constants';
export const TOOLTIP_CLASSNAME = `k-tooltip`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.inverse
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
    /** @aria id - required so the trigger element can reference it via aria-describedby */
    id?: string;
};

const defaultOptions = {
    closable: false
};

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

Tooltip.ariaSpec = {
    selector: '.k-tooltip',
    implicitRole: 'tooltip',
    rules: [
        { selector: '.k-tooltip', attribute: 'role=tooltip', usage: 'Specifies the tooltip role of the tooltip container.' },
        { selector: '.k-tooltip', attribute: 'id', usage: 'The element needs an id to be associated with the aria-describedby attribute of the trigger element.' },
        { selector: '.k-tooltip .k-tooltip-button', attribute: 'role=button', usage: 'The close button needs an explicit button role.' },
        { selector: '.k-tooltip .k-tooltip-button', attribute: 'aria-label', usage: 'The close button needs an accessible name.' },
    ]
};

export default Tooltip;
