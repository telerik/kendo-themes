import { FilterMenu } from "../../column-menu";
import { DropdownList } from "../../dropdownlist";
import { Textbox } from "../../textbox";
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

export const FilterMenuNormal = (props) => (
    <FilterMenu
        children={
            <>
                <DropdownList value="Contains" />
                <Textbox placeholder="Filter..." />
                <DropdownList value="And" className="k-filter-and" />
                <DropdownList value="Contains" />
                <Textbox placeholder="Filter..." />
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
