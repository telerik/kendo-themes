import React from 'react';
import ReactDOM from 'react-dom/client';
import { DateInput } from '../../dateinput';
import { DatePicker } from '../../datepicker';
import { DateRangePicker } from '../../daterangepicker';
import { DateTimePicker } from '../../datetimepicker';
import { TimePicker } from '../../timepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form (React)</span>
            <span>Horizontal Form (React)</span>

            <section>
                <form className="k-form k-form-md k-form-vertical">

                    <div className="k-form-field">
                        <label className="k-label">DateInput:</label>
                        <DateInput showSpinButton={false} />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DatePicker:</label>
                        <DatePicker />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DateTimePicker:</label>
                        <DateTimePicker />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DateRangePicker:</label>
                        <DateRangePicker />
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">TimePicker:</label>
                        <TimePicker />
                    </div>

                </form>
            </section>


            <section>
                <form className="k-form k-form-md k-form-horizontal">

                    <div className="k-form-field">
                        <label className="k-label">DateInput:</label>
                        <div className="k-form-field-wrap">
                            <DateInput showSpinButton={false} />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DatePicker:</label>
                        <div className="k-form-field-wrap">
                            <DatePicker />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DateTimePicker:</label>
                        <div className="k-form-field-wrap">
                            <DateTimePicker />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">DateRangePicker:</label>
                        <div className="k-form-field-wrap">
                            <DateRangePicker />
                        </div>
                    </div>

                    <div className="k-form-field">
                        <label className="k-label">TimePicker:</label>
                        <div className="k-form-field-wrap">
                            <TimePicker />
                        </div>
                    </div>

                </form>
            </section>

        </div>
    </>
);
