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

Timeline.ariaSpec = {
    rules: [
        // Horizontal timeline rules
        { selector: '.k-timeline.k-timeline-horizontal .k-timeline-track-wrap .k-timeline-scrollable-wrap', attribute: 'role=tablist', usage: 'Indicates the tablist role for the scrollable wrap element.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap)', attribute: 'role=tab', usage: 'Individual tab element on the track.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap).k-focus', attribute: 'aria-selected=true', usage: 'Announces the selected state of the focused tab.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap', attribute: 'role=none', usage: 'The flag-wrap items have semantics removed.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap', attribute: 'aria-hidden=true', usage: 'Flag-wrap items are hidden from the accessibility tree.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-card:not(:empty)', attribute: 'role=tabpanel', usage: 'The card serves as the tab panel content.' },
        { selector: '.k-timeline.k-timeline-horizontal .k-card:not(:empty)', attribute: 'aria-label', usage: 'Refers to the tab element that controls the panel.' },
        { selector: '.k-timeline-arrow', attribute: 'aria-hidden=true', usage: 'Arrow buttons are hidden from the accessibility tree.' },
        // Vertical timeline rules
        { selector: '.k-timeline.k-timeline-vertical .k-card', attribute: 'role=button', usage: 'Items in the vertical timeline are buttons.' },
        { selector: '.k-timeline.k-timeline-vertical .k-card', attribute: 'aria-describedby', usage: 'Vertical timeline cards are described by their date elements.' },
        { selector: '.k-timeline.k-timeline-vertical .k-card', attribute: 'aria-live=polite', usage: 'Vertical timeline cards are live regions.' },
        { selector: '.k-timeline.k-timeline-vertical .k-card', attribute: 'tabindex=0', usage: 'Vertical timeline cards are focusable.' },
        { selector: '.k-timeline.k-timeline-collapsible .k-collapsed .k-card', attribute: 'aria-expanded=false', usage: 'Collapsed cards announce their collapsed state.' },
        { selector: '.k-timeline.k-timeline-collapsible .k-timeline-card:not(.k-collapsed) .k-card', attribute: 'aria-expanded=true', usage: 'Expanded cards announce their expanded state.' },
    ]
};

export default Timeline;
