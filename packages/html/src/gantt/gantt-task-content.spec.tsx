import { classNames } from '../misc';
import { Icon } from '../icon';

export const GANTTTASKCONTENT_CLASSNAME = 'k-task-content';

const states = [];

const options = {};

export type KendoGanttTaskContentProps = {
    content?: string | React.JSX.Element | React.JSX.Element[];
};

const defaultOptions = {};

export const GanttTaskContent = (
    props: KendoGanttTaskContentProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        content,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTTTASKCONTENT_CLASSNAME
            )}>
            { content && <div className="k-task-template">{content}</div> }
            <span className="k-task-actions"><a className="k-link k-task-delete"><Icon icon="x" /></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
        </div>
    );
};

GanttTaskContent.states = states;
GanttTaskContent.options = options;
GanttTaskContent.className = GANTTTASKCONTENT_CLASSNAME;
GanttTaskContent.defaultOptions = defaultOptions;

export default GanttTaskContent;
