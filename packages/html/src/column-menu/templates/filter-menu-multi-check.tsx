import { FilterMenu, ColumnMenuMulticheckWrap, ColumnMenuMulticheckItem } from "../../column-menu";
import { Searchbox } from '../../searchbox';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

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
                    <Button themeColor="primary">Apply</Button>
                    <Button>Clear</Button>
                </ActionButtons>
            </>
        }
        {...props}
    >
    </FilterMenu>
);
