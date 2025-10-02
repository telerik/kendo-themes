import { Checkbox, CheckboxWithLabelAfter } from "../../checkbox";

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 1fr);
    }

    .k-ripple-container .k-checkbox:focus::after,
    .k-ripple-container .k-checkbox.k-focus::after {
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

      {["unchecked", ...Checkbox.states].map((state) => (
        <>
          {Checkbox.options.size.map((size) => (
            <section>
              <CheckboxWithLabelAfter id={"ch-" + [state] + "-" + [size]} {...{ [state]: true }} size={size}>
                {state}
              </CheckboxWithLabelAfter>
            </section>
          ))}
        </>
      ))}

      {Checkbox.options.size.map((size) => (
        <section>
          <div className="k-ripple-container">
            <CheckboxWithLabelAfter size={size} id={"ch-" + "ripple" + "-" + [size]} focus className="k-ripple-focus">
              ripple
            </CheckboxWithLabelAfter>
          </div>
        </section>
      ))}

      {Checkbox.options.size.map((size) => (
        <section>
          <div className="k-ripple-container">
            <CheckboxWithLabelAfter size={size} id={"ch-" + "ripple" + "-" + [size]} checked focus className="k-ripple-focus">
              ripple checked
            </CheckboxWithLabelAfter>
          </div>
        </section>
      ))}
    </div>
  </>
);
