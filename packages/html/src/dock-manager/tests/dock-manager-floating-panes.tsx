import { DockManagerFloatingPane, DockManagerFloatingPaneWithTabStrip, DockManagerFloatingPaneWithSplitter } from "../";

const style = `
    .k-window {
        position: relative;
        top: 1rem;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2">
        <section>
            <span>Floating Pane</span>
            <DockManagerFloatingPane/>
        </section>
        <section>
            <span>Floating Pane with TabStrip</span>
            <DockManagerFloatingPaneWithTabStrip style={{ width: "466px" }}/>
        </section>
        <section>
            <span>Floating Pane with Splitter</span>
            <DockManagerFloatingPaneWithSplitter />
        </section>
    </div>
  </>
);
