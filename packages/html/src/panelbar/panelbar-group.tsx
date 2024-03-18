import { classNames } from '../misc';

export const PANELBARGROUP_CLASSNAME = `k-panelbar-group`;

const states = [];

const options = {};

const defaultProps = {};

export const PanelBarGroup = (
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
                PANELBARGROUP_CLASSNAME
            )}
        >
            {props.children}
        </ul>
    );
};

PanelBarGroup.states = states;
PanelBarGroup.options = options;
PanelBarGroup.className = PANELBARGROUP_CLASSNAME;
PanelBarGroup.defaultProps = defaultProps;

export default PanelBarGroup;
