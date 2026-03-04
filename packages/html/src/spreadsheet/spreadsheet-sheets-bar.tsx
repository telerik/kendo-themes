import { Button } from '../button/button.spec';
import { MenuButton } from '../menu-button/menu-button.spec';
import { TabStrip } from '../tabstrip/tabstrip.spec';
import { TabStripItem } from '../tabstrip/tabstrip-item';
import { classNames, nextId } from '../misc';

export const SPREADSHEETSHEETSBAR_CLASSNAME = `k-spreadsheet-sheets-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetSheetsBarProps = {
    tabStripItems?: React.JSX.Element;
};

const defaultTabStripItems = (
    <>
        <TabStripItem key="sheet1" first value="Sheet 1" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
        }></TabStripItem>
        <TabStripItem key="sheet2" value="Sheet 2" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
        }></TabStripItem>
        <TabStripItem key="sheet3" value="Sheet 3" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
        }></TabStripItem>
        <TabStripItem key="sheet4" value="Sheet 4" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
        }></TabStripItem>
        <TabStripItem key="sheet5" value="Sheet 5" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
        }></TabStripItem>
        <TabStripItem key="sheet6" last value="Sheet 6" actions={
            <MenuButton showArrow={false} icon="caret-alt-down" fillMode="flat" aria-label="Sheet options" />
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

    const tabStripItemsId = nextId('spreadsheet-sheets');

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETSHEETSBAR_CLASSNAME,
                props.className
            )}>
            <Button className="k-spreadsheet-sheet-add" fillMode="flat" icon="plus" aria-label="Add new sheet" aria-controls={tabStripItemsId} />
            <Button className="k-spreadsheet-sheets-menu" fillMode="flat" icon="menu" aria-label="Sheets menu" aria-controls={tabStripItemsId} />
            <TabStrip
                className="k-spreadsheet-sheets"
                tabStripItems={tabStripItems}
                tabStripItemsId={tabStripItemsId}
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
