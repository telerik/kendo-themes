import { Button } from '../button/button.spec';
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
            <Button className="k-navigator-n" icon="chevron-up" fillMode="flat" rounded="full" size={null} aria-label="Pan north"></Button>
            <Button className="k-navigator-e" icon="chevron-right" fillMode="flat" rounded="full" size={null} aria-label="Pan east"></Button>
            <Button className="k-navigator-s" icon="chevron-down" fillMode="flat" rounded="full" size={null} aria-label="Pan south"></Button>
            <Button className="k-navigator-w" icon="chevron-left" fillMode="flat" rounded="full" size={null} aria-label="Pan west"></Button>
        </div>
    );
};

Navigator.states = states;
Navigator.options = options;
Navigator.className = NAVIGATOR_CLASSNAME;
Navigator.defaultOptions = defaultOptions;

export default Navigator;
