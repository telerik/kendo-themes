import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { Toolbar } from '../../toolbar/toolbar.spec';
import { ToolbarItem } from '../../toolbar/toolbar-item.spec';
import { FilterNormal } from '../templates/filter-normal';
import { FilterToolbar } from '../filter-toolbar';
import { FilterLines } from '../filter-lines';
import { FilterItem } from '../filter-item';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <FilterNormal>
                <FilterToolbar>
                    <Toolbar focus>
                        <ButtonGroup>
                            <Button className="k-group-start" selected>And</Button>
                            <Button className="k-group-end">Or</Button>
                        </ButtonGroup>
                        <Button icon="filter-add-expression">Add Expression</Button>
                        <Button icon="filter-add-group">Add Group</Button>
                        <Button fillMode="flat" icon="x"></Button>
                    </Toolbar>
                </FilterToolbar>
                <FilterLines>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar>
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList value="Name" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator" focus={true}>
                                    <DropdownList value="Is equal to" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <Textbox placeholder="James"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar>
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList value="Price" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator">
                                    <DropdownList value="Is greater than" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <NumericTextbox placeholder="100,00"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar focus>
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList value="Discontinued" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <DropdownList value="Is false"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar>
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList value="First Ordered" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator">
                                    <DropdownList value="Is before" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <DatePicker placeholder="1/21/2021" />
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar>
                                <ButtonGroup>
                                    <Button className="k-group-start" selected>And</Button>
                                    <Button className="k-group-end">Or</Button>
                                </ButtonGroup>
                                <Button icon="filter-add-expression">Add Expression</Button>
                                <Button icon="filter-add-group">Add Group</Button>
                                <Button fillMode="flat" icon="x"></Button>
                            </Toolbar>
                        </FilterToolbar>
                        <FilterLines>
                            <FilterItem>
                                <FilterToolbar>
                                    <Toolbar>
                                        <ToolbarItem className="k-filter-field">
                                            <DropdownList value="Name" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-operator">
                                            <DropdownList value="Is empty" />
                                        </ToolbarItem>
                                        <Button fillMode="flat" icon="x"></Button>
                                    </Toolbar>
                                </FilterToolbar>
                            </FilterItem>
                            <FilterItem>
                                <FilterToolbar>
                                    <Toolbar>
                                        <ToolbarItem className="k-filter-field">
                                            <DropdownList value="Price" />
                                        </ToolbarItem>
                                        <ToolbarItem className=" k-filter-operator">
                                            <DropdownList value="Is not null" />
                                        </ToolbarItem>
                                        <Button fillMode="flat" icon="x"></Button>
                                    </Toolbar>
                                </FilterToolbar>
                            </FilterItem>
                        </FilterLines>
                    </FilterItem>
                </FilterLines>
            </FilterNormal>
        </div>
    </>
);
