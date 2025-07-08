import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-grid-container`;

export const GridContainer: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

GridContainer.className = className;
