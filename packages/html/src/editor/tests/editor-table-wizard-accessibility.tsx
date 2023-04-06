import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 600px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <Window className="k-editor-window k-editor-table-wizard-window" title="Table Wizard" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-first"><span className="k-loading k-complete"></span><span className="k-link">Table</span></li>
                                <li className="k-item"><span className="k-loading k-complete"></span><span className="k-link">Cell</span></li>
                                <li className="k-item k-last k-tab-on-top k-active"><span className="k-loading k-complete"></span><span className="k-link">Accessibility</span></li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div" orientation="horizontal">
                                <FormField label="Header Rows" editor={ <NumericTextbox /> } />
                                <FormField label="Header Cols" editor={ <NumericTextbox /> } />
                                <FormField label="Caption" editor={ <Textbox /> } />
                                <FormField label="Alignment" editor={
                                    <DropdownList
                                        className="k-align"
                                        showValue={false}
                                        value="Remove align"
                                        valueIconName="align-remove"
                                        style={{ width: "min-content" }} /> }
                                />
                                <FormField label="Summary" editor={
                                    <Textarea
                                        className="k-editor-accessibility-summary"
                                        placeholder="Summary attribute is not HTML5 compatible."/> }
                                />
                                <FormField label="Associate headers" editor={ <DropdownList value="None" /> } />
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>
        </div>
    </>
);
