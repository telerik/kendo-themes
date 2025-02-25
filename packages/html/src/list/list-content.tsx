import { classNames } from '../misc';

const className = `k-list-content`;

export type KendoListContentProps = {
    virtualization?: boolean;
};

export const ListContent = (
    props: KendoListContentProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(className, props.className)}>
            <ul className={classNames('k-list-ul')}>
                {props.children}
            </ul>
            { virtualization && <div className="k-height-container"><div></div></div> }
        </div>
    );
};
