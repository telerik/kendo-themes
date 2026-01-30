import { classNames } from '../misc';
import { ListUl } from './list-ul';

const className = `k-list-content`;

export type KendoListContentProps = {
    virtualization?: boolean;
    grouping?: boolean;
};

export const ListContent = (
    props: KendoListContentProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        grouping,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(className, props.className)}>
            {grouping ? props.children : <ListUl>{props.children}</ListUl>}
            { virtualization && <div className="k-height-container"><div></div></div> }
        </div>
    );
};
