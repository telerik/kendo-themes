import { classNames } from '../misc';
import { Table } from './../table';

const className = `k-table-header`;

export const TableHeader = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        className={classNames(
            props.className,
            className,
        )}
    >
        <div className="k-table-header-wrap">
            <Table>{props.children}</Table>
        </div>
    </div>
);
