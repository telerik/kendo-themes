import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
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

export const Timeline: KendoComponent<KendoTimelineProps & React.HTMLAttributes<HTMLDivElement>> = (
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
Timeline.moduleName = TIMELINE_MODULE_NAME;
Timeline.folderName = TIMELINE_FOLDER_NAME;

export default Timeline;
