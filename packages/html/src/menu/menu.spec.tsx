import { classNames } from '../misc';

export const MENU_CLASSNAME = `k-menu`;

const states = [];

const options = {};

export type KendoMenuProps = {
    orientation?: 'horizontal' | 'vertical';
    header?: boolean | null;
};

const defaultOptions = {
    orientation: 'horizontal',
    header: true
};

export const Menu = (
    props: KendoMenuProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        orientation = defaultOptions.orientation,
        header = defaultOptions.header,
        ...other
    } = props;

    return (

        <ul
            id="menu"
            {...other}
            className={classNames(
                props.className,
                "k-reset",
                MENU_CLASSNAME,
                {
                    [`${MENU_CLASSNAME}-${orientation}`]: orientation,
                    ["k-header"]: header
                }
            )}>
            {children}
        </ul>
    );
};

Menu.states = states;
Menu.options = options;
Menu.className = MENU_CLASSNAME;
Menu.defaultOptions = defaultOptions;

export default Menu;
