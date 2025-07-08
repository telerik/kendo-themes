import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-grid-header`;

export type KendoGridHeaderProps = {
    draggable?: boolean;
};

export const GridHeader: KendoComponent<KendoGridHeaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        draggable
    } = props;

    return (

        <div
            {...props}
            className={classNames(
                props.className,
                className,
                {[`k-grid-draggable-header`]: draggable},
            )}
        >

            {props.children}

        </div>
    );
};

GridHeader.className = className;
