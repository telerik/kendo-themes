import { States, classNames, stateClassNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
export const TIMELINETRACKITEM_CLASSNAME = `k-timeline-track-item`;

const states = [
    States.focus,
];

export type KendoTimelineTrackItemOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    content?: string;
    /** @aria aria-selected="true" when tab is selected/focused */
    ariaSelected?: boolean;
    /** @aria aria-describedby points to the tabpanel */
    ariaDescribedBy?: string;
};

export type KendoTimelineTrackItemState = { [K in (typeof states)[number]]?: boolean };

export const TimelineTrackItem: KendoComponent<KendoTimelineTrackItemOptions & KendoTimelineTrackItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoTimelineTrackItemOptions &
        KendoTimelineTrackItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        content,
        focus,
        ariaSelected,
        ariaDescribedBy,
        ...other
    } = props;

    const isFlagWrap = other.className?.includes('k-timeline-flag-wrap');

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINETRACKITEM_CLASSNAME,
                stateClassNames(TIMELINETRACKITEM_CLASSNAME, {
                    focus
                }),
            )}
            role={isFlagWrap ? 'none' : 'tab'}
            aria-hidden={isFlagWrap ? 'true' : undefined}
            aria-selected={!isFlagWrap && ariaSelected ? 'true' : undefined}
            aria-describedby={!isFlagWrap ? ariaDescribedBy : undefined}
        >
            {content}
            {props.children}
        </li>
    );
};

TimelineTrackItem.states = states;
TimelineTrackItem.className = TIMELINETRACKITEM_CLASSNAME;
TimelineTrackItem.moduleName = TIMELINE_MODULE_NAME;
TimelineTrackItem.folderName = TIMELINE_FOLDER_NAME;

export default TimelineTrackItem;
