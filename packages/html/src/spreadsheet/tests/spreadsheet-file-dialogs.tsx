import { WindowNormal } from '../../window/templates/window-normal';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { Textbox } from '../../textbox/textbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { UploadNormal } from '../../upload/templates/upload-normal';
import { DropzoneNormal } from '../../dropzone/templates/dropzone-normal';


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
                <WindowNormal title="Create new file" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="stretched" actionButtons={
                    <>
                        <Button themeColor="primary">Create new file</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p>Are you sure you want to close this file without saving it and create a new one?</p>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Save" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="File name" editor={ <Textbox placeholder="Workbook"/> }></FormField>

                        <FormField label="Save as type" editor={ <DropdownList placeholder="Excel Workbook (.xlsx)" />}></FormField>
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Open file" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Open</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <DropzoneNormal />

                    <UploadNormal status="upload"/>
                </WindowNormal>
            </section>

        </div>
    </>
);
