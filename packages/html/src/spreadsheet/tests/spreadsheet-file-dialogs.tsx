import { Window } from '../../window';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { Upload } from '../../upload';
import { Dropzone } from '../../dropzone';


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
                <Window title="Create new file" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="stretched" actionButtons={
                    <>
                        <Button themeColor="primary">Create new file</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p>Are you sure you want to close this file without saving it and create a new one?</p>
                </Window>
            </section>

            <section>
                <Window title="Save" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField label="File name" editor={ <Textbox placeholder="Workbook"/> }></FormField>

                        <FormField label="Save as type" editor={ <DropdownList placeholder="Excel Workbook (.xlsx)" />}></FormField>
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Open file" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Open</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Dropzone note={false} />

                    <Upload async status="upload"></Upload>
                </Window>
            </section>

        </div>
    </>
);
