import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { ListBox } from '../../listbox';
import { ListItem } from '../../list';
import { DateInput } from '../../dateinput';
import { ColorPicker } from '../../colorpicker';
import { Toolbar } from '../../toolbar';


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
                    <Form>
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
                    </Form>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Conditional Formatting" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
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
                    </Form>
                </WindowNormal>
            </section>

        </div>
    </>
);
