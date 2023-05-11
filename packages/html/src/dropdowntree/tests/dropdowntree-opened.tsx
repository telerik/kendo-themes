import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';
import { DropdownTree } from '../../dropdowntree';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownTree</span>
            <span>DropdownTree RTL</span>

            <div>
                <DropdownTree value="Opened" opened
                    popup={(
                        <>
                            <div className="k-check-all">
                                <Checkbox />
                                <span className="k-checkbox-label">
                                    Check all
                                </span>
                            </div>
                            <Treeview>
                                <TreeviewItem text="Root 1" />
                                <TreeviewItem text="Root 2" expanded>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 2.1" expanded>
                                            <TreeviewGroup>
                                                <TreeviewItem text="Child 2.1.1" />
                                            </TreeviewGroup>
                                        </TreeviewItem>
                                        <TreeviewItem text="Child 2.2" />
                                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
                                    </TreeviewGroup>
                                </TreeviewItem>
                            </Treeview>
                        </>
                    )}
                />
            </div>
            <div>
                <DropdownTree value="Opened" opened dir="rtl"
                    popup={(
                        <>
                            <div className="k-check-all">
                                <Checkbox />
                                <span className="k-checkbox-label">
                                    Check all
                                </span>
                            </div>
                            <Treeview dir="rtl">
                                <TreeviewItem text="Root 1" />
                                <TreeviewItem text="Root 2" expanded>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 2.1" expanded>
                                            <TreeviewGroup>
                                                <TreeviewItem text="Child 2.1.1" />
                                            </TreeviewGroup>
                                        </TreeviewItem>
                                        <TreeviewItem text="Child 2.2" />
                                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
                                    </TreeviewGroup>
                                </TreeviewItem>
                            </Treeview>
                        </>
                    )}
                />
            </div>

        </div>
    </>
);
