import { Popup } from '../../popup/popup.spec';
import { WindowNormal } from '../../window/templates/window-normal';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { ColumnMenuItem } from '../../column-menu/column-menu-item.spec';
import { ColumnMenuItemWrapper } from '../../column-menu/column-menu-item-wrapper';
import { ColumnMenuExpander } from '../../column-menu/column-menu-expander.spec';
import { ColumnMenuNormal } from '../../column-menu/templates/column-menu-normal';
import { GridWithColumnMenu } from '../../grid/templates/grid-with-column-menu';


const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
        top: -114px;
        left: 254px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
    section .k-window {
        margin-inline-end: 16px;
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
                        <ColumnMenuExpander itemText="Resize column" itemStartIcon="arrows-left-right" expanderIcon="window-restore"/>
                        <ColumnMenuItem text="Autosize all columns" startIcon="display-inline-flex" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>

            <section>
                <WindowNormal title="Column Width" actions={[ 'x' ]} className="k-grid-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField
                            label="Value in px"
                            editor={ <Textbox value="412" /> }
                        >
                        </FormField>
                        <FormField
                            editor={
                                <>
                                    <Checkbox/>
                                    <label className="k-checkbox-label">Autofit to content</label>
                                </>
                            }
                        >
                        </FormField>
                    </FormNormal>
                </WindowNormal>
            </section>
        </div>
    </>
);
