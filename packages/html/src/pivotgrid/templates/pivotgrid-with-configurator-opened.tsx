import { PivotGridConfigurator, PivotGridNormal } from "..";
import { ChipList, Chip, ChipAction } from "../../chip";
import { Button } from "../../button";
import { Form } from "../../form";
import { Treeview, TreeviewItem } from "../../treeview";
import { nextId } from "../../misc";

export const PivotGridWithConfiguratorOpened = ({ formOrientation = "vertical", ...other }) => {
    const headerId = nextId('pivotgrid-configurator-header');
    const fieldsLabelId = nextId('pivotgrid-label');
    const columnsLabelId = nextId('pivotgrid-label');
    const rowsLabelId = nextId('pivotgrid-label');
    const valuesLabelId = nextId('pivotgrid-label');

    const actionButtons = (
        <>
            <Button>Cancel</Button>
            <Button themeColor="primary">Apply</Button>
        </>
    );

    return (
        <PivotGridNormal
            configurator={
                <PivotGridConfigurator headerId={headerId} actionButtons={actionButtons}>
                    <Form orientation={formOrientation}>
                        <div className="k-form-field">
                            <label className="k-label" id={fieldsLabelId}>Fields</label>
                        </div>
                        <div className="k-form-field">
                            <div className="k-fields-list-wrapper">
                                <Treeview aria-labelledby={`${headerId} ${fieldsLabelId}`}>
                                    <TreeviewItem checked showCheckbox text="Category" />
                                    <TreeviewItem checked showCheckbox text="Product" />
                                    <TreeviewItem checked showCheckbox text="Region" />
                                    <TreeviewItem checked showCheckbox text="Country" />
                                    <TreeviewItem hasChildren text="Measures" />
                                </Treeview>
                            </div>
                        </div>
                        <div className="k-form-field">
                            <label className="k-label" id={columnsLabelId}>Columns</label>
                        </div>
                        <ChipList className="k-column-fields" aria-labelledby={`${headerId} ${columnsLabelId}`}>
                            <Chip
                                role="option"
                                text="Category"
                                actions={
                                    <>
                                        <ChipAction type="more" />
                                        <ChipAction type="remove" />
                                    </>
                                }
                            />
                            <Chip
                                role="option"
                                text="Product"
                                actions={
                                    <>
                                        <ChipAction type="more" />
                                        <ChipAction type="remove" />
                                    </>
                                }
                            />
                        </ChipList>
                        <div className="k-form-field">
                            <label className="k-label" id={rowsLabelId}>Rows</label>
                        </div>
                        <ChipList className="k-row-fields" aria-labelledby={`${headerId} ${rowsLabelId}`}>
                            <Chip
                                role="option"
                                text="Region"
                                actions={
                                    <>
                                        <ChipAction type="more" />
                                        <ChipAction type="remove" />
                                    </>
                                }
                            />
                            <Chip
                                role="option"
                                text="Country"
                                actions={
                                    <>
                                        <ChipAction type="more" />
                                        <ChipAction type="remove" />
                                    </>
                                }
                            />
                        </ChipList>
                        <div className="k-form-field">
                            <label className="k-label" id={valuesLabelId}>Values</label>
                        </div>
                        <ChipList className="k-filter-fields" aria-labelledby={`${headerId} ${valuesLabelId}`}>
                            <Chip
                                role="option"
                                text="Total"
                                actions={
                                    <>
                                        <ChipAction type="more" />
                                        <ChipAction type="remove" />
                                    </>
                                }
                            />
                        </ChipList>
                    </Form>
                </PivotGridConfigurator>
            }
            configuratorDisplay="opened"
            {...other}
        />
    );
};
