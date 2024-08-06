import { classNames } from '../misc';

const FILTER_ITEM_CLASSNAME = 'k-filter-item';

const states = [];

const options = {};

export type KendoFilterItemProps = {
    children?: React.JSX.Element | React.JSX.Element[];
}


export const FilterItem = (
    props: KendoFilterItemProps & React.HTMLAttributes<HTMLUListElement>
) => {
    const { children } = props;

    return (
        <li className={classNames(FILTER_ITEM_CLASSNAME)}>
            {children}
        </li>
    );
};

FilterItem.states = states;
FilterItem.options = options;

export default FilterItem;
