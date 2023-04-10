import { classNames, optionClassNames, ThemeColor } from '../utils';

export const APPBAR_CLASSNAME = `k-appbar`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.inherit,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};
const defaultProps = {};

export type KendoAppbarOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoAppbarProps = KendoAppbarOptions & {
    positionMode?: 'static' | 'sticky' | 'fixed';
    position?: 'top' | 'bottom';
};

export const Appbar = (
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
Appbar.defaultProps = defaultProps;

export default Appbar;
