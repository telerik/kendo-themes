import { ColumnMenu, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";

export const ColumnMenuNormal = (props) => (
    <ColumnMenu
        children={
            <>
                <ColumnMenuItemWrapper>
                    <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                    <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position"/>
                </ColumnMenuItemWrapper>
            </>
        }
        {...props}
    >
    </ColumnMenu>
);
