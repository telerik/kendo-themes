import { Chip, ChipAction, ChipList } from '../../chip';
import { Treeview, TreeviewItem } from '../../treeview';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-pivotgrid-configurator-panel kendo-jquery">
                    <div className="k-pivotgrid-configurator">
                        <div className="k-pivotgrid-configurator-content">

                            <div className="k-pivotgrid-fields k-pivotgrid-configurator-section">
                                <strong>Fields</strong>
                                <div className="k-fields-list-wrapper">
                                    <Treeview>
                                        <TreeviewItem top hasChildren showIcon icon="arrows-axes" text="Axis" />
                                        <TreeviewItem hasChildren showIcon icon="sum" text="Sum" />
                                        <TreeviewItem bottom hasChildren showIcon icon="caret-alt-expand" text="KPI" />
                                    </Treeview>
                                </div>
                            </div>

                            <div className="k-pivotgrid-targets">
                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Columns</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Column 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Column 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Column 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>

                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Rows</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Row 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Row 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Row 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>

                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Measures</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Measure 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Measure 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Measure 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-pivotgrid-configurator-panel kendo-jquery">
                    <div className="k-pivotgrid-configurator">
                        <div className="k-pivotgrid-configurator-content">

                            <div className="k-pivotgrid-fields k-pivotgrid-configurator-section">
                                <strong>Fields</strong>
                                <div className="k-fields-list-wrapper">
                                    <Treeview dir="rtl">
                                        <TreeviewItem top hasChildren showIcon icon="arrows-axes" text="Axis" />
                                        <TreeviewItem hasChildren showIcon icon="sum" text="Sum" />
                                        <TreeviewItem bottom hasChildren showIcon icon="caret-alt-expand" text="KPI" />
                                    </Treeview>
                                </div>
                            </div>

                            <div className="k-pivotgrid-targets">
                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Columns</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Column 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Column 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Column 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>

                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Rows</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Row 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Row 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Row 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>

                                <div className="k-pivotgrid-target k-pivotgrid-configurator-section">
                                    <strong>Measures</strong>
                                    <div className="k-pivotgrid-target-wrap">
                                        <ChipList className="k-column-fields">
                                            <Chip
                                                text="Measure 1"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Measure 2"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                            <Chip
                                                text="Measure 3"
                                                actions={
                                                    <>
                                                        <ChipAction type="more"/>
                                                        <ChipAction type="remove"/>
                                                    </>
                                                }
                                            />
                                        </ChipList>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
