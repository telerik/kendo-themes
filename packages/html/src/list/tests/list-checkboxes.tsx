import { ListWithCheckboxes, ListItem } from '../../list';

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                <ListWithCheckboxes>
                    <ListItem showCheckbox text="Unchecked" />
                    <ListItem showCheckbox checked text="Checked" />
                    <ListItem showCheckbox disabled text="Disabled" />
                    <ListItem showCheckbox checked disabled text="Checked + disabled" />
                </ListWithCheckboxes>
            </section>
        </div>
    </>
);
