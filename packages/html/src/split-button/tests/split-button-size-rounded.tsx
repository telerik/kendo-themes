import { SplitButton, IconTextSplitButton, IconSplitButton, TextSplitButton } from '../../split-button';

const styles = `
    #test-area {
        max-width: 1240px;
        gap: 24px;
    }
    .button-size-grid {
        grid-template-columns: 120px 1fr;
        gap: 8px;
    }
    small,
    section {
        white-space: nowrap;
    }
    section {
        display: flex;
        gap: 8px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-flex k-flex-col">
            {SplitButton.options.size.map((size) => (
                <div className="button-size-grid k-d-grid">
                    <span><small>Rounded / Size</small></span>
                    <span>{`${size}`}</span>
                    {SplitButton.options.rounded.map((rounded) => (
                        <>
                            <span>{`${rounded}`}</span>
                            <section>
                                <TextSplitButton size={size} rounded={rounded}>text</TextSplitButton>
                                <IconTextSplitButton size={size} rounded={rounded}>text</IconTextSplitButton>
                                <TextSplitButton size={size} rounded={rounded} endIcon="folder">text</TextSplitButton>
                                <IconTextSplitButton size={size} rounded={rounded} endIcon="folder">text</IconTextSplitButton>
                                <IconSplitButton size={size} rounded={rounded} />
                            </section>
                        </>
                    ))}
                </div>
            ))}
        </div>
    </>
);
