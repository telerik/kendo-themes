import { classNames } from '../misc';

export const FILTER_TOOLBAR_CLASSNAME = 'k-filter-toolbar';

const states = [];

const options = {};

export type KendoFilterToolbarProps = {
    children?: React.JSX.Element | React.JSX.Element[];
}


export const FilterToolbar = (
    props: KendoFilterToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { children } = props;

    return (
        <div className={classNames(FILTER_TOOLBAR_CLASSNAME)}>
            {children}
        </div>
    );
};

FilterToolbar.states = states;
FilterToolbar.options = options;

export default FilterToolbar;
