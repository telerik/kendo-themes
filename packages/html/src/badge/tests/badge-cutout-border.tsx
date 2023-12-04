import { Badge, BadgeNormal } from '..';


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

    #test-area {
        grid-template-columns: 80px repeat(5, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>
            <span>Dot</span>

            {Badge.options.fillMode.map((fillMode) => (
                <>
                    <div className="k-col-span-full k-text-center">{fillMode}</div>

                    <span>inline</span>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} cutoutBorder>Rect</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="medium" cutoutBorder>Round</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" cutoutBorder>Pill</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" cutoutBorder>1</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" cutoutBorder></BadgeNormal>
                    </div>

                    <span>inside</span>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} position="inside" align="top-start" cutoutBorder>Rect</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="medium" position="inside" align="top-start" cutoutBorder>Round</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="inside" align="top-start" cutoutBorder>Pill</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="inside" align="top-start" cutoutBorder>1</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="inside" align="top-start" cutoutBorder></BadgeNormal>
                    </div>

                    <span>edge</span>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} position="edge" align="top-start" cutoutBorder>Rect</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="medium" position="edge" align="top-start" cutoutBorder>Round</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="edge" align="top-start" cutoutBorder>Pill</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="edge" align="top-start" cutoutBorder>1</BadgeNormal>
                    </div>
                    <div className="k-badge-container">
                        <BadgeNormal fillMode={fillMode} rounded="full" position="edge" align="top-start" cutoutBorder></BadgeNormal>
                    </div>
                </>
            ))}
        </div>
    </>
);
