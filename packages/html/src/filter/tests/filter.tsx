import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar, ToolbarItem } from '../../toolbar';
import { FilterNormal, FilterToolbar, FilterLines, FilterItem } from '../../filter';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <FilterNormal>
                <FilterToolbar>
                    <Toolbar focus aria-label="Filter group toolbar">
                        <ButtonGroup>
                            <Button className="k-group-start" selected>And</Button>
                            <Button className="k-group-end">Or</Button>
                        </ButtonGroup>
                        <Button icon="filter-add-expression">Add Expression</Button>
                        <Button icon="filter-add-group">Add Group</Button>
                        <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                    </Toolbar>
                </FilterToolbar>
                <FilterLines>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar aria-label="Filter group toolbar">
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList aria-label="Field" value="Name" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator" focus={true}>
                                    <DropdownList aria-label="Operator" value="Is equal to" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <Textbox placeholder="James"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar aria-label="Filter group toolbar">
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList aria-label="Field" value="Price" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator">
                                    <DropdownList aria-label="Operator" value="Is greater than" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <NumericTextbox placeholder="100,00"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar focus aria-label="Filter group toolbar">
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList aria-label="Field" value="Discontinued" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <DropdownList aria-label="Value" value="Is false"/>
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar aria-label="Filter group toolbar">
                                <ToolbarItem className="k-filter-field">
                                    <DropdownList aria-label="Field" value="First Ordered" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-operator">
                                    <DropdownList aria-label="Operator" value="Is before" />
                                </ToolbarItem>
                                <ToolbarItem className="k-filter-value">
                                    <DatePicker placeholder="1/21/2021" />
                                </ToolbarItem>
                                <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                            </Toolbar>
                        </FilterToolbar>
                    </FilterItem>
                    <FilterItem>
                        <FilterToolbar>
                            <Toolbar aria-label="Filter group toolbar">
                                <ButtonGroup>
                                    <Button className="k-group-start" selected>And</Button>
                                    <Button className="k-group-end">Or</Button>
                                </ButtonGroup>
                                <Button icon="filter-add-expression">Add Expression</Button>
                                <Button icon="filter-add-group">Add Group</Button>
                                <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                            </Toolbar>
                        </FilterToolbar>
                        <FilterLines>
                            <FilterItem>
                                <FilterToolbar>
                                    <Toolbar aria-label="Filter group toolbar">
                                        <ToolbarItem className="k-filter-field">
                                            <DropdownList aria-label="Field" value="Name" />
                                        </ToolbarItem>
                                        <ToolbarItem className="k-filter-operator">
                                            <DropdownList aria-label="Operator" value="Is empty" />
                                        </ToolbarItem>
                                        <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
                                    </Toolbar>
                                </FilterToolbar>
                            </FilterItem>
                            <FilterItem>
                                <FilterToolbar>
                                    <Toolbar aria-label="Filter group toolbar">
                                        <ToolbarItem className="k-filter-field">
                                            <DropdownList aria-label="Field" value="Price" />
                                        </ToolbarItem>
                                        <ToolbarItem className=" k-filter-operator">
                                            <DropdownList aria-label="Operator" value="Is not null" />
                                        </ToolbarItem>
                                        <Button fillMode="flat" icon="x" aria-label="Remove filter"></Button>
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
