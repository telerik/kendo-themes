import { BadgeNormal } from '..';


const styles = `
    .k-badge-container {
        padding: 5px;
        width: 80px;
        min-height: 30px;
        box-sizing: border-box;
        background-color: skyblue;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-6">

            <span></span>
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>
            <span>Dot</span>


            <span>Inline</span>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium">Round</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="full">Pill</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="full">1</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="full"></BadgeNormal>
            </div>

            <span>Inline RTL</span>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium">Round</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="full">Pill</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="full">1</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="full"></BadgeNormal>
            </div>

            <span className="col-6"></span>

            <span></span>
            <span>top start</span>
            <span>top end</span>
            <span>bottom start</span>
            <span>bottom end</span>
            <span></span>

            <span>Inside</span>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

            <span>Edge</span>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Outside</span>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Inside RTL</span>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="inside" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

            <span>Edge RTL</span>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="edge" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Outside RTL</span>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="top-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="top-end">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="bottom-start">Rect</BadgeNormal>
            </div>
            <div className="k-badge-container k-rtl">
                <BadgeNormal fillMode="solid" rounded="medium" position="outside" align="bottom-end">Rect</BadgeNormal>
            </div>
            <span></span>

        </div>
    </>
);
