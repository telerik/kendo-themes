import TimePicker from "../timepicker.spec";

export const TimePickerDisabled = (props) => (
    <TimePicker
        disabled={true}
        value="10:00 AM"
        {...props}
    />
);
