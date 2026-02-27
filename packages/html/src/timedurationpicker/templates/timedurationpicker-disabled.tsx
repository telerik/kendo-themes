import TimeDurationPicker from "../timedurationpicker.spec";

export const TimeDurationPickerDisabled = (props) => (
    <TimeDurationPicker
        disabled={true}
        value="1d 2h 30m"
        {...props}
    />
);
