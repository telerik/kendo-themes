import TimeDurationPicker from "../timedurationpicker.spec";

export const TimeDurationPickerInvalid = (props) => (
    <TimeDurationPicker
        invalid={true}
        value="1d 2h 30m"
        {...props}
    />
);
