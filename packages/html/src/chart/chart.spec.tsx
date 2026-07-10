import { KendoComponent } from '../_types/component';
import { CHART_FOLDER_NAME, CHART_MODULE_NAME } from './constants';

export const CHART_CLASSNAME = `k-chart`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoChartProps = {
    ariaRoleDescription?: string;
};

/**
 * @aria {role="graphics-document document"} Identifies the chart surface as a graphics document for assistive technology.
 * @aria {aria-roledescription} Provides a human-readable description of the chart type (e.g. "Sales by year").
 * @aria {tabindex="0"} Makes the chart surface keyboard focusable.
 * @ux {Tooltip} Shows data labels or values when hovering over data points or series.
 * @ux {Legend} Identifies each series; clicking a legend item toggles its visibility.
 * @ux {Zoom and pan} Supports mouse-wheel zoom and click-drag panning on large datasets.
 * @ux {Export} Can export the chart as a PNG image or PDF document.
 */
export const Chart: KendoComponent<KendoChartProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChartProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ariaRoleDescription = 'chart',
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={CHART_CLASSNAME}
        >
            <div
                className="k-chart-surface"
                tabIndex={0}
                role="graphics-document document"
                aria-roledescription={ariaRoleDescription}
            >
                {children}
            </div>
        </div>
    );
};

Chart.states = states;
Chart.options = options;
Chart.className = CHART_CLASSNAME;
Chart.defaultOptions = defaultOptions;
Chart.moduleName = CHART_MODULE_NAME;
Chart.folderName = CHART_FOLDER_NAME;

/**
 * @keyboard {Tab} Moves focus to the Legend items, focusing the first legend item. If legend is not available, moves focus to the next focusable element.
 * @keyboard {Shift + Tab} Moves focus to the previous focusable element.
 * @keyboard {ArrowUp or ArrowDown} Navigates between series for categorical, scatter/polar charts; moves between items for funnel; moves clockwise/anti-clockwise for radar column; moves away/towards center for radar line/area.
 * @keyboard {ArrowLeft or ArrowRight} Navigates between data points within a series for categorical, scatter/polar, and radar charts.
 * @keyboard {ArrowUp (donut)} Moves focus to the outer series.
 * @keyboard {ArrowDown (donut)} Moves focus to the inner series.
 * @keyboard {ArrowRight (donut/pie)} Moves through points of the series in a clockwise direction.
 * @keyboard {ArrowLeft (donut/pie)} Moves through points of the series in an anti-clockwise direction.
 * @keyboard {Enter} Triggers the click action for the focused series point or legend item.
 * @keyboard {Escape} Closes the series tooltip; second press returns focus to the chart root.
 * @keyboard {Tab (legend)} Moves focus to the next focusable element on the page.
 * @keyboard {Shift + Tab (legend)} Moves focus to the chart area, focusing the first point in the first series.
 * @keyboard {ArrowUp or ArrowLeft (legend)} Moves focus to the previous legend item. Cycles to the last item at the beginning.
 * @keyboard {ArrowDown or ArrowRight (legend)} Moves focus to the next legend item. Cycles to the first item at the end.
 * @keyboard {Enter (legend)} Toggles the series visibility.
 * @keyboard {Escape (legend)} Moves focus to the root element of the chart.
 *
 * @see https://www.w3.org/TR/graphics-aria-1.0/#graphics-document WAI-ARIA Graphics Module — graphics-document role
 * @see https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-svgs Accessibility Style Guide: SVGs
 * @see https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html WCAG 2.1.1 Keyboard
 */

export default Chart;
