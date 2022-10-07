import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';

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
                            <div className="k-toolbar k-focus">
                                <div className="k-filter-toolbar-item k-toolbar-item">
                                    <ButtonGroup>
                                        <Button selected>And</Button>
                                        <Button>Or</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="k-filter-toolbar-item k-toolbar-item">
                                    <Button icon="filter-add-expression">Add Expression</Button>
                                </div>
                                <div className="k-filter-toolbar-item k-toolbar-item">
                                    <Button icon="filter-add-group">Add Group</Button>
                                </div>
                                <div className="k-filter-toolbar-item k-toolbar-item">
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                        </div>
                        <ul className="k-filter-lines">
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <div className="k-toolbar">
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-field">
                                            <DropdownList value="Name" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-operator k-focus">
                                            <DropdownList value="Is equal to" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-value">
                                            <Textbox placeholder="James"/>
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <div className="k-toolbar">
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-field">
                                            <DropdownList value="Price" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-operator">
                                            <DropdownList value="Is greater than" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-value">
                                            <NumericTextbox placeholder="100,00"/>
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <div className="k-toolbar k-focus">
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-field">
                                            <DropdownList value="Discontinued" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-operator">
                                            <DropdownList value="Is equal to" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-value">
                                            <DropdownList value="False"/>
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="k-filter-item">
                                <div className="k-filter-toolbar">
                                    <div className="k-toolbar">
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-filed">
                                            <DropdownList value="First Ordered" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item">
                                            <div className="k-filter-operator">
                                                <DropdownList value="Is before" />
                                            </div>
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item k-filter-value">
                                            <DatePicker placeholder="1/21/2021" />
                                        </div>
                                        <div className="k-filter-toolbar-item k-toolbar-item">
                                            <Button fillMode="flat" icon="close"></Button>
                                        </div>
                                    </div>
                                </div>
                                <li className="k-filter-item">
                                    <div className="k-filter-toolbar">
                                        <div className="k-toolbar">
                                            <div className="k-filter-toolbar-item k-toolbar-item">
                                                <ButtonGroup>
                                                    <Button selected>And</Button>
                                                    <Button>Or</Button>
                                                </ButtonGroup>
                                            </div>
                                            <div className="k-filter-toolbar-item k-toolbar-item">
                                                <Button icon="filter-add-expression">Add Expression</Button>
                                            </div>
                                            <div className="k-filter-toolbar-item k-toolbar-item">
                                                <Button icon="filter-add-group">Add Group</Button>
                                            </div>
                                            <div className="k-filter-toolbar-item k-toolbar-item">
                                                <Button fillMode="flat" icon="close"></Button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="k-filter-lines">
                                        <li className="k-filter-item">
                                            <div className="k-filter-toolbar">
                                                <div className="k-toolbar">
                                                    <div className="k-filter-toolbar-item k-toolbar-item k-filter-field">
                                                        <DropdownList value="Name" />
                                                    </div>
                                                    <div className="k-filter-toolbar-item k-toolbar-item k-filter-operator">
                                                        <DropdownList value="Is empty" />
                                                    </div>
                                                    <div className="k-filter-toolbar-item k-toolbar-item">
                                                        <Button fillMode="flat" icon="close"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="k-filter-item">
                                            <div className="k-filter-toolbar">
                                                <div className="k-toolbar">
                                                    <div className="k-filter-toolbar-item k-toolbar-item k-filter-field">
                                                        <DropdownList value="Price" />
                                                    </div>
                                                    <div className="k-filter-toolbar-item k-toolbar-item k-filter-operator">
                                                        <DropdownList value="Is not null" />
                                                    </div>
                                                    <div className="k-filter-toolbar-item k-toolbar-item">
                                                        <Button fillMode="flat" icon="close"></Button>
                                                    </div>
                                                </div>
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
