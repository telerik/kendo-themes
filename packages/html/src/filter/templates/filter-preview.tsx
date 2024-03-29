import { Filter, FilterToolbar, FilterLines, FilterPreview, FilterItem } from "..";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar, ToolbarItem } from '../../toolbar';

export const FilterWithPreview = (props) => (
    <Filter
        showApplyButton={true}
        children={[
            <FilterToolbar key="filter-toolbar">
                <Toolbar>
                    <ButtonGroup>
                        <Button className="k-group-start" selected>And</Button>
                        <Button className="k-group-end">Or</Button>
                    </ButtonGroup>
                    <Button icon="filter-add-expression">Add Expression</Button>
                    <Button icon="filter-add-group">Add Group</Button>
                    <Button fillMode="flat" icon="x"></Button>
                </Toolbar>
            </FilterToolbar>,
            <FilterLines key="filter-lines">
                <FilterItem>
                    <FilterToolbar>
                        <Toolbar>
                            <ToolbarItem className="k-filter-field">
                                <DropdownList value="Name" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-operator">
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
            </FilterLines>,
            <FilterPreview key="filter-preview"
                fields={[
                    { name: "bracket", value: "(" },
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
                ]}>
            </FilterPreview>
        ]}
        {...props}
    >
    </Filter>
);
