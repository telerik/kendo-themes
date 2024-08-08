
import { classNames } from '../misc';

export const DRAWERCONTENT_CLASSNAME = `k-drawer-content`;

const states = [];

const options = { };

const defaultOptions = {} as const;

export const DrawerContent = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div {...other}
            className={classNames(
                props.className,
                DRAWERCONTENT_CLASSNAME
            )}>
            {props.children}
        </div>
    );
};

DrawerContent.states = states;
DrawerContent.options = options;
DrawerContent.className = DRAWERCONTENT_CLASSNAME;
DrawerContent.defaultOptions = defaultOptions;

export default DrawerContent;
