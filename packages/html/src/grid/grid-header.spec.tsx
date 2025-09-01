import { classNames } from '../misc';

const className = `k-grid-header`;

export type KendoGridHeaderProps = {
    draggable?: boolean;
};

export const GridHeader = (
    props: KendoGridHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        draggable,
        ...other
    } = props;

    return (

        <div
            {...other}
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
