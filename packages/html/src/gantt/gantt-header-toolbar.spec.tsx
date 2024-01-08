import { Toolbar, KendoToolbarProps } from '../toolbar';
import { classNames } from '../misc';

const className = `k-gantt-header`;

export const GanttHeaderToolbar = (
    props: KendoToolbarProps
        & React.HTMLAttributes<HTMLDivElement>
) => (
    <Toolbar
        {...props}
        className={classNames(
            props.className,
            className,
            `k-gantt-toolbar`
        )}
    >
        {props.children}
    </Toolbar>
);