import { classNames } from '../misc';

const className = `k-grid-footer`;

export const GridFooter = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);
