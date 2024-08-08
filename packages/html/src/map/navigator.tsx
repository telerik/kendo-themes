import { Button } from '..';
import { classNames } from '../misc';

export const NAVIGATOR_CLASSNAME = `k-navigator`;

const states = [];

const options = {};

const defaultOptions = {};

export const Navigator = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                NAVIGATOR_CLASSNAME
            )}
        >
            <Button className="k-navigator-n" icon="caret-alt-up" fillMode="flat" rounded="full" size={null}></Button>
            <Button className="k-navigator-e" icon="caret-alt-right" fillMode="flat" rounded="full" size={null}></Button>
            <Button className="k-navigator-s" icon="caret-alt-down" fillMode="flat" rounded="full" size={null}></Button>
            <Button className="k-navigator-w" icon="caret-alt-left" fillMode="flat" rounded="full" size={null}></Button>
        </div>
    );
};

Navigator.states = states;
Navigator.options = options;
Navigator.className = NAVIGATOR_CLASSNAME;
Navigator.defaultOptions = defaultOptions;

export default Navigator;
