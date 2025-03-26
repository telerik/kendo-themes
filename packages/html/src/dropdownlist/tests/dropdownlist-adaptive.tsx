import { DropdownListAdaptive } from '../templates/dropdownlist-adaptive';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 500px;
        --kendo-actionsheet-max-height: 500px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <div className="k-label">Label</div>
                <DropdownListAdaptive adaptiveTitle="Label" />
            </section>
            <section>
                <div className="k-label">Label</div>
                <DropdownListAdaptive adaptiveTitle="Label" adaptiveSettings={{ fullscreen: true }} />
            </section>

            <span>partial (filter)</span>
            <span>full screen (filter)</span>

            <section>
                <div className="k-label">Label</div>
                <DropdownListAdaptive adaptiveFilter adaptiveTitle="Label" />
            </section>
            <section>
                <div className="k-label">Label</div>
                <DropdownListAdaptive adaptiveFilter adaptiveTitle="Label" adaptiveSettings={{ fullscreen: true }} />
            </section>
        </div>

    </>
);
