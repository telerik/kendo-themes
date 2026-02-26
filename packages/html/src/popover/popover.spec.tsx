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
    /** @aria id - required so the trigger element can reference it via aria-describedby */
    id?: string;
};


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

Popover.ariaSpec = {
    selector: '.k-popover',
    implicitRole: 'dialog',
    rules: [
        { selector: '.k-popover', attribute: 'role=dialog', usage: 'Announces the dialog role when the popover contains focusable elements. Use role=tooltip when it does not.' },
        { selector: '.k-popover', attribute: 'id', usage: 'The element needs an id to be associated with the aria-describedby attribute of the trigger element.' },
        { selector: '.k-popover', attribute: 'aria-labelledby', usage: 'Links the popover container with the popover header element when there is focusable content.' },
        { selector: '.k-popover', attribute: 'aria-describedby', usage: 'Links the popover container with the popover body element when there is focusable content.' },
        { selector: '.k-popover-header', attribute: 'id', usage: 'Links the popover header with the popover container via aria-labelledby.' },
        { selector: '.k-popover-body', attribute: 'id', usage: 'Links the popover body with the popover container via aria-describedby.' },
    ]
};

export default Popover;
