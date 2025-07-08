import { classNames } from '../misc';
import { Pager, KendoPagerProps } from '../pager';

import { KendoComponent } from '../_types/component';
const className = `k-grid-pager`;

export const GridPager: KendoComponent<KendoPagerProps & React.HTMLAttributes<HTMLDivElement>> = (
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

GridPager.className = className;
