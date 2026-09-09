import { MenuScrollable, MenuVerticalScrollable } from "..";

const style = `
    section {
        border: 1px dashed
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Horizontal Around</span>
      <span>Horizontal Start</span>
      <span>Horizontal End</span>

      <section>
        <MenuScrollable wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"around"} />
      </section>
      <section>
        <MenuScrollable wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"start"} />
      </section>
      <section>
        <MenuScrollable wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"end"} />
      </section>

      <span>Vertical Around</span>
      <span>Vertical Start</span>
      <span>Vertical End</span>

      <section>
        <MenuVerticalScrollable wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"around"} />
      </section>
      <section>
        <MenuVerticalScrollable wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"start"} />
      </section>
      <section>
        <MenuVerticalScrollable wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"end"} />
      </section>

      <span>Horizontal Around (RTL)</span>
      <span>Horizontal Start (RTL)</span>
      <span>Horizontal End (RTL)</span>

      <section>
        <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"around"} />
      </section>
      <section>
        <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"start"} />
      </section>
      <section>
        <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={"end"} />
      </section>

      <span>Vertical Around (RTL)</span>
      <span>Vertical Start (RTL)</span>
      <span>Vertical End (RTL)</span>

      <section>
        <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"around"} />
      </section>
      <section>
        <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"start"} />
      </section>
      <section>
        <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={"end"} />
      </section>
    </div>
  </>
);
