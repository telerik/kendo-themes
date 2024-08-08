import { DropdownList, Icon } from '..';
import { Button } from '../button';
import { classNames } from '../misc';

export const CALCULATEDFIELD_CLASSNAME = `k-calculated-field`;

const states = [];

const options = {};

export type KendoCalculatedFieldProps = {
    headerContent?: React.JSX.Element | React.JSX.Element[];
    headerActions?: React.JSX.Element | React.JSX.Element[];
    fieldActions?: React.JSX.Element | React.JSX.Element[];
};

const defaultFieldActions = (
    <>
        <Icon icon="sum" />
        <DropdownList value="SUM" />
        <span className="k-spacer"></span>
        <Icon icon="eye" />
        <DropdownList value="Default" />
    </>
);

const defaultOptions = {
    headerContent: <div className="k-calculated-field-header-text">Date.Calendar</div>,
    headerActions: <Button fillMode="flat" icon="x"></Button>,
    fieldActions: defaultFieldActions
};

export const CalculatedField = (
    props: KendoCalculatedFieldProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        headerContent = defaultOptions.headerContent,
        headerActions = defaultOptions.headerActions,
        fieldActions = defaultOptions.fieldActions,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CALCULATEDFIELD_CLASSNAME
            )}>

            <div className="k-calculated-field-header">
                {headerContent}
                {headerActions &&
                    <>
                        <span className="k-spacer"></span>
                        <div className="k-calculated-field-header-actions">
                            {headerActions}
                        </div>
                    </>
                }
            </div>
            {children &&
                <div className="k-calculated-field-content">{children}</div>
            }
            <div className="k-calculated-field-actions">
                {fieldActions}
            </div>
        </div>
    );
};

CalculatedField.states = states;
CalculatedField.options = options;
CalculatedField.className = CALCULATEDFIELD_CLASSNAME;
CalculatedField.defaultOptions = defaultOptions;

export default CalculatedField;
