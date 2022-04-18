import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
        width: 250px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>LTR</span>
            <span className="k-rtl">RTL</span>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-popup-dropdowntree">
                        <div className="k-check-all">
                            <Checkbox/>
                            <span className="k-checkbox-label">
                                Check all
                            </span>
                        </div>
                        <Treeview>
                            <TreeviewItem text="Furniture" showCheckbox>
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
                    </Popup>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-popup-dropdowntree">
                        <div className="k-check-all">
                            <Checkbox/>
                            <span className="k-checkbox-label">
                                Check all
                            </span>
                        </div>
                        <Treeview>
                            <TreeviewItem text="Furniture" showCheckbox>
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
                    </Popup>
                </div>
            </section>

        </div>
    </>
);
