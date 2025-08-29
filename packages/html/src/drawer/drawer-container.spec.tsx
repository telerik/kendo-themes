import { classNames } from '../misc';

export const DRAWER_CONTAINER_CLASSNAME = `k-drawer-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDrawerContainerOptions = {};

export type KendoDrawerContainerProps = KendoDrawerContainerOptions & {};

export const DrawerContainer = (
    props: KendoDrawerContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                DRAWER_CONTAINER_CLASSNAME,
                props.className,
            )}>
            {props.children}
        </div>
    );
};

DrawerContainer.states = states;
DrawerContainer.options = options;
DrawerContainer.className = DRAWER_CONTAINER_CLASSNAME;
DrawerContainer.defaultOptions = defaultOptions;

export default DrawerContainer;
