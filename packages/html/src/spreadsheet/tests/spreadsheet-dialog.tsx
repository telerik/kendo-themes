import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { RadioButton } from '../../radio';
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
                <Window title="Insert comment" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Comment:" editor={ <Textarea /> }/>
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Hyperlink" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">OK</Button>
                        <Button>Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button fillMode="clear" themeColor="primary">Remove link</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Web address:" editor={ <Textbox /> } />
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Export..." actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField label="File name:" editor={ <Textbox placeholder="Workbook"/> }></FormField>

                        <FormField label="Save as type:" editor={ <DropdownList placeholder="Excel Workbook (.xlsx)" />}></FormField>
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Birth Date validaiton error" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Retry</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    Birth Date should be between 1899 and 1998 year.
                </Window>
            </section>

            <section>
                <Window title="Insert image" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Update</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Dropzone />

                    <Upload async status="upload"></Upload>
                </Window>
            </section>

            <section>
                <Window title="Merge cells" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField
                            editor={
                                <ul className="k-radio-list">
                                    <li className="k-radio-list-item">
                                        <RadioButton checked />
                                        <label className="k-radio-label">Merge all</label>
                                    </li>
                                    <li className="k-radio-list-item">
                                        <RadioButton />
                                        <label className="k-radio-label">Merge horizontally</label>
                                    </li>
                                    <li className="k-radio-list-item">
                                        <RadioButton />
                                        <label className="k-radio-label">Merge vertically</label>
                                    </li>
                                    <li className="k-radio-list-item">
                                        <RadioButton />
                                        <label className="k-radio-label">Unmerge</label>
                                    </li>
                                </ul>
                            }
                        >
                        </FormField>
                    </Form>
                </Window>
            </section>
        </div>
    </>
);
