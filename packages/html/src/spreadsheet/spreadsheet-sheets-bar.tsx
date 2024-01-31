import { Button, MenuButton, SpreadsheetTabStrip, TabStripItem, TabStripItems, TabStripItemsWrapper } from '..';
import { classNames } from '../misc';

export const SPREADSHEETSHEETSBAR_CLASSNAME = `k-spreadsheet-sheets-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetSheetsBarProps = {
    tabStripItems?: JSX.Element;
};

const defaultTabStripItems = (
    <>
        <TabStripItem first value="Sheet 1">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
        <TabStripItem value="Sheet 2">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
        <TabStripItem value="Sheet 3">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
        <TabStripItem value="Sheet 4">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
        <TabStripItem value="Sheet 5">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
        <TabStripItem last value="Sheet 6">
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        </TabStripItem>
    </>
);

const defaultProps = {
    tabStripItems: defaultTabStripItems
};

export const SpreadsheetSheetsBar = (
    props: KendoSpreadsheetSheetsBarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        tabStripItems,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETSHEETSBAR_CLASSNAME,
                props.className
            )}>
            <Button className="k-spreadsheet-sheet-add" fillMode="flat" icon="plus" />
            <Button className="k-spreadsheet-sheets-menu" fillMode="flat" icon="menu" />

            <SpreadsheetTabStrip>
                <TabStripItemsWrapper orientation="vertical">
                    <TabStripItems>
                        {tabStripItems}
                    </TabStripItems>
                    <Button className="k-tabstrip-prev" fillMode="flat" icon="caret-alt-left" rounded={null} size={null} />
                    <Button className="k-tabstrip-next" fillMode="flat" icon="caret-alt-right" rounded={null} size={null} />
                </TabStripItemsWrapper>
            </SpreadsheetTabStrip>
        </div>
    );
};

SpreadsheetSheetsBar.states = states;
SpreadsheetSheetsBar.options = options;
SpreadsheetSheetsBar.className = SPREADSHEETSHEETSBAR_CLASSNAME;
SpreadsheetSheetsBar.defaultProps = defaultProps;

export default SpreadsheetSheetsBar;
