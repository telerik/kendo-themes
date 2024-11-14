import { PropertyGridWithPreview } from "..";

const styles = `
    .k-pane:nth-child(1) {
        text-align: center;
        margin-top: 10%;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <PropertyGridWithPreview />
        </div>
    </>
);
