
import { classNames } from '../misc';

export const DRAWERCONTENT_CLASSNAME = `k-drawer-content`;

const states = [];

const options = { };

const defaultProps = {

} as const;

export const DrawerContent = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div {...other}
            className={classNames(
                DRAWERCONTENT_CLASSNAME
            )}>
            {props.children}
        </div>
    );
};

DrawerContent.states = states;
DrawerContent.options = options;
DrawerContent.className = DRAWERCONTENT_CLASSNAME;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
