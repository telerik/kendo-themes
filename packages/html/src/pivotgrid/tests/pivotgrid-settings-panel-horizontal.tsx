import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ChipList, Chip, ChipAction } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Form } from '../../form';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';
import { Treeview, TreeviewItem, TreeviewGroup } from '../../treeview';
import { CalculatedField, PivotGridConfigurator } from '..';


const styles = `
    #test-area {
        max-width: 1600px;
    }
    .k-pivotgrid-configurator { position: static; }

    .k-animation-container,
    .k-popup {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <span>Start View Empty</span>
                <PivotGridConfigurator orientation="horizontal">
                    <Form className="k-form-horizontal">
                        <div className="k-form-field-wrapper">
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
                                        <TreeviewItem top showCheckbox hasChildren text="Account" />
                                        <TreeviewItem showCheckbox hasChildren text="Customer" />
                                        <TreeviewItem showCheckbox expanded text="Date">
                                            <TreeviewGroup>
                                                <TreeviewItem top showCheckbox hasChildren text="Date.Calendar" />
                                                <TreeviewItem bottom showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                    <TreeviewGroup>
                                                        <TreeviewItem top showCheckbox hasChildren text="(All)" />
                                                        <TreeviewItem bottom showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                    </TreeviewGroup>
                                                </TreeviewItem>
                                            </TreeviewGroup>
                                        </TreeviewItem>
                                        <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                        <TreeviewItem showCheckbox hasChildren text="Department" />
                                        <TreeviewItem showCheckbox hasChildren text="Country" />
                                        <TreeviewItem bottom showCheckbox hasChildren text="Region" />
                                    </Treeview>
                                </div>
                            </div>
                        </div>
                        <div className="k-form-field-wrapper">
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
                        </div>
                        <div className="k-form-field-wrapper">
                            <div className="k-form-field">
                                <label className="k-label">Values</label>
                                <span className="k-spacer"></span>
                                <Button>Add Custom</Button>
                            </div>
                            <div className="k-settings-description">Select some fields to being setup.</div>
                        </div>
                    </Form>
                </PivotGridConfigurator>
            </section>

            <section>
                <span>Start View</span>
                <PivotGridConfigurator orientation="horizontal">
                    <Form className="k-form-horizontal">
                        <div className="k-form-field-wrapper">
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
                                        <TreeviewItem top showCheckbox hasChildren text="Account" />
                                        <TreeviewItem showCheckbox hasChildren text="Customer" />
                                        <TreeviewItem showCheckbox expanded text="Date">
                                            <TreeviewGroup>
                                                <TreeviewItem top showCheckbox hasChildren text="Date.Calendar" />
                                                <TreeviewItem bottom showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                    <TreeviewGroup>
                                                        <TreeviewItem top showCheckbox hasChildren text="(All)" />
                                                        <TreeviewItem bottom showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                    </TreeviewGroup>
                                                </TreeviewItem>
                                            </TreeviewGroup>
                                        </TreeviewItem>
                                        <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                        <TreeviewItem showCheckbox hasChildren text="Department" />
                                        <TreeviewItem showCheckbox hasChildren text="Country" />
                                        <TreeviewItem bottom showCheckbox hasChildren text="Region" />
                                    </Treeview>
                                </div>
                            </div>
                        </div>
                        <div className="k-form-field-wrapper">
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
                                <Chip
                                    text="MyField.Name"
                                    actions={
                                        <>
                                            <ChipAction type="more"/>
                                            <ChipAction type="remove"/>
                                        </>
                                    }
                                />
                                <Chip
                                    text="MyField.MyFieldWithALongName"
                                    actions={
                                        <>
                                            <ChipAction type="more"/>
                                            <ChipAction type="remove"/>
                                        </>
                                    }
                                />
                                <Chip
                                    text="MyField.Name"
                                    actions={
                                        <>
                                            <ChipAction type="more"/>
                                            <ChipAction type="remove"/>
                                        </>
                                    }
                                />
                                <Chip
                                    text="MyField.Name"
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
                        </div>
                        <div className="k-form-field-wrapper">
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
                                    <Textbox showClearButton={false} placeholder="Custom function" />
                                </CalculatedField>
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
                                            <DropdownList value="Custom" />
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
                                <CalculatedField />
                            </div>
                        </div>
                    </Form>
                </PivotGridConfigurator>
            </section>
        </div>
    </>
);
