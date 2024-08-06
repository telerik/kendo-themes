import { classNames, States, stateClassNames } from '../misc';
import { Icon } from '../icon';

const className = 'k-event';

const states = [
    States.hover,
    States.focus,
    States.selected
];

const options = {};

export type KendoSchedulerEventProps = {
    inverse?: boolean;
    ongoing?: boolean;
    multiDay?: boolean;
    resizable?: "horizontal" | "vertical" | "none";
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    eventPrefix?: React.JSX.Element | null;
    eventSuffix?: React.JSX.Element | null;
};

export const SchedulerEvent = (
    props: KendoSchedulerEventProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        eventPrefix = <Icon icon="arrow-rotate-cw" />,
        eventSuffix = <a href="#" className="k-link k-event-delete"><Icon icon="x" /></a>,
        resizable = 'vertical',
        inverse,
        ongoing,
        multiDay,
        hover,
        focus,
        selected,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                className,
                props.className,
                stateClassNames(className, {
                    hover,
                    focus,
                    selected
                }),
                {
                    'k-event-inverse': inverse,
                    'k-event-ongoing': ongoing,
                }
            )}
        >
            <span className="k-event-actions">
                {eventPrefix}
            </span>
            <div>
                {props.children}
            </div>
            <span className="k-event-actions">
                {eventSuffix}
            </span>
            {multiDay &&
            <>
                <span className="k-event-top-actions">
                    <Icon icon="caret-alt-up" />
                </span>
                <span className="k-event-bottom-actions">
                    <Icon icon="caret-alt-down" />
                </span>
            </>
            }
            {resizable === 'vertical' ?
                <>
                    <span className="k-resize-handle k-resize-n"></span>
                    <span className="k-resize-handle k-resize-s"></span>
                </> :
                resizable === 'horizontal' &&
                <>
                    <span className="k-resize-handle k-resize-w"></span>
                    <span className="k-resize-handle k-resize-e"></span>
                </>
            }
        </div>
    );
};

SchedulerEvent.states = states;
SchedulerEvent.options = options;
SchedulerEvent.className = className;

export default SchedulerEvent;
