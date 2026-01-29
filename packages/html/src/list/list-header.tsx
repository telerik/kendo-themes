import { classNames } from '../misc';

const className = `k-list-group-sticky-header`;
const headerClassName = `k-list-header`;

export const ListHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const { children, ...other } = props;

    return (
        <div {...other} className={classNames(className, headerClassName, props.className)}>
            <div className="k-list-header-text">{children}</div>
        </div>
    );
};
