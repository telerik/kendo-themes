import TimePicker from "../timepicker.spec";

export const TimePickerAdaptive = (props) => (
    <TimePicker
        adaptive={true}
        adaptiveTitle="Set time"
        {...props}
    />
);
