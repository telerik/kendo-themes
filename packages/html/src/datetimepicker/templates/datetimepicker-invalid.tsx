import DateTimePicker from "../datetimepicker.spec";

export const DateTimePickerInvalid = (props) => (
    <DateTimePicker
        invalid={true}
        value="6/1/2025 10:00 AM"
        {...props}
    />
);
