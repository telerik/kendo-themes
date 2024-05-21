import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ChipList, Chip, ChipAction } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';
import { Treeview, TreeviewItem, TreeviewGroup } from '../../treeview';
import { CalculatedField, PivotGrid, PivotGridCell, PivotGridConfigurator, PivotGridConfiguratorButton, PivotGridRow, PivotGridTable, PivotGridTbody } from '..';
import { Form } from '../../form';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-d-flex k-flex-col-reverse k-pos-relative">
                    <PivotGrid
                        style={{ height: "550px", gridTemplateColumns: "150px auto", gridTemplateRows: "242px auto" }}
                        columnHeaders={
                            <PivotGridTable>
                                <colgroup>
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                </colgroup>
                                <PivotGridTbody>
                                    <PivotGridRow columnTotal >
                                        <PivotGridCell as="th" colSpan={9} toggle="up" headerTitle="All Periods" headerRootCell/>
                                        <PivotGridCell as="th" colSpan={1} rowSpan={4} headerTitle="All Periods" headerRootCell headerTotalCell/>
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={6} toggle="up" headerTitle="CY 2010"/>
                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2011"/>
                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2012"/>
                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2013"/>
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} toggle="up" headerTitle="H2 CY 2010"/>
                                        <PivotGridCell as="th" colSpan={5} rowSpan={2} headerTitle="H2 CY 2010"/>
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Q4 CY 2010"/>
                                    </PivotGridRow>
                                    <PivotGridRow columnTotal >
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                        <PivotGridCell as="th" colSpan={4} headerTitle="All Products" toggle="up" headerRootCell />
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" headerRootCell />
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell headerTotalCell />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Accessories" className="k-first" />
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Bikes" />
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Clothing" />
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Components" />
                                    </PivotGridRow>
                                </PivotGridTbody>
                            </PivotGridTable>
                        }

                        rowHeaders={
                            <PivotGridTable>
                                <colgroup>
                                    <col />
                                    <col />
                                </colgroup>
                                <PivotGridTbody>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} rowSpan={9} toggle="up" headerTitle="All Geographies" headerRootCell rowTotalCell />
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Austell" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Biloxi" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Braintree" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Casper" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Clearwater" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Destin" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Euclid" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Everett" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={1} headerTitle="Fort Wayne" />
                                    </PivotGridRow>
                                    <PivotGridRow>
                                        <PivotGridCell as="th" colSpan={2} headerTitle="All Geographies" headerTotalCell />
                                    </PivotGridRow>
                                </PivotGridTbody>
                            </PivotGridTable>
                        }
                    >
                        <PivotGridTable style={{ width: "1200px" }}>
                            <colgroup>
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                                <col width="120" />
                            </colgroup>
                            <PivotGridTbody>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.02" />
                                    <PivotGridCell as="td" colSpan={1} content="$508.12" />
                                    <PivotGridCell as="td" colSpan={1} content="$4.00" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$3682.86" />
                                    <PivotGridCell as="td" colSpan={1} content="$2451.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$2919.53" />
                                    <PivotGridCell as="td" colSpan={1} content="$10567.67" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.52" />
                                    <PivotGridCell as="td" colSpan={1} content="$298.45" />
                                    <PivotGridCell as="td" colSpan={1} content="$7.47" />
                                    <PivotGridCell as="td" colSpan={1} content="$36.25" />
                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                    <PivotGridCell as="td" colSpan={1} content="$1461.20" />
                                    <PivotGridCell as="td" colSpan={1} content="$105.70" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$1911.60" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                    <PivotGridCell as="td" colSpan={1} content="$3.03" />
                                    <PivotGridCell as="td" colSpan={1} content="$1064.62" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.69" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                    <PivotGridCell as="td" colSpan={1} content="$4671.39" />
                                    <PivotGridCell as="td" colSpan={1} content="$6621.86" />
                                    <PivotGridCell as="td" colSpan={1} content="$5156.51" />
                                    <PivotGridCell as="td" colSpan={1} content="$17520.10" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.02" />
                                    <PivotGridCell as="td" colSpan={1} content="$508.12" />
                                    <PivotGridCell as="td" colSpan={1} content="$4.00" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$3682.86" />
                                    <PivotGridCell as="td" colSpan={1} content="$2451.14" />
                                    <PivotGridCell as="td" colSpan={1} content="$2919.53" />
                                    <PivotGridCell as="td" colSpan={1} content="$10567.67" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.52" />
                                    <PivotGridCell as="td" colSpan={1} content="$298.45" />
                                    <PivotGridCell as="td" colSpan={1} content="$7.47" />
                                    <PivotGridCell as="td" colSpan={1} content="$36.25" />
                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                    <PivotGridCell as="td" colSpan={1} content="$1461.20" />
                                    <PivotGridCell as="td" colSpan={1} content="$105.70" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$1911.60" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                    <PivotGridCell as="td" colSpan={1} content="$3.03" />
                                    <PivotGridCell as="td" colSpan={1} content="$1064.62" />
                                    <PivotGridCell as="td" colSpan={1} content="$2.69" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                    <PivotGridCell as="td" colSpan={1} content="$4671.39" />
                                    <PivotGridCell as="td" colSpan={1} content="$6621.86" />
                                    <PivotGridCell as="td" colSpan={1} content="$5156.51" />
                                    <PivotGridCell as="td" colSpan={1} content="$17520.10" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="" />
                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                </PivotGridRow>
                                <PivotGridRow>
                                    <PivotGridCell as="td" colSpan={1} content="$9336.89" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$9687.17" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$7680.72" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$9546.89" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                    <PivotGridCell as="td" colSpan={1} content="$88816.16" totalCell />
                                </PivotGridRow>
                            </PivotGridTbody>
                        </PivotGridTable>
                    </PivotGrid>
                    <PivotGridConfigurator orientation="horizontal" mode="overlay">
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
                                    <CalculatedField />
                                    <CalculatedField />
                                </div>
                            </div>
                        </Form>
                    </PivotGridConfigurator>
                    <PivotGridConfiguratorButton />
                </div>
            </section>
        </div>
    </>
);
