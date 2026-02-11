import { Switch } from "../../switch/switch.spec";
import { SwitchChecked } from "../templates/switch-checked";
import { SwitchNormal } from "../templates/switch-normal";

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }

    #test-area > span {
        text-align: center;
    }

    .wrapper {
        display: flex;
        justify-content: space-around;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">
      <span>
        <small>Track Rounded + Size</small>
      </span>
      <span>undefined</span>
      <span>small</span>
      <span>medium</span>
      <span>large</span>

      {Switch.options.trackRounded.map((roundness) => (
        <>
          <span>{`${roundness}`}</span>

          {Switch.options.size.map((size) => (
            <div className="wrapper">
              <SwitchChecked size={size} trackRounded={roundness} />
              <SwitchNormal size={size} trackRounded={roundness} />
            </div>
          ))}
        </>
      ))}

      <span>
        <small>Thumb Rounded + Size</small>
      </span>
      <span>undefined</span>
      <span>small</span>
      <span>medium</span>
      <span>large</span>

      {Switch.options.trackRounded.map((roundness) => (
        <>
          <span>{`${roundness}`}</span>

          {Switch.options.size.map((size) => (
            <div className="wrapper">
              <SwitchChecked size={size} thumbRounded={roundness} />
              <SwitchNormal size={size} thumbRounded={roundness} />
            </div>
          ))}
        </>
      ))}

      <span>
        <small>Track & Thumb Rounded + Size</small>
      </span>
      <span>undefined</span>
      <span>small</span>
      <span>medium</span>
      <span>large</span>

      {Switch.options.trackRounded.map((roundness) => (
        <>
          <span>{`${roundness}`}</span>

          {Switch.options.size.map((size) => (
            <div className="wrapper">
              <SwitchChecked size={size} trackRounded={roundness} thumbRounded={roundness} />
              <SwitchNormal size={size} trackRounded={roundness} thumbRounded={roundness} />
            </div>
          ))}
        </>
      ))}
    </div>
  </>
);
