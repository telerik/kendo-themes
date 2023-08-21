import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { Upload } from '../../upload';
import { Dropzone } from '../../dropzone';
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
                <Window title="Insert comment" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove comment</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Comment" editor={ <Textarea /> }/>
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Insert image" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Dropzone />

                    <Upload async status="upload"></Upload>
                </Window>
            </section>

            <section>
                <Window title="Insert Link" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove link</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Select link" editor={ <DropdownList value="URL" /> } />
                        <FormField label="URL address" editor={ <Textbox value="Input value" /> } />
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Insert Link" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove link</Button>
                    </>
                }>
                    <Form>
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
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Insert Chart" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Select chart type" editor={ <DropdownList value="Donut" /> } />
                    </Form>
                </Window>
            </section>

        </div>
    </>
);
