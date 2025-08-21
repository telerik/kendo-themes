import { classNames } from '../misc';

export const TABSTRIP_WRAPPER_CLASSNAME = `k-tabstrip-wrapper`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoTabstripContainerOptions = {};

export type KendoTabstripContainerProps = KendoTabstripContainerOptions & {};

export const TabstripContainer = (
    props: KendoTabstripContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TABSTRIP_WRAPPER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

TabstripContainer.states = states;
TabstripContainer.options = options;
TabstripContainer.className = TABSTRIP_WRAPPER_CLASSNAME;
TabstripContainer.defaultOptions = defaultOptions;

export default TabstripContainer;
