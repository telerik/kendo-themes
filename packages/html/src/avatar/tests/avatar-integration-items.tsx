import { AvatarIntegrationExample as Example, AvatarIntegrationSlot as Slot, avatarIntegrationStyles } from '../../avatar';
import { Chip } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { MenuButton } from '../../menu-button';
import { Toolbar } from '../../toolbar';
import { List, ListItem, ListUl } from '../../list';
import { TreeviewItem } from '../../treeview';
import { DrawerItem } from '../../drawer';
import { ActionSheetItem } from '../../action-sheet';
import { TableTd, TableRow, TableTbody } from '../../table';

const styles = `${avatarIntegrationStyles}
    #test-area .k-menu-button .k-button-text,
    #test-area .k-menu-link, #test-area .k-link { display: inline-flex; align-items: center; gap: 6px; }
    #test-area .k-toolbar, #test-area .k-grid-table, #test-area .k-pivotgrid-table { width: 100%; }
    #test-area .k-drawer-item .avatar-slot { order: -1; }
    #test-area .k-chip-content .avatar-row { gap: 4px; }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <Example title="Chip" defaultSize={16} capacity={16} hostSelector=".k-chip"
                rationale="XS is the smallest candidate; the native Chip Avatar is 1em and even XS exceeds the unmodified medium Chip in Default and Classic. Clipping preserves its native height.">
                {(pixels) => <Chip><span className="avatar-row"><Slot pixels={pixels} capacity={16} />Alex Morgan</span></Chip>}
            </Example>
            <Example title="DropDownButton" defaultSize={16} capacity={16} hostSelector=".k-menu-button"
                rationale="XS preserves the default button height; S and larger need a taller control.">
                {(pixels) => <MenuButton text="People"><Slot pixels={pixels} capacity={16} /></MenuButton>}
            </Example>
            <Example title="Toolbar" defaultSize={24} capacity={24} hostSelector=".k-toolbar"
                rationale="S is legible within the existing toolbar; XS is a compact alternative.">
                {(pixels) => <Toolbar><Slot pixels={pixels} capacity={24} alt="Account" /><span>Account</span></Toolbar>}
            </Example>
            <Example title="List Item" defaultSize={16} capacity={16} hostSelector=".k-list-item"
                rationale="XS is the dense-row candidate; the content wrapper would otherwise increase height in some themes.">
                {(pixels) => <List><ListUl><ListItem><span className="avatar-row">
                    <Slot pixels={pixels} capacity={16} />Alex Morgan
                </span></ListItem></ListUl></List>}
            </Example>
            <Example title="TreeView Item" defaultSize={16} capacity={16} hostSelector=".k-treeview-item"
                rationale="XS avoids increasing the indentation row's content height.">
                {(pixels) => <ul className="k-treeview-group"><TreeviewItem content={
                    <span className="avatar-row"><Slot pixels={pixels} capacity={16} />Alex Morgan</span>
                } /></ul>}
            </Example>
            <Example title="Grid Cell" defaultSize={16} capacity={16} hostSelector=".k-grid-table tr"
                rationale="XS uses the smallest cell slot; larger images cannot set row height.">
                {(pixels) => <div className="k-grid"><table className="k-grid-table"><TableTbody><TableRow>
                    <TableTd>Teammate</TableTd><TableTd><span className="avatar-row">
                        <Slot pixels={pixels} capacity={16} />Alex Morgan
                    </span></TableTd>
                </TableRow></TableTbody></table></div>}
            </Example>
            <Example title="PivotGrid Cell" defaultSize={16} capacity={16} hostSelector=".k-pivotgrid-cell"
                rationale="XS is the conservative cell-size candidate; check the production row density before using larger images.">
                {(pixels) => <table className="k-pivotgrid-table"><tbody><tr><td className="k-pivotgrid-cell">
                    <span className="avatar-row"><Slot pixels={pixels} capacity={16} />Alex Morgan</span>
                </td></tr></tbody></table>}
            </Example>
            <Example title="Menu Item" defaultSize={16} capacity={16} hostSelector=".k-menu-item"
                rationale="XS fits the existing menu row; S can work in taller menu variants.">
                {(pixels) => <ul className="k-menu k-menu-vertical"><li className="k-menu-item k-item" role="menuitem">
                    <span className="k-link k-menu-link"><Slot pixels={pixels} capacity={16} />
                        <span className="k-menu-link-text">Alex Morgan</span>
                    </span>
                </li></ul>}
            </Example>
            <Example title="Drawer Item" defaultSize={16} capacity={16} hostSelector=".k-drawer-item"
                rationale="XS respects the tightest Drawer row across themes; S needs a taller variant in Material and Fluent.">
                {(pixels) => <ul className="k-drawer-items"><DrawerItem text="Alex Morgan">
                    <Slot pixels={pixels} capacity={16} />
                </DrawerItem></ul>}
            </Example>
            <Example title="TabStrip Item" defaultSize={16} capacity={16} hostSelector=".k-tabstrip-item"
                rationale="XS fits an individual tab across themes; S enlarges isolated tabs in several themes.">
                {(pixels) => <ul className="k-tabstrip-items"><li className="k-tabstrip-item" role="tab" aria-selected="true">
                    <span className="k-link"><Slot pixels={pixels} capacity={16} />
                        <span className="k-link-text">Alex Morgan</span>
                    </span>
                </li></ul>}
            </Example>
            <Example title="ActionSheet Item" defaultSize={16} capacity={16} hostSelector=".k-actionsheet-item"
                rationale="XS maintains the existing action-row height; larger images require a dedicated taller action.">
                {(pixels) => <div className="k-actionsheet-items"><ActionSheetItem>
                    <span className="k-actionsheet-action"><Slot pixels={pixels} capacity={16} />
                        <span className="k-actionsheet-item-text">Alex Morgan</span>
                    </span>
                </ActionSheetItem></div>}
            </Example>
            <Example title="DropDownList" defaultSize={24} capacity={24} hostSelector=".k-dropdownlist"
                rationale="S fits the default picker across themes; XS is available for compact pickers.">
                {(pixels) => <DropdownList value="Alex Morgan" aria-label="Select teammate"
                    prefix={<Slot pixels={pixels} capacity={24} />} />}
            </Example>
        </div>
    </>
);
