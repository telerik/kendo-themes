import { BadgeNormal, BadgePositioned } from '..';

const positions = [ 'inside', 'edge', 'outside' ] as const;
const aligns = [ 'top-start', 'top-end', 'bottom-start', 'bottom-end' ] as const;

const styles = `
    .k-badge-container {
        padding: 5px;
        width: 80px;
        min-height: 30px;
        border: 1px dashed black;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-7">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon + Text</span>
            <span>Icon</span>
            <span>Number</span>
            <span>Empty</span>

            {[ false, true ].map((rtl) => (
                <>
                    <span>{rtl ? 'Inline RTL' : 'Inline'}</span>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid">Text</BadgeNormal></div>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid" endIcon="plus-circle">Text</BadgeNormal></div>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid" icon="plus-circle">Text</BadgeNormal></div>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid" icon="plus-circle" /></div>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid">1</BadgeNormal></div>
                    <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`}><BadgeNormal fillMode="solid"></BadgeNormal></div>
                </>
            ))}

            <span className="k-col-span-full"></span>

            <span></span>
            <span>top start</span>
            <span>top end</span>
            <span>bottom start</span>
            <span>bottom end</span>
            <span className="k-col-span-2"></span>

            {[ false, true ].map((rtl) => (
                <>
                    {positions.map((position) => (
                        <>
                            <span>{`${position}${rtl ? ' RTL' : ''}`}</span>
                            {aligns.map((align) => (
                                <div className={`k-badge-container${rtl ? ' k-rtl' : ''}`} key={align}>
                                    <BadgePositioned fillMode="solid" rounded="medium" position={position} align={align}>Rect</BadgePositioned>
                                </div>
                            ))}
                            <span className="k-col-span-2"></span>
                        </>
                    ))}

                    <span className="k-col-span-full"></span>
                </>
            ))}
        </div>
    </>
);
