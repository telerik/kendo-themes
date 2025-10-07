import { DateTimePicker } from "../datetimepicker.spec";
import { DateTimePickerNormal } from "../templates/datetimepicker-normal";

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 1fr);
        max-width: unset;
    }

    .k-animation-container {
        position: relative;
        width: fit-content;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">
      {DateTimePicker.options.size.map((size) => (
        <section key={size}>
          <DateTimePickerNormal size={size} tab="date" value="12/25/2023 10:30 AM" opened />
        </section>
      ))}

      {DateTimePicker.options.size.map((size) => (
        <section key={size}>
          <DateTimePickerNormal size={size} tab="time" value="12/25/2023 10:30 AM" opened />
        </section>
      ))}
    </div>
  </>
);
