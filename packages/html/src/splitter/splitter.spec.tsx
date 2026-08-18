import { classNames } from '../misc';
import { SplitterPane, KendoSplitterPaneProps } from './splitter-pane.spec';
import { SplitterSplitbar } from './splitter-splitbar.spec';

import { KendoComponent } from '../_types/component';
import { SPLITTER_FOLDER_NAME, SPLITTER_MODULE_NAME } from './constants';
const SPLITTER_CLASSNAME = 'k-splitter';

const options = {};

export type KendoSplitterProps = {
    orientation?: "vertical" | "horizontal";
    children?: React.ReactNode;
    panes?: React.JSX.Element[];
}

const defaultOptions = {
    orientation: "horizontal",
} as const;

/**
 * @ux {Resizable panes} The separator between panes can be dragged to resize them.
 * @ux {Collapse / Expand} Individual panes can be collapsed and expanded using toggle arrows.
 * @ux {Orientation} Can be laid out horizontally (side-by-side) or vertically (stacked).
 */
export const Splitter: KendoComponent<KendoSplitterProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSplitterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        children,
        panes,
        ...other
    } = props;

    const renderedPanes: React.ReactNode[] = [];

    if (panes) {
        panes.forEach((pane, index) => {
            const nextPane = panes[index + 1];
            const paneProps: KendoSplitterPaneProps = pane.props;
            const nextPaneProps: KendoSplitterPaneProps = nextPane?.props;

            renderedPanes.push(
                <SplitterPane {...paneProps} key={index} />
            );

            if (nextPane) {
                renderedPanes.push(
                    <SplitterSplitbar
                        key={`splitbar-${index}`}
                        draggable={paneProps.resizable !== false && nextPaneProps.resizable !== false}
                        collapsePrev={paneProps.collapsible}
                        collapseNext={nextPaneProps.collapsible}
                        orientation={orientation}
                        ariaLabel={`Pane separator`}
                    />
                );
            }
        });
    }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SPLITTER_CLASSNAME,
                {
                    [`${SPLITTER_CLASSNAME}-${orientation}`]: orientation
                },
                "k-splitter-flex",
            )}>
            {renderedPanes}
            {children}
        </div>
    );
};

Splitter.options = options;
Splitter.className = SPLITTER_CLASSNAME;
Splitter.defaultOptions = defaultOptions;
Splitter.moduleName = SPLITTER_MODULE_NAME;
Splitter.folderName = SPLITTER_FOLDER_NAME;

/**
 * @keyboard {ArrowUp} Moves up the split-bar in a vertical Splitter.
 * @keyboard {ArrowDown} Moves down a split-bar in a vertical Splitter.
 * @keyboard {ArrowLeft} Moves left a split-bar in a horizontal Splitter.
 * @keyboard {ArrowRight} Moves right a split-bar in a horizontal Splitter.
 * @keyboard {Control/Cmd(Mac) + ArrowUp} Moves the splitbar up to collapse/expand the adjacent panes in the up direction.
 * @keyboard {Control/Cmd(Mac) + ArrowDown} Moves the splitbar down to collapse/expand the adjacent panes in the down direction.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Moves the splitbar left to collapse/expand the adjacent panes in the left direction.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Moves the splitbar right to collapse/expand the adjacent panes in the right direction.
 * @keyboard {Enter} Toggles the collapsed state of the nearest collapsible pane.
 * @keyboard {Tab} The key that allows focusing a splitter bar. Thus, all splitbars have `tabindex` and are included in the tab sequence.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#separator WAI-ARIA specification for separator
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role MDN reference for the separator role
 */

export default Splitter;
