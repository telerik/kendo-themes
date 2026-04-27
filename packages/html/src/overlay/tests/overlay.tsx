import Overlay from "../overlay.spec";

const styles = `
    #test-area {
        grid-template-columns: 100px 1fr;
    }

    .k-overlay {
        position: relative;
        width: 80px;
        height: 80px;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">

      <Overlay />
    </div>
  </>
);
