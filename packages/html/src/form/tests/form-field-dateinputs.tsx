import { DateInput } from '../../dateinput/dateinput.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { DateRangePicker } from '../../daterangepicker/daterangepicker.spec';
import { DateTimePicker } from '../../datetimepicker/datetimepicker.spec';
import { TimePicker } from '../../timepicker/timepicker.spec';
import { FormField } from '../../form/form-field';
import { FormNormal } from '../../form/templates/form-normal';
import { FormHorizontal } from '../../form/templates/form-horizontal';


const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Form</span>
            <span>Horizontal Form</span>

            <section>
                <FormNormal
                    formButtons={null}
                >
                    <FormField
                        label="DateInput:"
                        editor={
                            <DateInput />
                        }
                    >
                    </FormField>

                    <FormField
                        label="DatePicker:"
                        editor={
                            <DatePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        label="DateTimePicker:"
                        editor={
                            <DateTimePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        label="DateRangePicker:"
                        editor={
                            <DateRangePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        label="TimePicker:"
                        editor={
                            <TimePicker />
                        }
                    >
                    </FormField>
                </FormNormal>
            </section>


            <section>
                <FormHorizontal
                    formButtons={null}
                >
                    <FormField
                        orientation="horizontal"
                        label="DateInput:"
                        editor={
                            <DateInput />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="DatePicker:"
                        editor={
                            <DatePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="DateTimePicker:"
                        editor={
                            <DateTimePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="DateRangePicker:"
                        editor={
                            <DateRangePicker />
                        }
                    >
                    </FormField>

                    <FormField
                        orientation="horizontal"
                        label="TimePicker:"
                        editor={
                            <TimePicker />
                        }
                    >
                    </FormField>
                </FormHorizontal>
            </section>

        </div>
    </>
);
