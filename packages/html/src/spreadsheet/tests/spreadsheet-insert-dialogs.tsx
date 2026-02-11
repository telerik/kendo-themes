import { WindowNormal } from '../../window/templates/window-normal';
import { Textarea } from '../../textarea/textarea.spec';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { Textbox } from '../../textbox/textbox.spec';
import { UploadNormal } from '../../upload/templates/upload-normal';
import { DropzoneWithNote } from '../../dropzone/templates/dropzone-with-note';
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
                <WindowNormal title="Insert comment" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove comment</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Comment" editor={ <Textarea /> }/>
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Insert image" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <DropzoneWithNote />

                    <UploadNormal status="upload"></UploadNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Insert Link" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove link</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Select link" editor={ <DropdownList value="URL" /> } />
                        <FormField label="URL address" editor={ <Textbox value="Input value" /> } />
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Insert Link" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove link</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Select link" editor={ <DropdownList value="Internal" /> } />
                        <FormField label="Cell reference" editor={ <Textbox value="B3:B11" /> } />
                        <FormField label="From sheet" editor={
                            <ListBox style={{ width: "100%" }}>
                                <ListItem>Sheet 1</ListItem>
                                <ListItem>Sheet 2</ListItem>
                                <ListItem>Sheet 3</ListItem>
                                <ListItem>Sheet 4</ListItem>
                            </ListBox>
                        }/>
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Insert Chart" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Select chart type" editor={ <DropdownList value="Donut" /> } />
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
