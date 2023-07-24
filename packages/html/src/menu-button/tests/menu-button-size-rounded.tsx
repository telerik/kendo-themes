import { MenuButton, IconMenuButton, IconTextMenuButton, TextMenuButton } from '../../menu-button';

const style = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 320px 320px 1fr;
    }
    .wrapper {
        display: flex;
        gap: 8px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { MenuButton.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { MenuButton.options.size.map((size) => (
                        <>
                            <div className="wrapper">
                                <TextMenuButton size={size} rounded={rounded} />
                                <IconTextMenuButton size={size} rounded={rounded} />
                                <IconMenuButton size={size} rounded={rounded} />
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
