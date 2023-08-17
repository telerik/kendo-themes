import { MultiSelectPopup } from '..';

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelect</span>
            <span>MultiSelect RTL</span>

            <div>Opened</div>
            <div>
                <MultiSelectPopup />
            </div>
            <div dir="rtl">
                <MultiSelectPopup />
            </div>
        </div>
    </>
);
