import { ColumnMenu, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";

export const ColumnMenuNormal = (props) => (
    <ColumnMenu
        children={
            <>
                <ColumnMenuItemWrapper>
                    <ColumnMenuItem text="Item 1" icon="sort-asc-small" />
                    <ColumnMenuItem text="Item 2" icon="sort-desc-small" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Expandable item 1" itemIcon="columns" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Expandable item 2" itemIcon="filter" />
                </ColumnMenuItemWrapper>
                <ColumnMenuItemWrapper>
                    <ColumnMenuExpander itemText="Item with icons" itemIcon="arrows-left-right" expanderIcon="window-restore"/>
                </ColumnMenuItemWrapper>
            </>
        }
        {...props}
    >
    </ColumnMenu>
);
