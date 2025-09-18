import { classNames } from '../misc';
import { SplitterPane, KendoSplitterPaneProps } from './splitter-pane';
import { SplitterSplitbar } from './splitter-splitbar';

import { KendoComponent } from '../_types/component';
import { SPLITTER_FOLDER_NAME, SPLITTER_MODULE_NAME } from './constants';
const SPLITTER_CLASSNAME = 'k-splitter';

const options = {};

export type KendoSplitterProps = {
    orientation?: "vertical" | "horizontal";
    children?: React.JSX.Element | React.JSX.Element[];
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
        ...other
    } = props;

    const listChildren: React.JSX.Element | React.JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if (child.type === SplitterPane) {
                    const nextChild = children[index + 1];
                    const childProps: KendoSplitterPaneProps = child.props;
                    const nextChildProps: KendoSplitterPaneProps = nextChild?.props;

                    listChildren.push(
                        <SplitterPane {...childProps} key={index} />,

                        nextChild &&
                        <SplitterSplitbar
                            key={`splitbar-${index}`}
                            draggable={childProps.resizable !== false && nextChildProps.resizable !== false}
                            collapsePrev={childProps.collapsible}
                            collapseNext={nextChildProps.collapsible}
                            orientation={orientation}
                        />
                    );
                } else {
                    listChildren.push(child);
                }
            });
        }
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
            {listChildren}
        </div>
    );
};

Splitter.options = options;
Splitter.className = SPLITTER_CLASSNAME;
Splitter.defaultOptions = defaultOptions;
Splitter.moduleName = SPLITTER_MODULE_NAME;
Splitter.folderName = SPLITTER_FOLDER_NAME;

export default Splitter;
