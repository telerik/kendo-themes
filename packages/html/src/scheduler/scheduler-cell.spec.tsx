import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-cell';

const states = [];

const options = {};

const defaultOptions = {};

export type KendoSchedulerCellProps = {
    cellType?: string[];
    allDay?: boolean;
    text?: string;
    colspan?: number;
    rowspan?: number;
}

export const SchedulerCell: KendoComponent<KendoSchedulerCellProps & ( | ( React.AllHTMLAttributes<HTMLDivElement> & { as: 'div' } ) | ( React.HTMLAttributes<HTMLTableCellElement> & { as: 'th' |'td' } ) )> = (
    props: KendoSchedulerCellProps & (
    | ( React.AllHTMLAttributes<HTMLDivElement> & { as: 'div' } )
    | ( React.HTMLAttributes<HTMLTableCellElement> & { as: 'th' |'td' } )
    )
) => {
    const {
        cellType,
        allDay,
        text,
        colspan,
        rowspan,
        as: Component = 'div',
        ...other
    } = props;

    const textOrChildren = text ? text : props.children;

    return (
        <Component
            {...other}
            colSpan={colspan}
            rowSpan={rowspan}
            className={classNames(
                className,
                props.className,
                {
                    'k-scheduler-times-all-day': allDay,
                },
                cellType?.map((t) => ({
                    [`k-${t}-cell`]: true,
                }))
            )}>
            {!allDay && text ?
                <span className="k-link k-nav-day">
                    {textOrChildren}
                </span>
                :
                textOrChildren
            }
        </Component>
    );
};

SchedulerCell.states = states;
SchedulerCell.options = options;
SchedulerCell.defaultOptions = defaultOptions;
SchedulerCell.className = className;
SchedulerCell.moduleName = SCHEDULER_MODULE_NAME;
SchedulerCell.folderName = SCHEDULER_FOLDER_NAME;

export default SchedulerCell;
