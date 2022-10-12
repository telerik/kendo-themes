import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ChipList, Chip, ChipAction } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';
import { Treeview, TreeviewItem, TreeviewGroup } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-pivotgrid-configurator-panel { position: static; height: 750px; }

    .k-animation-container,
    .k-popup {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <section>
                <span>Start View Empty</span>
                <div className="k-pivotgrid-configurator">
                    <div className="k-pivotgrid-configurator-panel k-pivotgrid-configurator-vertical k-pivotgrid-configurator-push">
                        <div className="k-pivotgrid-configurator-header">
                            <div className="k-pivotgrid-configurator-header-text">Settings</div>
                        </div>
                        <div className="k-pivotgrid-configurator-content">
                            <form className="k-form k-form-md k-form-horizontal">
                                <div className="k-form-field">
                                    <label className="k-label">Fields</label>
                                    <span className="k-spacer"></span>
                                    <Searchbox placeholder="Search..." />
                                </div>
                                <div className="k-form-field">
                                    <div className="k-select-all">
                                        <Checkbox />
                                        <span>Select all</span>
                                    </div>
                                    <span className="k-spacer"></span>
                                    <span>0 fields selected</span>
                                </div>
                                <div className="k-form-field">
                                    <div className="k-fields-list-wrapper">
                                        <Treeview>
                                            <TreeviewItem showCheckbox hasChildren text="Account" />
                                            <TreeviewItem showCheckbox hasChildren text="Customer" />
                                            <TreeviewItem showCheckbox expanded text="Date">
                                                <TreeviewGroup>
                                                    <TreeviewItem showCheckbox hasChildren text="Date.Calendar" />
                                                    <TreeviewItem showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                        <TreeviewGroup>
                                                            <TreeviewItem showCheckbox hasChildren text="(All)" />
                                                            <TreeviewItem showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                        </TreeviewGroup>
                                                    </TreeviewItem>
                                                </TreeviewGroup>
                                            </TreeviewItem>
                                            <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                            <TreeviewItem showCheckbox hasChildren text="Department" />
                                            <TreeviewItem showCheckbox hasChildren text="Country" />
                                            <TreeviewItem showCheckbox hasChildren text="Region" />
                                        </Treeview>
                                    </div>
                                </div>
                                <div className="k-form-field">
                                    <label className="k-label">Columns</label>
                                </div>
                                <div className="k-settings-description">Select some fields to being setup.</div>
                                <div className="k-form-field">
                                    <label className="k-label">Rows</label>
                                </div>
                                <div className="k-settings-description">Select some fields to being setup.</div>
                                <div className="k-form-field">
                                    <label className="k-label">Filters</label>
                                </div>
                                <div className="k-settings-description">Select some fields to being setup.</div>
                                <div className="k-form-field">
                                    <label className="k-label">Values</label>
                                    <span className="k-spacer"></span>
                                    <Button>Add Custom</Button>
                                </div>
                                <div className="k-settings-description">Select some fields to being setup.</div>
                            </form>
                        </div>
                        <ActionButtons className="k-pivotgrid-configurator-actions" alignment="end">
                            <Button>Cancel</Button>
                            <Button themeColor="primary">Apply</Button>
                        </ActionButtons>
                    </div>
                </div>
            </section>

            <section>
                <span>Start View</span>
                <div className="k-pivotgrid-configurator">
                    <div className="k-pivotgrid-configurator-panel k-pivotgrid-configurator-vertical k-pivotgrid-configurator-push">
                        <div className="k-pivotgrid-configurator-header">
                            <div className="k-pivotgrid-configurator-header-text">Settings</div>
                        </div>
                        <div className="k-pivotgrid-configurator-content">
                            <form className="k-form k-form-md k-form-horizontal">
                                <div className="k-form-field">
                                    <label className="k-label">Fields</label>
                                    <span className="k-spacer"></span>
                                    <Searchbox placeholder="Search..." />
                                </div>
                                <div className="k-form-field">
                                    <div className="k-select-all">
                                        <Checkbox />
                                        <span>Select all</span>
                                    </div>
                                    <span className="k-spacer"></span>
                                    <span>5 fields selected</span>
                                </div>
                                <div className="k-form-field">
                                    <div className="k-fields-list-wrapper">
                                        <Treeview>
                                            <TreeviewItem showCheckbox hasChildren text="Account" />
                                            <TreeviewItem showCheckbox hasChildren text="Customer" />
                                            <TreeviewItem showCheckbox expanded text="Date">
                                                <TreeviewGroup>
                                                    <TreeviewItem showCheckbox hasChildren text="Date.Calendar" />
                                                    <TreeviewItem showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                        <TreeviewGroup>
                                                            <TreeviewItem showCheckbox hasChildren text="(All)" />
                                                            <TreeviewItem showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                        </TreeviewGroup>
                                                    </TreeviewItem>
                                                </TreeviewGroup>
                                            </TreeviewItem>
                                            <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                            <TreeviewItem showCheckbox hasChildren text="Department" />
                                            <TreeviewItem showCheckbox hasChildren text="Country" />
                                            <TreeviewItem showCheckbox hasChildren text="Region" />
                                        </Treeview>
                                    </div>
                                </div>
                                <div className="k-form-field">
                                    <label className="k-label">Columns</label>
                                </div>
                                <ChipList className="k-column-fields">
                                    <Chip
                                        text="Date.Calendar"
                                        actions={
                                            <>
                                                <ChipAction type="more"/>
                                                <ChipAction type="remove"/>
                                            </>
                                        }
                                    />
                                    <Chip
                                        text="Product.Category"
                                        actions={
                                            <>
                                                <ChipAction type="more"/>
                                                <ChipAction type="remove"/>
                                            </>
                                        }
                                    />
                                </ChipList>
                                <div className="k-form-field">
                                    <label className="k-label">Rows</label>
                                </div>
                                <ChipList className="k-row-fields">
                                    <Chip
                                        text="Geography.City"
                                        actions={
                                            <>
                                                <ChipAction type="more"/>
                                                <ChipAction type="remove"/>
                                            </>
                                        }
                                    />
                                </ChipList>
                                <div className="k-form-field">
                                    <label className="k-label">Filters</label>
                                </div>
                                <ChipList className="k-filter-fields">
                                    <Chip
                                        text="Sales Channel.Sales Channel"
                                        actions={
                                            <>
                                                <ChipAction type="more"/>
                                                <ChipAction type="remove"/>
                                            </>
                                        }
                                    />
                                </ChipList>
                                <div className="k-form-field">
                                    <label className="k-label">Values</label>
                                    <span className="k-spacer"></span>
                                    <Button>Add Custom</Button>
                                </div>
                                <div className="k-value-fields">
                                    <div className="k-calculated-field">
                                        <div className="k-calculated-field-header">
                                            <div className="k-calculated-field-header-text">Calculated Field 1</div>
                                            <Button fillMode="flat" icon="edit"></Button>
                                            <span className="k-spacer"></span>
                                            <div className="k-calculated-field-header-actions">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                        <div className="k-calculated-field-content">
                                            <Textbox placeholder="Custom function" />
                                        </div>
                                        <div className="k-calculated-field-actions">
                                            <Icon name="formula-fx" />
                                            <DropdownList value="Custom" />
                                            <span className="k-spacer"></span>
                                            <Icon name="preview" />
                                            <DropdownList value="Default" />
                                        </div>
                                    </div>
                                    <div className="k-calculated-field">
                                        <div className="k-calculated-field-header">
                                            <Textbox
                                                value="Renamed Field"
                                                suffix={
                                                    <Button fillMode="flat" icon="check"></Button>
                                                }
                                            />
                                            <span className="k-spacer"></span>
                                            <div className="k-calculated-field-header-actions">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                        <div className="k-calculated-field-content">
                                            <Textbox
                                                value="=IF(Amount>100, 3%*Amount)"
                                                prefix={
                                                    <Icon name="formula-fx" />
                                                }
                                            />
                                        </div>
                                        <div className="k-calculated-field-actions">
                                            <Icon name="formula-fx" />
                                            <DropdownList value="Custom" />
                                            <span className="k-spacer"></span>
                                            <Icon name="preview" />
                                            <DropdownList value="Default" />
                                        </div>
                                    </div>
                                    <div className="k-calculated-field">
                                        <div className="k-calculated-field-header">
                                            <div className="k-calculated-field-header-text">Date.Calendar</div>
                                            <span className="k-spacer"></span>
                                            <div className="k-calculated-field-header-actions">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                        <div className="k-calculated-field-actions">
                                            <Icon name="sum" />
                                            <DropdownList value="SUM" />
                                            <span className="k-spacer"></span>
                                            <Icon name="preview" />
                                            <DropdownList value="Default" />
                                        </div>
                                    </div>
                                    <div className="k-calculated-field">
                                        <div className="k-calculated-field-header">
                                            <div className="k-calculated-field-header-text">Date.Calendar</div>
                                            <span className="k-spacer"></span>
                                            <div className="k-calculated-field-header-actions">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                        <div className="k-calculated-field-actions">
                                            <Icon name="sum" />
                                            <DropdownList value="SUM" />
                                            <span className="k-spacer"></span>
                                            <Icon name="preview" />
                                            <DropdownList value="Default" />
                                        </div>
                                    </div>
                                    <div className="k-calculated-field">
                                        <div className="k-calculated-field-header">
                                            <div className="k-calculated-field-header-text">Date.Calendar</div>
                                            <span className="k-spacer"></span>
                                            <div className="k-calculated-field-header-actions">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                        <div className="k-calculated-field-actions">
                                            <Icon name="sum" />
                                            <DropdownList value="SUM" />
                                            <span className="k-spacer"></span>
                                            <Icon name="preview" />
                                            <DropdownList value="Default" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <ActionButtons alignment="end">
                            <Button>Cancel</Button>
                            <Button themeColor="primary">Apply</Button>
                        </ActionButtons>
                    </div>
                </div>
            </section>

            <section>
                <span>Renaming a custom calculated field</span>
                <div className="k-calculated-field">
                    <div className="k-calculated-field-header">
                        <div className="k-calculated-field-header-text">Calculated Field 1</div>
                        <Button fillMode="flat" icon="edit"></Button>
                        <span className="k-spacer"></span>
                        <div className="k-calculated-field-header-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-calculated-field-content">
                        <Textbox showClearButton={false} placeholder="Custom function" />
                    </div>
                    <div className="k-calculated-field-actions">
                        <Icon name="formula-fx" />
                        <DropdownList value="SUM" />
                        <span className="k-spacer"></span>
                        <Icon name="preview" />
                        <DropdownList value="Default" />
                    </div>
                </div>
                <br/>
                <div className="k-calculated-field">
                    <div className="k-calculated-field-header">
                        <Textbox
                            showClearButton={false}
                            value="Renamed Field"
                            suffix={
                                <Button fillMode="flat" icon="check"></Button>
                            }
                        />
                        <span className="k-spacer"></span>
                        <div className="k-calculated-field-header-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-calculated-field-content">
                        <Textbox
                            showClearButton={false}
                            value="=IF(Amount>100, 3%*Amount)"
                            prefix={
                                <Icon name="formula-fx" />
                            }
                        />
                    </div>
                    <div className="k-calculated-field-actions">
                        <Icon name="formula-fx" />
                        <DropdownList value="SUM" />
                        <span className="k-spacer"></span>
                        <Icon name="preview" />
                        <DropdownList value="Default" />
                    </div>
                </div>
                <br/>
                <span>Chip variations</span>
                <br/>
                <Chip
                    text="Date.Calendar"
                    actions={
                        <>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
                        </>
                    }
                />
                <br/>
                <br/>
                <Chip
                    text="Date.Calendar"
                    actions={
                        <>
                            <ChipAction type="sort-asc-sm"/>
                            <ChipAction type="filter"/>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
                        </>
                    }
                />
                <br/>
                <br/>
                <Chip
                    text="Date.Calendar"
                    actions={
                        <>
                            <ChipAction type="more"/>
                            <ChipAction type="remove"/>
                        </>
                    }
                />
                <br/>
                <br/>
                <Chip text="Date.Calendar" />
            </section>
        </div>
    </>
);
