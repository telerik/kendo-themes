import { KendoTabStripProps, TABSTRIP_CLASSNAME, TabStripItems, TabStripItemsWrapper } from '../tabstrip';
import { classNames } from '../misc';
import { Button } from '../button';

export const SPREADSHEETTABSTRIP_CLASSNAME = `k-spreadsheet-sheets`;

const states = [];

const options = {};

export const SpreadsheetTabStrip = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        tabStripItems,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TABSTRIP_CLASSNAME,
                SPREADSHEETTABSTRIP_CLASSNAME,
                "k-tabstrip-bottom",
                "k-tabstrip-scrollable",
            )}
        >
            {children}
            <TabStripItemsWrapper orientation="vertical">
                <TabStripItems>
                    {tabStripItems}
                </TabStripItems>
                <Button className="k-tabstrip-prev" fillMode="flat" icon="caret-alt-left" rounded={null} size={null} />
                <Button className="k-tabstrip-next" fillMode="flat" icon="caret-alt-right" rounded={null} size={null} />
            </TabStripItemsWrapper>
        </div>
    );
};

SpreadsheetTabStrip.states = states;
SpreadsheetTabStrip.options = options;
SpreadsheetTabStrip.className = SPREADSHEETTABSTRIP_CLASSNAME;

export default SpreadsheetTabStrip;
