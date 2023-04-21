import ReactDOM from 'react-dom/client';
import { Chip, ChipAction } from '../../chip';
import { MultiSelectTree } from '..';
import { Checkbox } from '../../checkbox';
import { Textbox } from '../../textbox';
import { Icon } from '../../icon';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelectTree</span>
            <span>MultiSelectTree RTL</span>

            <div>Opened</div>
            <div>
                <MultiSelectTree opened
                    tags={(
                        <>
                            <Chip text="Furniture" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                    popup={(
                        <>
                            <div className="k-list-filter">
                                <Textbox
                                    prefix={
                                        <>
                                            <Icon name="search" />
                                        </>
                                    }
                                />
                            </div>
                            <div className="k-check-all">
                                <Checkbox/>
                                <span className="k-checkbox-label">
                                    Check all
                                </span>
                            </div>
                            <Treeview>
                                <TreeviewItem text="Furniture" showCheckbox checked>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 1" showCheckbox />
                                        <TreeviewItem text="Child 2" showCheckbox />
                                        <TreeviewItem text="Child 3" showCheckbox />
                                    </TreeviewGroup>
                                </TreeviewItem>
                                <TreeviewItem text="Decor" showCheckbox>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 1" showCheckbox />
                                        <TreeviewItem text="Child 2" showCheckbox />
                                        <TreeviewItem text="Child 3" showCheckbox />
                                    </TreeviewGroup>
                                </TreeviewItem>
                            </Treeview>
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree opened
                    tags={(
                        <>
                            <Chip text="Furniture" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                    popup={(
                        <>
                            <div className="k-list-filter">
                                <Textbox
                                    prefix={
                                        <>
                                            <Icon name="search" />
                                        </>
                                    }
                                />
                            </div>
                            <div className="k-check-all">
                                <Checkbox/>
                                <span className="k-checkbox-label">
                                    Check all
                                </span>
                            </div>
                            <Treeview>
                                <TreeviewItem text="Furniture" showCheckbox checked>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 1" showCheckbox />
                                        <TreeviewItem text="Child 2" showCheckbox />
                                        <TreeviewItem text="Child 3" showCheckbox />
                                    </TreeviewGroup>
                                </TreeviewItem>
                                <TreeviewItem text="Decor" showCheckbox>
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 1" showCheckbox />
                                        <TreeviewItem text="Child 2" showCheckbox />
                                        <TreeviewItem text="Child 3" showCheckbox />
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
