import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
export const GROUPMENU_CLASSNAME = `k-group-menu`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoGroupMenuOptions = {
    size?: (typeof options.size)[number] | null;
}

const defaultOptions = {
    size: Size.medium
};

export const GroupMenu: KendoComponent<KendoGroupMenuOptions & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGroupMenuOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const  {
        size = defaultOptions.size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GROUPMENU_CLASSNAME,
                optionClassNames(GROUPMENU_CLASSNAME, {
                    size,
                }),
            )}>
            { props.children }
        </div>
    );
};

GroupMenu.states = states;
GroupMenu.options = options;
GroupMenu.className = GROUPMENU_CLASSNAME;
GroupMenu.defaultOptions = defaultOptions;

export default GroupMenu;
