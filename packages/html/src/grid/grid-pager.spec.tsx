import { classNames } from '../misc';
import { Pager, KendoPagerProps } from '../pager';

const className = `k-grid-pager`;

export const GridPager = (
    props: KendoPagerProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Pager
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </Pager>
);
