import { classNames, optionClassNames, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { APPBAR_FOLDER_NAME, APPBAR_MODULE_NAME } from './constants';
export const APPBAR_CLASSNAME = `k-appbar`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.inverse
    ],
};
const defaultOptions = {};

export type KendoAppbarOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoAppbarProps = KendoAppbarOptions & {
    positionMode?: 'static' | 'sticky' | 'fixed';
    position?: 'top' | 'bottom';
};

/**
 * @ux {Application header} Renders as the primary header bar of the application.
 * @ux {Sticky positioning} Stays fixed at the top of the viewport as the user scrolls.
 * @ux {Sections} Divided into start, center, and end sections for flexible content placement.
 */
export const Appbar: KendoComponent<KendoAppbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoAppbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        themeColor,
        positionMode,
        position,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                APPBAR_CLASSNAME,
                optionClassNames(APPBAR_CLASSNAME, {
                    themeColor,
                }),
                {
                    [`k-appbar-${positionMode}`]: positionMode,
                    [`k-appbar-${position}`]: position
                }
            )}>
            {props.children}
        </div>
    );
};

Appbar.states = states;
Appbar.options = options;
Appbar.className = APPBAR_CLASSNAME;
Appbar.defaultOptions = defaultOptions;
Appbar.moduleName = APPBAR_MODULE_NAME;
Appbar.folderName = APPBAR_FOLDER_NAME;
export default Appbar;
