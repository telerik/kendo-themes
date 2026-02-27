import DatePicker from "../datepicker.spec";

export const DatePickerInvalid = (props) => (
    <DatePicker
        invalid={true}
        value="6/1/2025"
        {...props}
    />
);
