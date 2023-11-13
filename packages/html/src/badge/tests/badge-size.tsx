import { Badge, BadgeNormal } from '../../badge';


const styles = `
    #test-area {
        grid-template-columns: 80px repeat(8, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span className="col-2">Rectangle</span>
            <span className="col-2">Rounded</span>
            <span className="col-2">Pill</span>
            <span className="col">Circle</span>
            <span className="col">Dot</span>

            {Badge.options.fillMode.map((fillMode) => (
                <>
                    <div className="k-col-span-full k-text-center">{fillMode}</div>

                    {Badge.options.size.map((size) => (
                        <>
                            <span>{size}</span>
                            <span><BadgeNormal fillMode={fillMode} size={size}>Rectangle</BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size}></BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="small">Rounded</BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="small"></BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="full">Pill</BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="full"></BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="full">1</BadgeNormal></span>
                            <span><BadgeNormal fillMode={fillMode} size={size} rounded="full"></BadgeNormal></span>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
