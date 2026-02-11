import { CalculatedField } from '../calculated-field';
import { PivotGridConfigurator } from '../pivotgrid-configurator';
import { Button } from '../../button/button.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { Chip } from '../../chip/chip.spec';
import { ChipAction } from '../../chip/chip-action';
import { ChipList } from '../../chip/chip-list.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { Form } from '../../form/form.spec';
import { Icon } from '../../icon/icon.spec';
import { Searchbox } from '../../searchbox/searchbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { Treeview } from '../../treeview/treeview.spec';
import { TreeviewGroup } from '../../treeview/treeview-group';
import { TreeviewItem } from '../../treeview/treeview-item.spec';


const styles = `
    .k-pivotgrid-configurator-panel { position: static; height: 750px; }

    .k-animation-container,
    .k-popup {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <section>
                <span>Start View Empty</span>
                <PivotGridConfigurator>
                    <Form className="k-form-horizontal">
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
                    </Form>
                </PivotGridConfigurator>
            </section>

            <section>
                <span>Start View</span>
                <PivotGridConfigurator>
                    <Form className="k-form-horizontal">
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
                            <CalculatedField
                                headerContent={
                                    <>
                                        <div className="k-calculated-field-header-text">Calculated Field 1</div>
                                        <Button fillMode="flat" icon="pencil"></Button>
                                    </>
                                }
                                fieldActions={
                                    <>
                                        <Icon icon="formula-fx" />
                                        <DropdownList value="Custom" />
                                        <span className="k-spacer"></span>
                                        <Icon icon="eye" />
                                        <DropdownList value="Default" />
                                    </>
                                }
                            >
                                <Textbox placeholder="Custom function" />
                            </CalculatedField>
                            <CalculatedField
                                headerContent={
                                    <Textbox
                                        value="Renamed Field"
                                        suffix={
                                            <Button fillMode="flat" icon="check"></Button>
                                        }
                                    />
                                }
                                fieldActions={
                                    <>
                                        <Icon icon="formula-fx" />
                                        <DropdownList value="Custom" />
                                        <span className="k-spacer"></span>
                                        <Icon icon="eye" />
                                        <DropdownList value="Default" />
                                    </>
                                }
                            >
                                <Textbox
                                    value="=IF(Amount>100, 3%*Amount)"
                                    prefix={
                                        <Icon icon="formula-fx" />
                                    }
                                />
                            </CalculatedField>
                            <CalculatedField />
                            <CalculatedField />
                            <CalculatedField />
                        </div>
                    </Form>
                </PivotGridConfigurator>
            </section>

            <section>
                <span>Renaming a custom calculated field</span>
                <CalculatedField
                    headerContent={
                        <>
                            <div className="k-calculated-field-header-text">Calculated Field 1</div>
                            <Button fillMode="flat" icon="pencil"></Button>
                        </>
                    }
                    fieldActions={
                        <>
                            <Icon icon="formula-fx" />
                            <DropdownList value="SUM" />
                            <span className="k-spacer"></span>
                            <Icon icon="eye" />
                            <DropdownList value="Default" />
                        </>
                    }
                >
                    <Textbox showClearButton={false} placeholder="Custom function" />
                </CalculatedField>
                <br/>
                <CalculatedField
                    headerContent={
                        <Textbox
                            showClearButton={false}
                            value="Renamed Field"
                            suffix={
                                <Button fillMode="flat" icon="check"></Button>
                            }
                        />
                    }
                    fieldActions={
                        <>
                            <Icon icon="formula-fx" />
                            <DropdownList value="SUM" />
                            <span className="k-spacer"></span>
                            <Icon icon="eye" />
                            <DropdownList value="Default" />
                        </>
                    }
                >
                    <Textbox
                        showClearButton={false}
                        value="=IF(Amount>100, 3%*Amount)"
                        prefix={
                            <Icon icon="formula-fx" />
                        }
                    />
                </CalculatedField>
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
                            <ChipAction type="sort-asc-small"/>
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
