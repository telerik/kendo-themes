import DateTimePicker from "../datetimepicker.spec";

export const DateTimePickerAdaptive = (props) => (
    <DateTimePicker
        adaptive={true}
        adaptiveTitle="Set date and time"
        {...props}
    />
);
