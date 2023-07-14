import { SplitButton, TextSplitButton, IconTextSplitButton, IconSplitButton } from '../../split-button';

const styles = `
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
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { SplitButton.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { SplitButton.options.size.map((size) => (
                        <>
                            <div className="wrapper">
                                <TextSplitButton size={size} rounded={rounded} />
                                <IconTextSplitButton size={size} rounded={rounded} />
                                <IconSplitButton size={size} rounded={rounded} />
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);