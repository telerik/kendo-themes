import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { DropdownList } from '../../dropdownlist';
import { ListBox } from '../../listbox';
import { ListItem } from '../../list';


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
                <WindowNormal title="Insert formula" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Category" editor={ <DropdownList value="Date and Time" /> }/>
                        <FormField label="Pick a formula" hint="Returns the number of dates between the two dates." editor={
                            <ListBox style={{ width: "100%" }}>
                                <ListItem>DATE</ListItem>
                                <ListItem>DATEVALUE</ListItem>
                                <ListItem>DAY</ListItem>
                                <ListItem>DAYS</ListItem>
                                <ListItem>DAYS360</ListItem>
                            </ListBox>
                        } />
                    </Form>
                </WindowNormal>
            </section>

        </div>
    </>
);
