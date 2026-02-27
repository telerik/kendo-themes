import TimePicker from "../timepicker.spec";

export const TimePickerInvalid = (props) => (
    <TimePicker
        invalid={true}
        value="10:00 AM"
        {...props}
    />
);
