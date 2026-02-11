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
    panes?: React.ReactElement<KendoSplitterPaneProps>[];
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
            const paneProps = pane.props as KendoSplitterPaneProps;
            const nextPaneProps = (nextPane?.props ?? {}) as KendoSplitterPaneProps;

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

export default Splitter;
