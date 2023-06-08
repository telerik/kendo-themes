import { DateInput } from '../../dateinput';
import { DatePicker } from '../../datepicker';
import { DateRangePicker } from '../../daterangepicker';
import { DateTimePicker } from '../../datetimepicker';
import { TimePicker } from '../../timepicker';
import { Form, FormField } from '../../form';


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
                <Form>

                    <FormField
                        label="DateInput:"
                        editor={
                            <DateInput showSpinButton={false} />
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

                </Form>
            </section>


            <section>
                <Form orientation="horizontal">

                    <FormField
                        label="DateInput:"
                        editor={
                            <DateInput showSpinButton={false} />
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

                </Form>
            </section>

        </div>
    </>
);
