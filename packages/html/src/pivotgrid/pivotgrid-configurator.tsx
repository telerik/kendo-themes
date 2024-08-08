import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../misc';

export const PIVOTGRIDCONFIGURATOR_CLASSNAME = `k-pivotgrid-configurator`;

const states = [];

const options = {};

export type KendoPivotGridConfiguratorProps = {
    actionButtons?: React.JSX.Element;
    orientation?: "horizontal" | "vertical";
    mode?: "overlay" | "push";
    header?: string;
};

const defaultActionButtons = (
    <>
        <Button>Cancel</Button>
        <Button themeColor="primary">Apply</Button>
    </>
);

const defaultOptions = {
    orientation: "vertical",
    mode: "push",
    actionButtons: defaultActionButtons,
    header: "Settings"
};

export const PivotGridConfigurator = (
    props: KendoPivotGridConfiguratorProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        mode = defaultOptions.mode,
        actionButtons = defaultOptions.actionButtons,
        header = defaultOptions.header,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDCONFIGURATOR_CLASSNAME
            )}>
            <div className={classNames(
                "k-pivotgrid-configurator-panel",
                {
                    [`${PIVOTGRIDCONFIGURATOR_CLASSNAME}-${orientation}`]: orientation,
                    [`${PIVOTGRIDCONFIGURATOR_CLASSNAME}-${mode}`]: mode
                }
            )}>
                <div className="k-pivotgrid-configurator-header">
                    <div className="k-pivotgrid-configurator-header-text">{header}</div>
                </div>
                <div className="k-pivotgrid-configurator-content">
                    {children}
                </div>
                <ActionButtons alignment="end" className="k-pivotgrid-configurator-actions">
                    {actionButtons}
                </ActionButtons>
            </div>
        </div>
    );
};

PivotGridConfigurator.states = states;
PivotGridConfigurator.options = options;
PivotGridConfigurator.className = PIVOTGRIDCONFIGURATOR_CLASSNAME;
PivotGridConfigurator.defaultOptions = defaultOptions;

export default PivotGridConfigurator;
