import { PivotGridConfigurator, PivotGridConfiguratorButton, PivotGridNormal } from "..";
import { ChipList, Chip, ChipAction } from "../../chip";
import { Form } from "../../form";
import { Treeview, TreeviewItem } from "../../treeview";

export const PivotGridWithConfiguratorOpened = (props) => (
    <>
        <PivotGridNormal {...props} />
        <PivotGridConfigurator>
            <Form className="k-form-horizontal">
                <div className="k-form-field">
                    <label className="k-label">Fields</label>
                </div>
                <div className="k-form-field">
                    <div className="k-fields-list-wrapper">
                        <Treeview>
                            <TreeviewItem top checked showCheckbox text="Category" />
                            <TreeviewItem checked showCheckbox text="Product" />
                            <TreeviewItem checked showCheckbox text="Region" />
                            <TreeviewItem checked showCheckbox text="Country" />
                            <TreeviewItem bottom hasChildren text="Measures" />
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
                                <ChipAction type="more"/>
                                <ChipAction type="remove"/>
                            </>
                        }
                    />
                    <Chip
                        text="Product"
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
                        text="Region"
                        actions={
                            <>
                                <ChipAction type="more"/>
                                <ChipAction type="remove"/>
                            </>
                        }
                    />
                    <Chip
                        text="Country"
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
                </div>
                <ChipList className="k-filter-fields">
                    <Chip
                        text="Total"
                        actions={
                            <>
                                <ChipAction type="more"/>
                                <ChipAction type="remove"/>
                            </>
                        }
                    />
                </ChipList>
            </Form>
        </PivotGridConfigurator>
        <PivotGridConfiguratorButton />
    </>
);

export default PivotGridWithConfiguratorOpened;
