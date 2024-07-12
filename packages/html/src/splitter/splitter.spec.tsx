import { classNames } from '../misc';
import SplitterPane from './splitter-pane';
import SplitterSplitbar from './splitter-splitbar';

const SPLITTER_CLASSNAME = 'k-splitter';

const options = {};

export type KendoSplitterProps = {
    orientation?: "vertical" | "horizontal";
    children?: React.JSX.Element | React.JSX.Element[];
}

const defaultProps = {
    orientation: "horizontal",
};

export const Splitter = (
    props: KendoSplitterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation,
        children,
        ...other
    } = props;

    const listChildren: React.JSX.Element | React.JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if (child.type === SplitterPane) {
                    listChildren.push(
                        <SplitterPane {...child.props} key={index} />,

                        children[ index + 1] &&
                        <>
                            <SplitterSplitbar
                                draggable = { child.props.resizable !== false && children[ index + 1 ].props.resizable !== false }
                                collapsePrev = {child.props.collapsible }
                                collapseNext= { children[ index + 1 ].props.collapsible }
                                orientation={orientation}
                            />
                        </>
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
Splitter.defaultProps = defaultProps;

export default Splitter;
