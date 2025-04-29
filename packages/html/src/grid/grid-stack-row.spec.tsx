import { classNames } from "../misc";

const GRIDSTACKROW_CLASSNAME = `k-grid-stack-row`;

export type KendoGridStackRowProps = {
    cols?: number;
};


export const GridStackRow = (
    props: KendoGridStackRowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        cols,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                GRIDSTACKROW_CLASSNAME,
                {
                    [`k-grid-cols-${cols}`]: cols
                }

            )}
        >
            {props.children}
        </div>
    );
};

GridStackRow.className = GRIDSTACKROW_CLASSNAME;

export default GridStackRow;
