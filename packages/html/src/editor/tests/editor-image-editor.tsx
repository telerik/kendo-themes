import ReactDOM from 'react-dom/client';
import { Textbox } from '../../textbox';
import { Window } from '../../window';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Window</span>
            <span></span>

            <section>
                <Window title="Insert Image" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <div className="k-form k-form-md k-form-horizontal">
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label>Web address:</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textbox showClearButton={false} />
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label>Alternate text:</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textbox showClearButton={false} />
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label>Width:</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textbox showClearButton={false} />
                            </div>
                        </div>
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label>Height:</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textbox showClearButton={false} />
                            </div>
                        </div>
                    </div>
                </Window>
            </section>

        </div>
    </>
);
