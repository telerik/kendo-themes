import { Treeview, TreeviewItem, TreeviewGroup } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>states</span>
            <span>states (rtl)</span>
            <span>hierarchy</span>
            <span>hierarchy (rtl)</span>

            <section>
                <Treeview>
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hover />
                    <TreeviewItem text="Focus" focus/>
                    <TreeviewItem text="Selected" selected/>
                    <TreeviewItem text="Selected focus" selected focus/>
                    <TreeviewItem text="Disabled" disabled/>
                    <TreeviewItem text="Disabled focus" disabled focus/>
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..."/>
                </Treeview>
            </section>
            <section className="k-rtl">
                <Treeview>
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hover />
                    <TreeviewItem text="Focus" focus/>
                    <TreeviewItem text="Selected" selected/>
                    <TreeviewItem text="Selected focus" selected focus/>
                    <TreeviewItem text="Disabled" disabled/>
                    <TreeviewItem text="Disabled focus" disabled focus/>
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." hover />
                </Treeview>
            </section>
            <section>
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" expanded>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.1" />
                            <TreeviewItem text="Child 2.2">
                                <TreeviewGroup>
                                    <TreeviewItem text="Child 2.2.1" />
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem text="Child 2.3" />
                            <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3">
                        <TreeviewGroup>
                            <TreeviewItem text="Child 3.1" />
                            <TreeviewItem text="Child 3.2" />
                            <TreeviewItem text="Child 3.3" />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </section>
            <section className="k-rtl">
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" expanded>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.1" />
                            <TreeviewItem text="Child 2.2">
                                <TreeviewGroup>
                                    <TreeviewItem text="Child 2.2.1" />
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem text="Child 2.3" />
                            <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." hover focus />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3">
                        <TreeviewGroup>
                            <TreeviewItem text="Child 3.1" />
                            <TreeviewItem text="Child 3.2" />
                            <TreeviewItem text="Child 3.3" />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </section>


            <span>icons</span>
            <span>icons (rtl)</span>
            <span>checkboxes</span>
            <span>checkboxes (rtl)</span>

            <section>
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" showIcon icon="folder" expanded>
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 2.1"/>
                            <TreeviewItem showIcon icon="folder" text="Child 2.2">
                                <TreeviewGroup>
                                    <TreeviewItem showIcon icon="folder" text="Child 2.2.1"/>
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem showIcon icon="folder" text="Child 2.3" />
                            <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3" showIcon icon="folder">
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 3.1" />
                            <TreeviewItem showIcon icon="folder" text="Child 3.2" />
                            <TreeviewItem showIcon icon="folder" text="Child 3.3" />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </section>
            <section className="k-rtl">
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" showIcon icon="folder" expanded>
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 2.1"/>
                            <TreeviewItem showIcon icon="folder" text="Child 2.2">
                                <TreeviewGroup>
                                    <TreeviewItem showIcon icon="folder" text="Child 2.2.1"/>
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem showIcon icon="folder" text="Child 2.3" />
                            <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3" showIcon icon="folder">
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 3.1" />
                            <TreeviewItem showIcon icon="folder" text="Child 3.2" />
                            <TreeviewItem showIcon icon="folder" text="Child 3.3" />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </section>

            <section>
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" showCheckbox expanded checked>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.1" showCheckbox checked />
                            <TreeviewItem text="Child 2.2" showCheckbox disabled>
                                <TreeviewGroup>
                                    <TreeviewItem text="Child 2.2.1" />
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem text="Child 2.3" showCheckbox />
                            <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3" showCheckbox>
                        <TreeviewItem text="Child 3.1" />
                        <TreeviewItem text="Child 3.2" />
                        <TreeviewItem text="Child 3.3" />
                    </TreeviewItem>
                </Treeview>
            </section>
            <section className="k-rtl">
                <Treeview>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" showCheckbox expanded checked>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.1" showCheckbox checked />
                            <TreeviewItem text="Child 2.2" showCheckbox disabled >
                                <TreeviewGroup>
                                    <TreeviewItem text="Child 2.2.1" />
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem text="Child 2.3" showCheckbox />
                            <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Root 3" showCheckbox>
                        <TreeviewItem text="Child 3.1" />
                        <TreeviewItem text="Child 3.2" />
                        <TreeviewItem text="Child 3.3" />
                    </TreeviewItem>
                </Treeview>
            </section>

        </div>
    </>
);
