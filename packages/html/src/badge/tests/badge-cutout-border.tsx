import { Badge, BadgeNormal, BadgePositioned } from '..';

const styles = `
    .k-badge-container {
        padding: 5px;
        width: 80px;
        min-height: 30px;
        box-sizing: border-box;
        background-color: var(--kendo-color-base);
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #test-area {
        grid-template-columns: 80px repeat(6, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon + Text</span>
            <span>Icon</span>
            <span>Number</span>
            <span>Empty</span>

            {Badge.options.fillMode.map((fillMode) => (
                <>
                    <div className="k-col-span-full k-text-center">{`${fillMode}`}</div>

                    <span>inline</span>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder>Text</BadgeNormal></div>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder endIcon="plus-circle">Text</BadgeNormal></div>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder icon="plus-circle">Text</BadgeNormal></div>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder icon="plus-circle" /></div>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder>1</BadgeNormal></div>
                    <div className="k-badge-container"><BadgeNormal fillMode={fillMode} cutoutBorder></BadgeNormal></div>

                    {([ 'inside', 'edge' ] as const).map((position) => (
                        <>
                            <span>{position}</span>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder>Text</BadgePositioned></div>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder endIcon="plus-circle">Text</BadgePositioned></div>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder icon="plus-circle">Text</BadgePositioned></div>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder icon="plus-circle" /></div>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder>1</BadgePositioned></div>
                            <div className="k-badge-container"><BadgePositioned fillMode={fillMode} position={position} align="top-start" cutoutBorder></BadgePositioned></div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
