import { Filter, FilterToolbar, FilterLines, FilterPreview, FilterItem } from "..";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { DatePicker } from '../../datepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Toolbar, ToolbarItem } from '../../toolbar';

export const FilterWithPreview = ({ children, expressionPreview, ...other }: any) => (
    <Filter
        showApplyButton={true}
        expressionPreview={expressionPreview ||
            <FilterPreview
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
                ]}
            />
        }
        {...other}
    >
        {children || <>
            <FilterToolbar>
                <Toolbar aria-label="Filter group">
                    <ButtonGroup>
                        <Button className="k-group-start" selected>And</Button>
                        <Button className="k-group-end">Or</Button>
                    </ButtonGroup>
                    <Button icon="filter-add-expression">Add Expression</Button>
                    <Button icon="filter-add-group">Add Group</Button>
                    <Button fillMode="flat" icon="x" aria-label="Remove group" title="Remove group"></Button>
                </Toolbar>
            </FilterToolbar>
            <FilterLines>
                <FilterItem>
                    <FilterToolbar>
                        <Toolbar aria-label="Filter expression">
                            <ToolbarItem className="k-filter-field">
                                <DropdownList value="Name" aria-label="Field" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-operator">
                                <DropdownList value="Is equal to" aria-label="Operator" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-value">
                                <Textbox placeholder="James" aria-label="Value"/>
                            </ToolbarItem>
                            <Button fillMode="flat" icon="x" aria-label="Remove expression" title="Remove expression"></Button>
                        </Toolbar>
                    </FilterToolbar>
                </FilterItem>
                <FilterItem>
                    <FilterToolbar>
                        <Toolbar aria-label="Filter expression">
                            <ToolbarItem className="k-filter-field">
                                <DropdownList value="Price" aria-label="Field" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-operator">
                                <DropdownList value="Is greater than" aria-label="Operator" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-value">
                                <NumericTextbox placeholder="100,00" aria-label="Value"/>
                            </ToolbarItem>
                            <Button fillMode="flat" icon="x" aria-label="Remove expression" title="Remove expression"></Button>
                        </Toolbar>
                    </FilterToolbar>
                </FilterItem>
                <FilterItem>
                    <FilterToolbar>
                        <Toolbar aria-label="Filter expression">
                            <ToolbarItem className="k-filter-field">
                                <DropdownList value="First Ordered" aria-label="Field" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-operator">
                                <DropdownList value="Is before" aria-label="Operator" />
                            </ToolbarItem>
                            <ToolbarItem className="k-filter-value">
                                <DatePicker placeholder="1/21/2021" />
                            </ToolbarItem>
                            <Button fillMode="flat" icon="x" aria-label="Remove expression" title="Remove expression"></Button>
                        </Toolbar>
                    </FilterToolbar>
                </FilterItem>
            </FilterLines>
        </>}
    </Filter>
);
