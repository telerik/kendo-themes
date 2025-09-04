import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const SEPARATOR_CLASSNAME = `k-separator`;

export type KendoMenuSeparatorProps = {
    orientation?: 'horizontal' | 'vertical';
};

const defaultOptions = {
    orientation: 'horizontal'
};

export const MenuSeparator: KendoComponent<KendoMenuSeparatorProps & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoMenuSeparatorProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        ...other
    } = props;

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                "k-item",
                SEPARATOR_CLASSNAME,
                {
                    [`${SEPARATOR_CLASSNAME}-${orientation}`]: orientation
                }
            )}>
        </li>
    );
};

MenuSeparator.className = SEPARATOR_CLASSNAME;
MenuSeparator.defaultOptions = defaultOptions;
MenuSeparator.moduleName = "menu";
MenuSeparator.folderName = "menu";

export default MenuSeparator;
