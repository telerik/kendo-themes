import { Popup } from '../../popup';
import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
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
                        <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                        <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Group column" icon="group" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Resize column" itemIcon="arrows-left-right" expanderIcon="window-restore"/>
                        <ColumnMenuItem text="Autosize all columns" icon="display-inline-flex" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
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
