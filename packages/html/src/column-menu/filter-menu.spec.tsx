import { classNames } from '../misc';

export const FILTERMENU_CLASSNAME = `k-filter-menu`;

const states = [];

const options = {};

const defaultProps = {};

export const FilterMenu = (
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
FilterMenu.defaultProps = defaultProps;

export default FilterMenu;
