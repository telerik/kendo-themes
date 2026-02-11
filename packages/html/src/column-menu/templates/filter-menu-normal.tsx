import { FilterMenu } from "../../column-menu/filter-menu.spec";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";
import { Textbox } from "../../textbox/textbox.spec";
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';

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
