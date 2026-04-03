import { PivotGridConfigurator, PivotGridNormal } from "..";
import { ChipList, Chip, ChipAction } from "../../chip";
import { Button } from "../../button";
import { Form } from "../../form";
import { Treeview, TreeviewItem } from "../../treeview";
import { nextId } from "../../misc";

export const PivotGridWithConfiguratorDisabledActions = ({ formOrientation = "vertical", ...other }) => {
    const headerId = nextId('pivotgrid-configurator-header');
    const fieldsLabelId = nextId('pivotgrid-label');
    const columnsLabelId = nextId('pivotgrid-label');
    const rowsLabelId = nextId('pivotgrid-label');
    const valuesLabelId = nextId('pivotgrid-label');

    const actionButtons = (
        <>
            <Button>Cancel</Button>
            <Button themeColor="primary" ariaDisabled>Apply</Button>
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
                                    <TreeviewItem showCheckbox text="Region" />
                                    <TreeviewItem showCheckbox text="Country" />
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
                        <div className="k-settings-description">Select some fields to begin setup.</div>
                        <div className="k-form-field">
                            <label className="k-label" id={valuesLabelId}>Values</label>
                        </div>
                        <div className="k-settings-description">Select some fields to begin setup.</div>
                    </Form>
                </PivotGridConfigurator>
            }
            configuratorDisplay="opened"
            {...other}
        />
    );
};
