import { SplitButtonPopup } from '../../split-button';

const styles = `
    #test-area {
        max-width: 660px;
    }
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>SplitButton Popup Opened</span>
            <span>SplitButton Popup Opened RTL</span>

            <div>
                <SplitButtonPopup />
            </div>
            <div dir="rtl">
                <SplitButtonPopup />
            </div>
        </div>
    </>
);