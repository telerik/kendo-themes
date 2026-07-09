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

/**
 * @aria {role="tabpanel"} The card serves as the tab panel content.
 * @aria {aria-label} Refers to the tab element that controls the panel.
 * @aria {aria-hidden="true"} Arrow buttons are hidden from the accessibility tree.
 * @aria {role="button"} Items in the vertical timeline are buttons.
 * @aria {aria-describedby} Vertical timeline cards are described by their date elements.
 * @aria {aria-live="polite"} Vertical timeline cards are live regions.
 * @aria {tabindex="0"} Vertical timeline cards are focusable.
 * @aria {aria-expanded="false"} Collapsed cards announce their collapsed state.
 * @aria {aria-expanded="true"} Expanded cards announce their expanded state.
 */
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

/**
 * @keyboard {ArrowLeft} Activates the previous tab (item).
 * @keyboard {ArrowRight} Activates the next tab (item).
 * @keyboard {Home} Focuses the first item and activates it.
 * @keyboard {End} Focuses the last item and activates it.
 * @keyboard {Shift + Tab} Focuses the previous item (button) in the Timeline.
 * @keyboard {Tab} Focuses the next item (button) in the Timeline.
 * @keyboard {Enter} If expandable, expands/collapses the currently focused item.
 * @keyboard {Space} If expandable, expands/collapses the currently focused item.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#tablist WAI-ARIA specification for tablist
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html WAI-ARIA practices: TabList example
 */

export default Timeline;
