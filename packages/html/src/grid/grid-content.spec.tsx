import { classNames } from '../misc';

const className = `k-grid-content`;

export const GridContent = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}>
        {props.children}
    </div>
);
