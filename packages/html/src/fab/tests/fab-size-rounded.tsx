import { FloatingActionButton, IconFloatingActionButton, IconTextFloatingActionButton, TextFloatingActionButton } from '..';


const styles = `
    #test-area {
        max-width: 1200px;
        grid-template-columns: auto repeat(3, 1fr);
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>
            {[ null, ...FloatingActionButton.options.rounded ].map((rounded) => (
                <>
                    <span>{String(rounded)}</span>
                    {FloatingActionButton.options.size.map((size) => (
                        <span className="k-d-flex k-gap-1">
                            <TextFloatingActionButton rounded={rounded} size={size} />
                            <IconTextFloatingActionButton rounded={rounded} size={size} />
                            <IconFloatingActionButton rounded={rounded} size={size} />
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
