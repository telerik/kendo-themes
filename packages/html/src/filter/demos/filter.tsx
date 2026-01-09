import { Filter, KendoFilterProps } from '../filter.spec';
import { FilterNormal } from '../templates/filter-normal';
import { FilterToolbar } from '../filter-toolbar';
import { FilterLines } from '../filter-lines';
import { FilterItem } from '../filter-item';
import { Toolbar, ToolbarItem } from '../../toolbar';
import { ButtonGroup } from '../../button-group';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { NumericTextbox } from '../../numerictextbox';
import { DatePicker } from '../../datepicker';

const options = Filter.options;
const states = Filter.states;
const defaults = {
    ...Filter.defaultOptions,
    variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Single Group',
    },
];
const modifiers = [
    {
        name: 'expanded',
        title: 'Expanded',
    },
];

export const FilterDemo = (
    props: KendoFilterProps &
    { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean } }
) => {

    const { modifiers: mods, ...other } = props;
    const { expanded } = mods || {};
    const variant = expanded ? 'expanded' : 'normal';

    switch (variant) {
        case 'expanded':
            return (
                <FilterNormal {...other}>
                    <FilterToolbar>
                        <Toolbar>
                            <ButtonGroup>
                                <Button selected>And</Button>
                                <Button>Or</Button>
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
                                        <DropdownList value="Is equal to" />
                                    </ToolbarItem>
                                    <ToolbarItem className="k-filter-value">
                                        <Textbox placeholder="James" />
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
                                        <NumericTextbox placeholder="100,00" />
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
                    </FilterLines>
                </FilterNormal>
            );
        case 'normal':
        default:
            return (
                <FilterNormal {...other}>
                    <FilterToolbar>
                        <Toolbar>
                            <ButtonGroup>
                                <Button selected>And</Button>
                                <Button>Or</Button>
                            </ButtonGroup>
                            <Button icon="filter-add-expression">Add Expression</Button>
                            <Button icon="filter-add-group">Add Group</Button>
                            <Button fillMode="flat" icon="x"></Button>
                        </Toolbar>
                    </FilterToolbar>
                    <FilterLines></FilterLines>
                </FilterNormal>
            );
    }
}


FilterDemo.options = options;
FilterDemo.states = states;
FilterDemo.variants = variants;
FilterDemo.defaultOptions = defaults;
FilterDemo.modifiers = modifiers;

export default FilterDemo;

