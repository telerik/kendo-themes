import { AutocompleteAdaptive } from '../../autocomplete';

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
                <AutocompleteAdaptive adaptiveTitle="Label" placeholder="Placeholder"/>
            </section>
            <section>
                <div className="k-label">Label</div>
                <AutocompleteAdaptive adaptiveTitle="Label" placeholder="Placeholder" adaptiveSettings={{ fullscreen: true }} />
            </section>

            <span>partial (custom value)</span>
            <span>full screen (custom value)</span>

            <section>
                <div className="k-label">Label</div>
                <AutocompleteAdaptive adaptiveCustomValue adaptiveTitle="Label" value="Value" placeholder="Placeholder"/>
            </section>
            <section>
                <div className="k-label">Label</div>
                <AutocompleteAdaptive adaptiveCustomValue adaptiveTitle="Label" value="Value" placeholder="Placeholder" adaptiveSettings={{ fullscreen: true }}/>
            </section>
        </div>
    </>
);
