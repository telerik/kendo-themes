import ReactDOM from 'react-dom/client';
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
                <DropdownTree placeholder="DropdownTree..." />
            </div>
            <div dir="rtl">
                <DropdownTree placeholder="DropdownTree..." />
            </div>

            <div>
                <DropdownTree value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownTree value="Normal" />
            </div>

            <div>
                <DropdownTree value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownTree value="Hover" hover />
            </div>

            <div>
                <DropdownTree value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownTree value="Focus" focus />
            </div>

            <div>
                <DropdownTree value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownTree value="Disabled" disabled />
            </div>

            <div>
                <DropdownTree value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownTree value="Invalid" invalid />
            </div>

            <div>
                <DropdownTree value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTree value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownTree value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownTree value="Loading..." loading />
            </div>

            <div>
                <DropdownTree value="Opened" opened
                    tree={(
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
                    )}
                />
            </div>
            <div dir="rtl">
                <DropdownTree value="Opened" opened
                    tree={(
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
                    )}
                />
            </div>

        </div>
    </>
);
