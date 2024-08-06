import { classNames } from '../misc';

export const COLUMNMENU_CLASSNAME = `k-column-menu`;

const states = [];

const options = {};

export type KendoColumnMenuProps = {
    view?: 'list' | 'tabbed';
};

export const ColumnMenu = (
    props: KendoColumnMenuProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view = "list",
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENU_CLASSNAME,
                {
                    'k-column-menu-tabbed': view === 'tabbed'
                },
            )}>
            { props.children }
        </div>
    );
};

ColumnMenu.states = states;
ColumnMenu.options = options;
ColumnMenu.className = COLUMNMENU_CLASSNAME;

export default ColumnMenu;
