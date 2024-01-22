import { classNames } from '../misc';
import { Toolbar, KendoToolbarOptions } from '../toolbar';

const className = `k-gantt-toolbar`;

const states = [];

const options = {};

const defaultProps = {};

export type KendoGanttToolbarProps = KendoToolbarOptions & {
    position?: 'top' | 'bottom';
};

export const GanttToolbar = (
    props: KendoGanttToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        position,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                className,
                props.className,
                {
                    [`k-gantt-header`]: position === 'top',
                    [`k-gantt-footer`]: position === 'bottom'
                }
            )}>
            { props.children }
        </Toolbar>
    );
};

GanttToolbar.states = states;
GanttToolbar.options = options;
GanttToolbar.className = className;
GanttToolbar.defaultProps = defaultProps;

export default GanttToolbar;
