import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar, ToolbarItem } from '../../toolbar';
import { Filter, FilterToolbar, FilterLines, FilterPreview, FilterItem } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <Filter
                showApplyButton={true}
                expressionPreview={
                    <FilterPreview
                        fields={[
                            { name: "bracket", value: "(" },
                            { name: "field", value: "Discontinued" },
                            { name: "criteria", value: "Is equal to" },
                            { name: "value", value: "'False'" },
                            { name: "operator", value: "AND" },
                            { name: "field", value: "Price" },
                            { name: "criteria", value: "Is greater than" },
                            { name: "value", value: "'100,00'" },
                            { name: "operator", value: "AND" },
                            { name: "bracket", value: "(" },
                            { name: "bracket", value: "(" },
                            { name: "field", value: "FirstOrdered" },
                            { name: "criteria", value: "Is before" },
                            { name: "value", value: "'Thursday Jan 21 2021'" },
                            { name: "bracket", value: ")" },
                            { name: "bracket", value: ")" },
                            { name: "bracket", value: ")" },
                        ]}
                    />
                }
            >
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
            </Filter>
        </div>
    </>
);
