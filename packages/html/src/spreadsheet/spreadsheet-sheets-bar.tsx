import { Button } from '../button/button.spec';
import { MenuButton } from '../menu-button/menu-button.spec';
import { TabStrip } from '../tabstrip/tabstrip.spec';
import { TabStripItem } from '../tabstrip/tabstrip-item';
import { classNames } from '../misc';

export const SPREADSHEETSHEETSBAR_CLASSNAME = `k-spreadsheet-sheets-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetSheetsBarProps = {
    tabStripItems?: React.JSX.Element;
};

const defaultTabStripItems = (
    <>
        <TabStripItem first value="Sheet 1" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 2" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 3" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 4" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 5" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem last value="Sheet 6" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
    </>
);

const defaultOptions = {
    tabStripItems: defaultTabStripItems
};

export const SpreadsheetSheetsBar = (
    props: KendoSpreadsheetSheetsBarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        tabStripItems = defaultOptions.tabStripItems,
        ...other
    } = props;

    const tabStripItemsId = 'k-spreadsheet-tabstrip-items';

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETSHEETSBAR_CLASSNAME,
                props.className
            )}>
            <Button
                className="k-spreadsheet-sheet-add"
                fillMode="flat"
                icon="plus"
                aria-label="Add sheet"
                aria-controls={tabStripItemsId}
            />
            <Button
                className="k-spreadsheet-sheets-menu"
                fillMode="flat"
                icon="menu"
                aria-label="Sheets menu"
                aria-controls={tabStripItemsId}
            />
            <TabStrip
                className="k-spreadsheet-sheets"
                tabStripItemsId={tabStripItemsId}
                tabStripItems={tabStripItems}
                position="bottom"
                scrollable
                scrollButtons="end" />
        </div>
    );
};

SpreadsheetSheetsBar.states = states;
SpreadsheetSheetsBar.options = options;
SpreadsheetSheetsBar.className = SPREADSHEETSHEETSBAR_CLASSNAME;
SpreadsheetSheetsBar.defaultOptions = defaultOptions;

export default SpreadsheetSheetsBar;
