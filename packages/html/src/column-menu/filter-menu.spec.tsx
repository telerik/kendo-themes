import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const FILTERMENU_CLASSNAME = `k-filter-menu`;

const states = [];

const options = {};

const defaultOptions = {};

export const FilterMenu: KendoComponent<React.HTMLAttributes<HTMLFormElement>> = (
    props: React.HTMLAttributes<HTMLFormElement>
) => {
    const {
        ...other
    } = props;

    return (
        <form
            {...other}
            className={classNames(
                props.className,
                FILTERMENU_CLASSNAME
            )}
        >
            <div className="k-filter-menu-container">
                {props.children}
            </div>
        </form>
    );
};

FilterMenu.states = states;
FilterMenu.options = options;
FilterMenu.className = FILTERMENU_CLASSNAME;
FilterMenu.defaultOptions = defaultOptions;

export default FilterMenu;
