import { MenuButtonPopup } from '../../menu-button';

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

            <span>MenuButton Popup Opened</span>
            <span>MenuButton Popup Opened RTL</span>

            <div>
                <MenuButtonPopup />
            </div>
            <div dir="rtl">
                <MenuButtonPopup />
            </div>
        </div>
    </>
);
