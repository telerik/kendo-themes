import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { MENU_FOLDER_NAME, MENU_MODULE_NAME } from './constants';
export const MENU_SCROLLABLE_WRAPPER_CLASS = `k-menu-scroll-wrapper`;

const states = [];

const options = {};

export type KendoMenuScrollableWrapperProps = {
    orientation?: string;
};

const defaultOptions = {
};

export const MenuScrollableWrapper: KendoComponent<KendoMenuScrollableWrapperProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoMenuScrollableWrapperProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
  const {
      className,
      children,
      orientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                className,
                MENU_SCROLLABLE_WRAPPER_CLASS,
                {
                    'k-menu-scroll-wrapper-vertical': orientation === 'vertical'
                }
            )}>
            {children}
        </div>
    );
};

MenuScrollableWrapper.states = states;
MenuScrollableWrapper.options = options;
MenuScrollableWrapper.className = MENU_SCROLLABLE_WRAPPER_CLASS;
MenuScrollableWrapper.defaultOptions = defaultOptions;
MenuScrollableWrapper.moduleName = MENU_MODULE_NAME;
MenuScrollableWrapper.folderName = MENU_FOLDER_NAME;

export default MenuScrollableWrapper;
