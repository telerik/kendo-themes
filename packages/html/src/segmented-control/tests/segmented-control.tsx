import { SegmentedControlNormal } from "../../segmented-control";

const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area">
      <section>
        <div>Default</div>
        <SegmentedControlNormal thumbStyles={{ width: "50%" }} />
      </section>

      <section style={{ width: "200px" }}>
        <div>Stretched (small width) - items with equal widths</div>
        <SegmentedControlNormal thumbStyles={{ width: "50%" }} stretched />
      </section>

      <section>
        <div>Stretched - 100% width - items with equal widths</div>
        <SegmentedControlNormal thumbStyles={{ width: "50%" }} stretched className="full-width" />
      </section>
    </div>
  </>
);
