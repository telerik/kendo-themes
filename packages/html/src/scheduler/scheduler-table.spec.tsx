import React from 'react';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-table';

/**
 * @aria {role="none"|\"presentation"} Inner <table> elements within the Agenda Scheduler must have their semantic role removed.
 * @aria {role="rowgroup"} Must have role explicitly set as it has been removed by the <table> role set (none/presentation).
 * @aria {role="row"} Must have role explicitly set as it has been removed by the <table> role set (none/presentation).
 * @aria {role="columnheader"} Must have role explicitly set as it has been removed by the <table> role set (none/presentation).
 */
export const SchedulerTable: KendoComponent<React.HTMLAttributes<HTMLTableElement>> = (
    props: React.HTMLAttributes<HTMLTableElement>
) => (
    <table
        {...props}
        className={classNames(
            className,
            props.className
        )}
    >
        {props.children}
    </table>
);

SchedulerTable.className = className;
SchedulerTable.moduleName = SCHEDULER_MODULE_NAME;
SchedulerTable.folderName = SCHEDULER_FOLDER_NAME;

