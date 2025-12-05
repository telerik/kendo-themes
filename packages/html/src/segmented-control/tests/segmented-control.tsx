import { SegmentedControlNormal } from '../../segmented-control';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .k-segmented-control {
        display: inline-flex;
        position: relative;
        align-items: center;
        background-color: var(--kendo-color-base-subtle);
        border-radius: var(--kendo-border-radius-full);
        padding: 2px 8px;
        flex-flow: row nowrap;
        /* width: 100%; */
       /*  overflow: hidden; */
    }

    .k-segmented-control-button-text {
      white-space: nowrap;
    }

    .segmented-control-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      height: calc(100% - 4px);
      border-radius: var(--kendo-border-radius-full);
      box-shadow: var(--kendo-elevation-3);
      transition: width 300ms var(--cubic-enter), transform 300ms var(--cubic-enter);

      pointer-events: none;
      background: var(--kendo-color-surface);

      width: 220px; /* Dynamically calculated, based on the selected button width */
    }

    .k-segmented-control-button {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 2px 8px;
      border: 0;
      border-radius: var(--kendo-border-radius-full);
      cursor: pointer;
      font-size: 14px;
      line-height: var(--kendo-line-height);
      color: var(--kendo-color-on-app-surface);
      background: transparent;
      z-index: 1;
      gap: var(--kendo-spacing-1);
    }

`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <SegmentedControlNormal />
            </section>
        </div>

    </>
);
