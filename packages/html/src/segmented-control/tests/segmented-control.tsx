import { SegmentedControlNormal } from '../../segmented-control/templates/segmented-control-normal';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }

    .k-segmented-control-thumb {
        width: 100px;
    }

    .full-width .k-segmented-control-thumb {
        width: 300px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                <div>Default</div>
                <SegmentedControlNormal />
            </section>

            <section style={{ width: "200px"}}>
                <div>Stretched (small width) - items with equal widths</div>
                <SegmentedControlNormal stretched />
            </section>

            <section>
                <div>Stretched - 100% width - items with equal widths</div>
                <SegmentedControlNormal stretched className="full-width" />
            </section>
        </div>

    </>
);
