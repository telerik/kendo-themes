import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal } from '../../column-menu';
import { GridWithColumnMenu } from '../../grid';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
        top: -114px;
        left: 254px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <section>
                <GridWithColumnMenu className="k-grid-no-scrollbar">
                </GridWithColumnMenu>
            </section>

            <Popup className="k-grid-columnmenu-popup">
                <ColumnMenuNormal>
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
                        <ColumnMenuItem text="Group column" startIcon="group" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Autosize this column" startIcon="max-width" />
                        <ColumnMenuItem text="Autosize all columns" startIcon="display-inline-flex" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" expanded={true} itemContent={
                            <>
                                <div className="k-column-list-wrapper">
                                    <div className="k-column-list" style={{ maxHeight: "260px", overflowY: "hidden" }}>
                                        <div className="k-column-list-item">
                                            <Icon icon="lock" />Lock column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unlock" />Unlock column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="stick" />Stick column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unstick" />Unstick column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-left" />Move previous
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="caret-alt-right" />Move next
                                        </div>
                                    </div>
                                </div>
                            </>
                        }/>
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>

        </div>
    </>
);
