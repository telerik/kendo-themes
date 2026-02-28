import { classNames } from '../misc';

export const PANELBARGROUP_CLASSNAME = `k-panelbar-group`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPanelBarGroupProps = {
    /** @aria When true, hides group from assistive technologies (parent collapsed) */
    ariaHidden?: boolean;
};

export const PanelBarGroup = (
    props: KendoPanelBarGroupProps & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        ariaHidden,
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
            aria-hidden={ariaHidden ? 'true' : undefined}
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
