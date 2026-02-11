import { WindowNormal } from '../../window/templates/window-normal';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { ListBox } from '../../listbox/listbox.spec';
import { ListItem } from '../../list/list-item.spec';


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
                    <FormNormal formButtons={null}>
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
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
