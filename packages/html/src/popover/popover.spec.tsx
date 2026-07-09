import { classNames, kendoThemeMaps, nextId } from '../misc';
import { Popup } from '../popup';

import { KendoComponent } from '../_types/component';
import { POPOVER_FOLDER_NAME, POPOVER_MODULE_NAME } from './constants';
export const POPOVER_CLASSNAME = `k-popover`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPopoverProps = {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    body?: React.JSX.Element | React.JSX.Element[];
    id?: string;
};

/**
 * @aria {role="dialog"} Announces the dialog role when the popover contains focusable elements. Use role=tooltip when it does not.
 * @aria {aria-labelledby} Links the popover container with the popover header element when there is focusable content.
 * @aria {aria-describedby} Links the popover container with the popover body element when there is focusable content.
 * @aria {id} required so the trigger element can reference it via aria-describedby
 */
export const Popover: KendoComponent<KendoPopoverProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPopoverProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        callout,
        title,
        body,
        id = nextId('popover'),
        ...other
    } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                POPOVER_CLASSNAME,
            )}
            role="dialog"
            id={id}
            aria-labelledby={title ? `${id}-header` : undefined}
            aria-describedby={body ? `${id}-body` : undefined}
        >
            {callout &&
                <div className={classNames(
                    'k-popover-callout',
                    {
                        [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                    }
                )}/>
            }
            <div className="k-popover-inner">
                {title && <div className="k-popover-header" id={`${id}-header`}>{title}</div>}
                {body && <div className="k-popover-body" id={`${id}-body`}>{body}</div>}
                <>{props.children}</>
            </div>
        </Popup>
    );
};

Popover.states = states;
Popover.options = options;
Popover.className = POPOVER_CLASSNAME;
Popover.defaultOptions = defaultOptions;
Popover.moduleName = POPOVER_MODULE_NAME;
Popover.folderName = POPOVER_FOLDER_NAME;

/**
 * @keyboard {Escape} Dismisses the Popover.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/ WAI-ARIA specification for tooltip
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role MDN description for tooltip role
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role MDN description for dialog role
 */

export default Popover;
