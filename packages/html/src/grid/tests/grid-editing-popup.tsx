import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Upload, UploadFile } from '../../upload';

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
                    <div className="k-form k-form-md k-form-horizontal">
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label htmlFor="ProductName">Product Name</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textbox value="Chai" />
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label htmlFor="UnitPrice">Unit Price</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <NumericTextbox />
                                <div className="k-tooltip k-tooltip-error k-validator-tooltip k-invalid-msg">
                                    <Icon className="k-tooltip-icon" name="warning" />
                                    <span className="k-tooltip-content">Unit Price is required</span>
                                    <span className="k-callout k-callout-n"></span>
                                </div>
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label htmlFor="UnitsInStock">Units In Stock</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <NumericTextbox />
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label htmlFor="Discontinued">Discontinued</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Checkbox id="Discontinued" />
                                <label className="k-checkbox-label">&#8203;</label>
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label htmlFor="files">Files</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Upload async status="done">
                                    <UploadFile progress="100" status="success" name="67409197_2322469807839836_4126207508270284800_n.png" icon="file-image" size="24.34 KB"></UploadFile>
                                </Upload>
                            </div>
                        </div>
                    </div>
                </Window>
            </section>

        </div>
    </>
);
