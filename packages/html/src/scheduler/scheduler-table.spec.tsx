import React from 'react';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Scheduler } from './scheduler.spec';
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
SchedulerTable.moduleName = Scheduler.moduleName;
SchedulerTable.folderName = Scheduler.folderName;
