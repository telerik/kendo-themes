import { classNames } from '../misc';

export const PANELBARGROUP_CLASSNAME = `k-panelbar-group`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPanelBarGroupProps = {
    ariaHidden?: boolean;
};

/**
 * @aria {aria-hidden="true"} Applied when parent is collapsed; hides group from assistive technologies.
 */
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
            {...(ariaHidden !== undefined && { 'aria-hidden': ariaHidden ? 'true' : undefined })}
        >
            {props.children}
        </ul>
    );
};

PanelBarGroup.states = states;
PanelBarGroup.options = options;
PanelBarGroup.className = PANELBARGROUP_CLASSNAME;
PanelBarGroup.moduleName = null;
PanelBarGroup.folderName = null;
PanelBarGroup.defaultOptions = defaultOptions;

export default PanelBarGroup;
