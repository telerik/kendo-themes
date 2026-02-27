import DatePicker from "../datepicker.spec";

export const DatePickerDisabled = (props) => (
    <DatePicker
        disabled={true}
        value="6/1/2025"
        {...props}
    />
);
