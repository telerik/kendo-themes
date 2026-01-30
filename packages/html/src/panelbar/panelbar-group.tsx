import { classNames } from '../misc';

export const PANELBARGROUP_CLASSNAME = `k-panelbar-group`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPanelBarGroupProps = {
    parentExpanded?: boolean;
};

export const PanelBarGroup = (
    props: KendoPanelBarGroupProps & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        parentExpanded,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                PANELBARGROUP_CLASSNAME
            )}
            role="group"
            {...(parentExpanded === false && { 'aria-hidden': 'true' })}
        >
            {props.children}
        </ul>
    );
};

PanelBarGroup.states = states;
PanelBarGroup.options = options;
PanelBarGroup.className = PANELBARGROUP_CLASSNAME;
PanelBarGroup.defaultOptions = defaultOptions;

export default PanelBarGroup;
