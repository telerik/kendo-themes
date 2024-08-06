import { KendoMenuProps, Menu } from '../menu';
import { classNames } from '../misc';

export const SPREADSHEETMENU_CLASSNAME = `k-spreadsheet-menu`;

const states = [];

const options = {};

export const SpreadsheetMenu = (
    props: KendoMenuProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Menu
            {...other}
            className={classNames(
                props.className,
                SPREADSHEETMENU_CLASSNAME,
            )}
        >
            {children}
        </Menu>
    );
};

SpreadsheetMenu.states = states;
SpreadsheetMenu.options = options;
SpreadsheetMenu.className = SPREADSHEETMENU_CLASSNAME;

export default SpreadsheetMenu;
