import DateTimePicker from "../datetimepicker.spec";

export const DateTimePickerDisabled = (props) => (
    <DateTimePicker
        disabled={true}
        value="6/1/2025 10:00 AM"
        {...props}
    />
);
