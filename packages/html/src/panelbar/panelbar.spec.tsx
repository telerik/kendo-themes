import { classNames } from '../misc';

export const PANELBAR_CLASSNAME = `k-panelbar`;

const states = [];

const options = {};

const defaultOptions = {};

export const PanelBar = (
    props: React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                PANELBAR_CLASSNAME
            )}
        >
            {props.children}
        </ul>
    );
};

PanelBar.states = states;
PanelBar.options = options;
PanelBar.className = PANELBAR_CLASSNAME;
PanelBar.defaultOptions = defaultOptions;

export default PanelBar;
