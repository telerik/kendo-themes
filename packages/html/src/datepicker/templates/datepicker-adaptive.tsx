import DatePicker from "../datepicker.spec";

export const DatePickerAdaptive = (props) => (
    <DatePicker
        adaptive={true}
        adaptiveTitle="Select date"
        {...props}
    />
);
