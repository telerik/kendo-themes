import { RadioButton, RadioButtonWithLabelAfter } from "../../radio";

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 1fr);
    }

    .k-ripple-container .k-radio:focus::after,
    .k-ripple-container .k-radio.k-focus::after {
        transform: translate(-50%, -50%) scale(1);
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">
      <span>Small</span>
      <span>Medium</span>
      <span>Large</span>

      {["unchecked", ...RadioButton.states].map((state) => (
        <>
          {RadioButton.options.size.map((size) => (
            <section>
              <RadioButtonWithLabelAfter id={"rad-" + [state] + "-" + [size]} {...{ [state]: true }} size={size}>
                {state}
              </RadioButtonWithLabelAfter>
            </section>
          ))}
        </>
      ))}

      {RadioButton.options.size.map((size) => (
        <section>
          <div className="k-ripple-container">
            <RadioButtonWithLabelAfter id="rad-ripple" size={size} focus className="k-ripple-focus">
              ripple
            </RadioButtonWithLabelAfter>
          </div>
        </section>
      ))}
    </div>
  </>
);
