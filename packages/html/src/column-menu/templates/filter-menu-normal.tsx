import { FilterMenu } from "../../column-menu";
import { DropdownList } from "../../dropdownlist";
import { Textbox } from "../../textbox";
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

export const FilterMenuNormal = (props) => (
    <FilterMenu
        children={
            <>
                <DropdownList value="Contains" aria-label="First filter operator" />
                <Textbox placeholder="Filter..." aria-label="First filter value" />
                <DropdownList value="And" className="k-filter-and" aria-label="Logic operator" />
                <DropdownList value="Contains" aria-label="Second filter operator" />
                <Textbox placeholder="Filter..." aria-label="Second filter value" />
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
