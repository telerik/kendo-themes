import { classNames } from '../misc';
import { Splitter, KendoSplitterProps } from '../splitter';

export const CHARTWIZARDSPLITTER_CLASSNAME = `k-chart-wizard-splitter`;

const states = [];

const options = {};

const defaultOptions = {};

export const ChartWizardSplitter = (
    props: KendoSplitterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Splitter
            {...other}
            className={classNames(
                props.className,
                CHARTWIZARDSPLITTER_CLASSNAME,
            )}
        >
            {children}
        </Splitter>
    );
};

ChartWizardSplitter.states = states;
ChartWizardSplitter.options = options;
ChartWizardSplitter.className = CHARTWIZARDSPLITTER_CLASSNAME;
ChartWizardSplitter.defaultOptions = defaultOptions;

export default ChartWizardSplitter;
