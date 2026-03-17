import { ColumnMenu, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, ColumnList, ColumnListItem } from "../../column-menu";

export const ColumnMenuNormal = (props) => (
    <ColumnMenu
        children={
            <>
                <ColumnMenuItemWrapper>
                    <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                    <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" expanded
                        itemContent={
                            <ColumnList aria-label="Columns">
                                <ColumnListItem label="Column 1" checked focus />
                                <ColumnListItem label="Column 2" checked />
                                <ColumnListItem label="Column 3" />
                            </ColumnList>
                        }
                    />
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
