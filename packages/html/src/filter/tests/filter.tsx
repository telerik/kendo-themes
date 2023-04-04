import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar, ToolbarItem } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <div id="filter" className="k-widget k-filter">
                <ul className="k-filter-container">
                    <li className="k-filter-group-main">
                        <div className="k-filter-toolbar">
                            <Toolbar focus>
                                <ToolbarItem className="k-filter-toolbar-item">
                                    <ButtonGroup>
                                        <Button selected>And</Button>
                                        <Button>Or</Button>
                                    </ButtonGroup>
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-toolbar-item">
                                    <Button icon="filter-add-expression">Add Expression</Button>
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-toolbar-item">
                                    <Button icon="filter-add-group">Add Group</Button>
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-toolbar-item">
                                    <Button fillMode="flat" icon="close"></Button>
                                </ToolbarItem>
                            </Toolbar>
                        </div>
                        <ul className="k-filter-lines">
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <Toolbar>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                            <DropdownList value="Name" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-operator" focus={true}>
                                            <DropdownList value="Is equal to" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-value">
                                            <Textbox placeholder="James"/>
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </ToolbarItem>
                                    </Toolbar>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <Toolbar>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                            <DropdownList value="Price" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-operator">
                                            <DropdownList value="Is greater than" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-value">
                                            <NumericTextbox placeholder="100,00"/>
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </ToolbarItem>
                                    </Toolbar>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <Toolbar focus>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                            <DropdownList value="Discontinued" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-operator">
                                            <DropdownList value="Is equal to" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-value">
                                            <DropdownList value="False"/>
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </ToolbarItem>
                                    </Toolbar>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <Toolbar>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                            <DropdownList value="First Ordered" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item">
                                            <div className="k-filter-operator">
                                                <DropdownList value="Is before" />
                                            </div>
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item k-filter-value">
                                            <DatePicker placeholder="1/21/2021" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </ToolbarItem>
                                    </Toolbar>
                                </div>
                                <li className="k-filter-item">
                                    <div className="k-filter-toolbar">
                                        <Toolbar>
                                            <ToolbarItem className="k-filter-toolbar-item">
                                                <ButtonGroup>
                                                    <Button selected>And</Button>
                                                    <Button>Or</Button>
                                                </ButtonGroup>
                                            </ToolbarItem>
                                            <ToolbarItem className="k-filter-toolbar-item">
                                                <Button icon="filter-add-expression">Add Expression</Button>
                                            </ToolbarItem>
                                            <ToolbarItem className="k-filter-toolbar-item">
                                                <Button icon="filter-add-group">Add Group</Button>
                                            </ToolbarItem>
                                            <ToolbarItem className="k-filter-toolbar-item">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </ToolbarItem>
                                        </Toolbar>
                                    </div>
                                    <ul className="k-filter-lines">
                                        <li className="k-filter-item">
                                            <div className="k-filter-toolbar">
                                                <Toolbar>
                                                    <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                                        <DropdownList value="Name" />
                                                    </ToolbarItem>
                                                    <ToolbarItem className="k-filter-toolbar-item k-filter-operator">
                                                        <DropdownList value="Is empty" />
                                                    </ToolbarItem>
                                                    <ToolbarItem className="k-filter-toolbar-item">
                                                        <Button fillMode="flat" icon="close"></Button>
                                                    </ToolbarItem>
                                                </Toolbar>
                                            </div>
                                        </li>
                                        <li className="k-filter-item">
                                            <div className="k-filter-toolbar">
                                                <Toolbar>
                                                    <ToolbarItem className="k-filter-toolbar-item k-filter-field">
                                                        <DropdownList value="Price" />
                                                    </ToolbarItem>
                                                    <ToolbarItem className="k-filter-toolbar-item k-filter-operator">
                                                        <DropdownList value="Is not null" />
                                                    </ToolbarItem>
                                                    <ToolbarItem className="k-filter-toolbar-item">
                                                        <Button fillMode="flat" icon="close"></Button>
                                                    </ToolbarItem>
                                                </Toolbar>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="k-filter-preview">
                    <span className="k-filter-preview-bracket">(</span>
                    <span className="k-filter-preview-field">Discontinued</span>
                    <span className="k-filter-preview-criteria"> Is equal to </span>
                    <span className="k-filter-preview-value">&apos;False&apos;</span>
                    <span className="k-filter-preview-operator"> AND </span>
                    <span className="k-filter-preview-field">Price</span>
                    <span className="k-filter-preview-criteria"> Is greater than </span>
                    <span className="k-filter-preview-value">&apos;100,00&apos;</span>
                    <span className="k-filter-preview-operator"> AND </span>
                    <span className="k-filter-preview-bracket">(</span>
                    <span className="k-filter-preview-bracket">(</span>
                    <span className="k-filter-preview-field">FirstOrdered</span>
                    <span className="k-filter-preview-criteria"> Is before </span>
                    <span className="k-filter-preview-value">&apos;Thursday Jan 21 2021&apos;</span>
                    <span className="k-filter-preview-bracket">)</span>
                    <span className="k-filter-preview-bracket">)</span>
                    <span className="k-filter-preview-bracket">)</span>
                </div>
                <Button className="k-filter-apply">Apply</Button>
            </div>
        </div>
    </>
);
