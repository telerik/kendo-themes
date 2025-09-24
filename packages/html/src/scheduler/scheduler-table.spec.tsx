import React from 'react';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-table';

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
