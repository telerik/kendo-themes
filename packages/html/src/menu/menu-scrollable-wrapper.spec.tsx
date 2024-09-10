import { classNames } from '../misc';

export const MENU_SCROLLABLE_WRAPPER_CLASS = `k-menu-scroll-wrapper`;

const states = [];

const options = {};

export type KendoMenuScrollableWrapperProps = {
    orientation?: string;
};

const defaultOptions = {
};

export const MenuScrollableWrapper = (
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

export default MenuScrollableWrapper;
