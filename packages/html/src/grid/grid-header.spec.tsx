import { classNames } from '../misc';

const className = `k-grid-header`;

export const GridHeader = (
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
