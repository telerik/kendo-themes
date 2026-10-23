import { MultiSelectTreeAdaptive } from '../../multiselecttree';

const styles = `
    #test-area > section {
        height: 720px;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
        container-type: size;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <div className="k-label">Label</div>
                <MultiSelectTreeAdaptive adaptiveTitle="Label" placeholder="Placeholder" />
            </section>
            <section>
                <div className="k-label">Label</div>
                <MultiSelectTreeAdaptive adaptiveTitle="Label" placeholder="Placeholder" adaptiveSettings={{ fullscreen: true }} />
            </section>

            <span>partial (filter)</span>
            <span>full screen (filter)</span>

            <section>
                 <div className="k-label">Label</div>
                <MultiSelectTreeAdaptive adaptiveFilter adaptiveTitle="Label" placeholder="Placeholder" />
            </section>
            <section>
                 <div className="k-label">Label</div>
                <MultiSelectTreeAdaptive adaptiveFilter adaptiveTitle="Label" placeholder="Placeholder" adaptiveSettings={{ fullscreen: true }} />
            </section>
        </div>
    </>
);
