import { FilterMenu } from "../../column-menu/filter-menu.spec";
import { ColumnMenuMulticheckWrap } from "../../column-menu/column-menu-multicheck-wrap";
import { ColumnMenuMulticheckItem } from "../../column-menu/column-menu-multicheck-item";
import { Searchbox } from '../../searchbox/searchbox.spec';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';

export const FilterMenuMultiCheck = (props) => (
    <FilterMenu
        children={
            <>
                <Searchbox placeholder="Search..." />
                <ColumnMenuMulticheckWrap>
                    <ColumnMenuMulticheckItem text="Select All" className="k-check-all-wrap" />
                    <ColumnMenuMulticheckItem text="Column 1" />
                    <ColumnMenuMulticheckItem text="Column 2" />
                    <ColumnMenuMulticheckItem text="Column 3" />
                    <ColumnMenuMulticheckItem text="Column 4 Column 4 Column 4 Column 4 Column 4 Column 4 Column 4 Column 4" />
                </ColumnMenuMulticheckWrap>
                <div className="k-filter-selected-items">0 selected items</div>
                <ActionButtons alignment="stretched">
                    <Button icon="filter" themeColor="primary">Filter</Button>
                    <Button icon="filter-clear">Clear</Button>
                </ActionButtons>
            </>
        }
        {...props}
    >
    </FilterMenu>
);
