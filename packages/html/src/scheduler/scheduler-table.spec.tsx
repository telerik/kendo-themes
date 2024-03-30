import React from 'react';
import { classNames } from '../misc';

const className = 'k-scheduler-table';

export const SchedulerTable = (
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
