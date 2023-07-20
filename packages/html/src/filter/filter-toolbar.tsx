import { classNames } from '../misc';

export const FILTER_TOOLBAR_CLASSNAME = 'k-filter-toolbar';

const states = [];

const options = {};

export type KendoFilterToolbarProps = {
    children?: JSX.Element | JSX.Element[];
}

const defaultProps = {};

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
FilterToolbar.defaultProps = defaultProps;

export default FilterToolbar;
