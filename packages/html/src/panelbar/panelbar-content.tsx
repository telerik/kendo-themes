import { classNames } from '../misc';

export const PANELBARCONTENT_CLASSNAME = `k-panelbar-content`;

const states = [];

const options = {};

const defaultOptions = {};

export const PanelBarContent = (
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
                PANELBARCONTENT_CLASSNAME
            )}
        >
            {props.children}
        </div>
    );
};

PanelBarContent.states = states;
PanelBarContent.options = options;
PanelBarContent.className = PANELBARCONTENT_CLASSNAME;
PanelBarContent.defaultOptions = defaultOptions;

export default PanelBarContent;
