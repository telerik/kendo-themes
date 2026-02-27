import { classNames } from '../misc';
import { SplitterPane, KendoSplitterPaneProps } from './splitter-pane';
import { SplitterSplitbar } from './splitter-splitbar';

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
 * Accessibility specification for Splitter.
 *
 * @accessibility
 * - Panes have role=group
 * - SplitBar has role=separator with aria-label
 * - Horizontal splitbars have aria-orientation=vertical
 * - Keyboard shortcuts announced via aria-keyshortcuts
 *
 * @wcag 4.1.2 Name, Role, Value - separator pattern for resizable panes
 */
Splitter.ariaSpec = {
    selector: '.k-splitter',
    rules: [
        { selector: '.k-pane', attribute: 'role=group', usage: 'Sets the proper role for the Splitter pane.' },
        { selector: '.k-splitbar', attribute: 'role=separator', usage: 'Sets the proper role for the Splitter split-bar element.' },
        { selector: '.k-splitbar', attribute: 'aria-label', usage: 'An accessible name for the separator.' },
        { selector: '.k-splitbar-horizontal', attribute: 'aria-orientation=vertical', usage: 'When a splitbar separates two panes horizontally, its aria-orientation must be explicitly set to vertical.' },
        { selector: '.k-splitbar', attribute: 'aria-keyshortcuts', usage: 'Announces available keyboard shortcuts.' },
    ]
};

export default Splitter;
