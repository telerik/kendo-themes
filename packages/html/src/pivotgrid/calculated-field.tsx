import { DropdownList, Icon } from '..';
import { Button } from '../button';
import { classNames } from '../misc';

export const CALCULATEDFIELD_CLASSNAME = `k-calculated-field`;

const states = [];

const options = {};

export type KendoCalculatedFieldProps = {
    headerContent?: JSX.Element | JSX.Element[];
    headerActions?: JSX.Element | JSX.Element[];
    fieldActions?: JSX.Element | JSX.Element[];
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

const defaultProps = {
    headerContent: <div className="k-calculated-field-header-text">Date.Calendar</div>,
    headerActions: <Button fillMode="flat" icon="x"></Button>,
    fieldActions: defaultFieldActions
};

export const CalculatedField = (
    props: KendoCalculatedFieldProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        headerContent = defaultProps.headerContent,
        headerActions = defaultProps.headerActions,
        fieldActions = defaultProps.fieldActions,
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
CalculatedField.defaultProps = defaultProps;

export default CalculatedField;
