import { KendoTabStripProps, TabStrip } from '../tabstrip';
import { classNames } from '../misc';

export const SPREADSHEETTABSTRIP_CLASSNAME = `k-spreadsheet-sheets`;

const states = [];

const options = {};

const defaultProps = {};

export const SpreadsheetTabStrip = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <TabStrip
            {...other}
            scrollable
            position="bottom"
            header={null}
            className={classNames(
                props.className,
                SPREADSHEETTABSTRIP_CLASSNAME,
            )}
        >
            {children}
        </TabStrip>
    );
};

SpreadsheetTabStrip.states = states;
SpreadsheetTabStrip.options = options;
SpreadsheetTabStrip.className = SPREADSHEETTABSTRIP_CLASSNAME;
SpreadsheetTabStrip.defaultProps = defaultProps;

export default SpreadsheetTabStrip;
