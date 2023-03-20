import { classNames, kendoThemeMaps } from '../utils';

export const POPOVER_CLASSNAME = `k-popover`;

const states = [];

const options = {};

export type KendoPopoverProps = {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    body?: JSX.Element;
};


export const Popover = (
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
        <div
            {...other}
            className={classNames(
                props.className,
                POPOVER_CLASSNAME,
            )}>
            {callout &&
                <div className={classNames(
                    'k-popover-callout',
                    {
                        [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                    }
                )}></div>
            }
            <div className="k-popover-inner">
                {title && <div className="k-popover-header">{title}</div>}
                {body && <div className="k-popover-body">{body}</div>}
                <>{props.children}</>
            </div>
        </div>
    );
};

Popover.states = states;
Popover.options = options;
Popover.className = POPOVER_CLASSNAME;

export default Popover;
