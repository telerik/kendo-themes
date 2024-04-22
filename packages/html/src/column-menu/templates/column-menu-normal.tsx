import { ColumnMenu, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";

export const ColumnMenuNormal = (props) => (
    <ColumnMenu
        children={
            <>
                <ColumnMenuItemWrapper>
                    <ColumnMenuItem text="Sort Ascending" icon="sort-asc-small" />
                    <ColumnMenuItem text="Sort Descending" icon="sort-desc-small" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position"/>
                </ColumnMenuItemWrapper>
            </>
        }
        {...props}
    >
    </ColumnMenu>
);
