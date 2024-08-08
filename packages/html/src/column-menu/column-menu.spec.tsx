import { classNames } from '../misc';

export const COLUMNMENU_CLASSNAME = `k-column-menu`;

const states = [];

const options = {};

export type KendoColumnMenuProps = {
    view?: 'list' | 'tabbed';
};

const defaultOptions = {
    view: 'list',
};

export const ColumnMenu = (
    props: KendoColumnMenuProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view = defaultOptions.view,
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
ColumnMenu.defaultOptions = defaultOptions;

export default ColumnMenu;
