import { classNames, kendoThemeMaps } from '../misc';
import { Popup } from '../popup';

import { KendoComponent } from '../_types/component';
export const POPOVER_CLASSNAME = `k-popover`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPopoverProps = {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    body?: React.JSX.Element | React.JSX.Element[];
};


export const Popover: KendoComponent<KendoPopoverProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPopoverProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        callout,
        title,
        body,
        ...other
    } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                POPOVER_CLASSNAME,
            )}
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
                {title && <div className="k-popover-header">{title}</div>}
                {body && <div className="k-popover-body">{body}</div>}
                <>{props.children}</>
            </div>
        </Popup>
    );
};

Popover.states = states;
Popover.options = options;
Popover.className = POPOVER_CLASSNAME;
Popover.defaultOptions = defaultOptions;
Popover.moduleName = "popover";
Popover.folderName = Popover.moduleName;

export default Popover;
