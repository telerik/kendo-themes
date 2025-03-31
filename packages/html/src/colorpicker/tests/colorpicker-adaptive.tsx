import { ColorPicker } from '..';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 650px;
        --kendo-actionsheet-max-height: 650px;
    }
    #test-area > section {
        height: 750px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span className="k-colspan-3 k-col-span-3">partial</span>
            <span className="k-colspan-2 k-col-span-2">full screen</span>

            <section className="k-colspan-3 k-col-span-3">
                <div className="k-label">Label</div>
                <ColorPicker adaptive={true} adaptiveTitle="Label" />
            </section>

            <section className="k-colspan-2 k-col-span-2">
                <div className="k-label">Label</div>
                <ColorPicker adaptive={true} adaptiveTitle="Label" adaptiveSettings={{ fullscreen: true }} />
            </section>
        </div>
    </>
);
