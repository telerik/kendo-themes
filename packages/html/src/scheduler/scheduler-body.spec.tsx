import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = 'k-scheduler-body';

export const SchedulerBody: KendoComponent<React.HTMLAttributes<HTMLDivElement> & { as: 'div' } | React.HTMLAttributes<HTMLTableRowElement> & { as: 'tr' }> = (
    props: React.HTMLAttributes<HTMLDivElement> & { as: 'div' }
    | React.HTMLAttributes<HTMLTableRowElement> & { as: 'tr' }
) => {
    const {
        as: Component = 'div',
        ...other
    } = props;

    return (
        <Component
            {...other}
            className={classNames(
                className,
                props.className
            )}
        >
            {props.children}
        </Component>
    );
};

SchedulerBody.className = className;
