import { Button, MenuButton, TabStrip, TabStripItem } from '..';
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
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 2" actions={
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 3" actions={
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 4" actions={
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem value="Sheet 5" actions={
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
        }></TabStripItem>
        <TabStripItem last value="Sheet 6" actions={
            <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
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

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETSHEETSBAR_CLASSNAME,
                props.className
            )}>
            <Button className="k-spreadsheet-sheet-add" fillMode="flat" icon="plus" />
            <Button className="k-spreadsheet-sheets-menu" fillMode="flat" icon="menu" />
            <TabStrip
                className="k-spreadsheet-sheets"
                tabStripItems={tabStripItems}
                position="bottom"
                scrollable
                scrollButtonsPosition="end" />
        </div>
    );
};

SpreadsheetSheetsBar.states = states;
SpreadsheetSheetsBar.options = options;
SpreadsheetSheetsBar.className = SPREADSHEETSHEETSBAR_CLASSNAME;
SpreadsheetSheetsBar.defaultOptions = defaultOptions;

export default SpreadsheetSheetsBar;
