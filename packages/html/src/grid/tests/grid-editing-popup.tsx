import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Upload, UploadFile } from '../../upload';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <Window title="Edit" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <Form tag="div" orientation="horizontal" >
                        <FormField label="Product Name" editor={ <Textbox value="Chai" /> } />
                        <FormField label="Unit Price" editor={
                            <>
                                <NumericTextbox />
                                <div className="k-tooltip k-tooltip-error k-validator-tooltip k-invalid-msg">
                                    <Icon className="k-tooltip-icon" name="warning" />
                                    <span className="k-tooltip-content">Unit Price is required</span>
                                    <span className="k-callout k-callout-n"></span>
                                </div>
                            </> }
                        />
                        <FormField label="Units In Stock" editor={ <NumericTextbox /> } />
                        <FormField label="Discontinued" editor={
                            <>
                                <Checkbox id="Discontinued" />
                                <label className="k-checkbox-label">&#8203;</label>
                            </>
                        } />
                        <FormField label="Files" editor={
                            <Upload async status="done">
                                <UploadFile progress="100"
                                    status="success"
                                    name="67409197_2322469807839836_4126207508270284800_n.png"
                                    icon="file-image"
                                    size="24.34 KB" />
                            </Upload>
                        }
                        />
                    </Form>
                </Window>
            </section>

        </div>
    </>
);
