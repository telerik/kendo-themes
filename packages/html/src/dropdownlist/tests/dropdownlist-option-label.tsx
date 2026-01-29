import { DropdownList } from '..';
import { List, ListItem, ListOptionLabel } from '../../list';


const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Normal</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    id="dropdownlist-option-label"
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" />} role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-option-label-listbox" listboxAriaLive="polite">
                            <ListItem id="dropdownlist-option-label-listbox-item-0" role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-listbox-item-1" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-listbox-item-2" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Hover</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    id="dropdownlist-option-label-hover"
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" hover />} role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-option-label-hover-listbox" listboxAriaLive="polite">
                            <ListItem id="dropdownlist-option-label-hover-listbox-item-0" role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-hover-listbox-item-1" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-hover-listbox-item-2" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Focus</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    id="dropdownlist-option-label-focus"
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" focus />} role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-option-label-focus-listbox" listboxAriaLive="polite">
                            <ListItem id="dropdownlist-option-label-focus-listbox-item-0" role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-focus-listbox-item-1" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-focus-listbox-item-2" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Selected</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    id="dropdownlist-option-label-selected"
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" selected />} role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-option-label-selected-listbox" listboxAriaLive="polite">
                            <ListItem id="dropdownlist-option-label-selected-listbox-item-0" role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-selected-listbox-item-1" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-selected-listbox-item-2" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Disabled</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    id="dropdownlist-option-label-disabled"
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" disabled />} role="listbox" aria-label="DropdownList options" listboxId="dropdownlist-option-label-disabled-listbox" listboxAriaLive="polite">
                            <ListItem id="dropdownlist-option-label-disabled-listbox-item-0" role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-disabled-listbox-item-1" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                            <ListItem id="dropdownlist-option-label-disabled-listbox-item-2" role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        </List>
                    )}
                />
            </section>

        </div>
    </>
);
