import { classNames } from '../misc';

export const DRAWER_PUSH_CLASSNAME = `k-drawer-push`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDrawerPushOptions = {};

export type KendoDrawerPushProps = KendoDrawerPushOptions & {};

export const DrawerPush = (
    props: KendoDrawerPushProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DRAWER_PUSH_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DrawerPush.states = states;
DrawerPush.options = options;
DrawerPush.className = DRAWER_PUSH_CLASSNAME;
DrawerPush.defaultOptions = defaultOptions;

export default DrawerPush;
