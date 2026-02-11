import { PivotGridConfigurator } from "../../pivotgrid/pivotgrid-configurator";
import { PivotGridNormal } from "./pivotgrid-normal";
import { ChipList } from "../../chip/chip-list.spec";
import { Chip } from "../../chip/chip.spec";
import { ChipAction } from "../../chip/chip-action";
import { Form } from "../../form/form.spec";
import { Treeview } from '../../treeview/treeview.spec';
import { TreeviewItem } from '../../treeview/treeview-item.spec';

export const PivotGridWithConfiguratorOpened = ({ formOrientation = "vertical", ...other }) => (
    <PivotGridNormal
        configurator={
            <PivotGridConfigurator>
                <Form orientation={formOrientation}>
                    <div className="k-form-field">
                        <label className="k-label">Fields</label>
                    </div>
                    <div className="k-form-field">
                        <div className="k-fields-list-wrapper">
                            <Treeview>
                                <TreeviewItem checked showCheckbox text="Category" />
                                <TreeviewItem checked showCheckbox text="Product" />
                                <TreeviewItem checked showCheckbox text="Region" />
                                <TreeviewItem checked showCheckbox text="Country" />
                                <TreeviewItem hasChildren text="Measures" />
                            </Treeview>
                        </div>
                    </div>
                    <div className="k-form-field">
                        <label className="k-label">Columns</label>
                    </div>
                    <ChipList className="k-column-fields">
                        <Chip
                            text="Category"
                            actions={
                                <>
                                    <ChipAction type="more" />
                                    <ChipAction type="remove" />
                                </>
                            }
                        />
                        <Chip
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
                        <label className="k-label">Rows</label>
                    </div>
                    <ChipList className="k-row-fields">
                        <Chip
                            text="Region"
                            actions={
                                <>
                                    <ChipAction type="more" />
                                    <ChipAction type="remove" />
                                </>
                            }
                        />
                        <Chip
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
                        <label className="k-label">Values</label>
                    </div>
                    <ChipList className="k-filter-fields">
                        <Chip
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
