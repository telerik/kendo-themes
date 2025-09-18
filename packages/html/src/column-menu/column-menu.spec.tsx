import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
export const COLUMNMENU_CLASSNAME = `k-column-menu`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoColumnMenuOptions = {
    size?: (typeof options.size)[number] | null;
}

export type KendoColumnMenuProps = KendoColumnMenuOptions & {
    view?: 'list' | 'tabbed';
};

const defaultOptions = {
    view: 'list',
    size: Size.medium
};

export const ColumnMenu: KendoComponent<KendoColumnMenuProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColumnMenuProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view = defaultOptions.view,
        size = defaultOptions.size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENU_CLASSNAME,
                optionClassNames(COLUMNMENU_CLASSNAME, {
                    size,
                }),
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
ColumnMenu.moduleName = "column-menu";
ColumnMenu.folderName = ColumnMenu.moduleName;

export default ColumnMenu;
