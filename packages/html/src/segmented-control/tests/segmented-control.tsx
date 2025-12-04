import { SegmentedControlNormal } from '../../segmented-control';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .k-segmented-control {
        border: 1px solid red;
        display: inline-flex;
        position: relative;
        align-items: center;
        background-color: #e8e8e8;
        border-radius: 9999px;
        padding: 4px;
        gap: 4px;
    }

    .segmented-control-thumb {
      position: absolute;
      top: 4px;
      left: 4px;
      height: calc(100% - 8px);
      background-color: #fff;
      border-radius: 9999px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: width 300ms var(--cubic-enter), transform 300ms var(--cubic-enter);
      pointer-events: none;
    }

    .segmented-control-option {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border: none;
      background: transparent;
      border-radius: 9999px;
      cursor: pointer;
      font-size: 16px;
      color: #666;
      transition: color 0.2s ease, transform 0.15s ease;
      z-index: 1;
    }

    .segmented-control-option:hover {
      color: #333;
    }

    .segmented-control-option.active {
      color: #000;
    }

    .segmented-control-option:active {
      transform: scale(0.96);
    }

`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div>
                    <SegmentedControlNormal />

                </div>
            </section>
        </div>

    </>
);
