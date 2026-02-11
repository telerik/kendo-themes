import { WindowNormal } from '../../window/templates/window-normal';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { Textbox } from '../../textbox/textbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { ListBox } from '../../listbox/listbox.spec';
import { ListItem } from '../../list/list-item.spec';
import { DateInput } from '../../dateinput/dateinput.spec';
import { ColorPicker } from '../../colorpicker/colorpicker.spec';
import { Toolbar } from '../../toolbar/toolbar.spec';


const style = `
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <WindowNormal title="Custom Format" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Category" editor={ <DropdownList value="Date" /> }/>
                        <FormField label="Sample" editor={ <DateInput value="1/17/2022" /> }/>
                        <FormField label="Symbol" editor={
                            <ListBox style={{ width: "100%" }}>
                                <ListItem>1/17/2022</ListItem>
                                <ListItem>Monday, January 17, 2022</ListItem>
                                <ListItem>Monday, January 17, 2022 6:25:37 PM</ListItem>
                                <ListItem>1/17/2022 6:25 PM</ListItem>
                                <ListItem>1/17/2022 6:25:37 PM</ListItem>
                            </ListBox>
                        }/>
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Conditional Formatting" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Apply to range" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Format cells if" editor={ <DropdownList value="Cell value" /> }/>
                        <FormField label="is" editor={ <DropdownList value="Greater than" /> }/>
                        <FormField label="Apply to range" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Format with" editor={
                            <Toolbar resizable>
                                <Button icon="bold" />
                                <Button icon="italic" />
                                <Button icon="underline" />
                                <Button icon="strikethrough" />
                                <ColorPicker value="red" valueIconName="foreground-color" />
                                <ColorPicker value="fuchsia" valueIconName="droplet" />
                            </Toolbar>
                        } />
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
