import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal, ColumnList, ColumnListItem } from '../../column-menu';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Column menu items</span>
            <span>Column list items</span>

            <section>
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Item" startIcon="sort-asc-small" />
                        <ColumnMenuItem focus text="Focus" startIcon="sort-asc-small" />
                        <ColumnMenuItem selected text="Selected" startIcon="sort-asc-small" />
                        <ColumnMenuItem focus selected text="Focus selected" startIcon="sort-asc-small" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </section>

            <section>
                <ColumnMenuNormal>
                    <ColumnList>
                        <ColumnListItem label="Item" />
                        <ColumnListItem hover label="Hover" />
                        <ColumnListItem focus label="Focus" />
                        <ColumnListItem disabled label="Disabled" />
                    </ColumnList>
                </ColumnMenuNormal>
            </section>

        </div>
    </>
);
