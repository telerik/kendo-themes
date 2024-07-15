import { classNames } from '../misc';

const CHARTWIZARDCHARTTYPEWRPPER_CLASSNAME = `k-chart-types-wrapper`;

const options = {};

const defaultProps = {};

export const ChartWizardChartTypesWrapper = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            CHARTWIZARDCHARTTYPEWRPPER_CLASSNAME
        )}
    >
        {props.children}
    </div>
);

ChartWizardChartTypesWrapper.options = options;
ChartWizardChartTypesWrapper.className = CHARTWIZARDCHARTTYPEWRPPER_CLASSNAME;
ChartWizardChartTypesWrapper.defaultProps = defaultProps;

export default ChartWizardChartTypesWrapper;
