import { classNames } from '../misc';

export const TIMELINE_CLASSNAME = `k-timeline`;

const states = [];

const options = {};

export type KendoTimelineProps = {
    children?: React.JSX.Element | React.JSX.Element[];
    orientation?: null | 'vertical' | 'horizontal';
    collapsibleEvents?: boolean;
    alternatingMode?: boolean;
};

const defaultOptions = {
    orientation: "vertical",
};

export const Timeline = (
    props: KendoTimelineProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        collapsibleEvents,
        alternatingMode,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TIMELINE_CLASSNAME,
                {
                    [`${TIMELINE_CLASSNAME}-${orientation}`]: orientation,
                    [`${TIMELINE_CLASSNAME}-alternating`]: alternatingMode,
                    [`${TIMELINE_CLASSNAME}-collapsible`]: collapsibleEvents,
                }
            )}>
            <>{props.children}</>
        </div>
    );
};

Timeline.states = states;
Timeline.options = options;
Timeline.className = TIMELINE_CLASSNAME;
Timeline.defaultOptions = defaultOptions;

export default Timeline;
