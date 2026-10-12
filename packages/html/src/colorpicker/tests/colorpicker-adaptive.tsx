import { ColorPicker } from '..';


const styles = `
    #test-area {
        max-width: 1100px;
    }
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
    #test-area > section:nth-of-type(2) {
        --kendo-actionsheet-height: 100cqh;
        --kendo-actionsheet-max-height: 100cqh;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>initial height</span>
            <span>max height</span>

            <section>
                <div className="k-label">Label</div>
                <ColorPicker adaptive={true} adaptiveTitle="Label" />
            </section>

            <section>
                <div className="k-label">Label</div>
                <ColorPicker adaptive={true} adaptiveTitle="Label" adaptiveSettings={{ resizable: true, fullscreen: true }} />
            </section>
        </div>
    </>
);
