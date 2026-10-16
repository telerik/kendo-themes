import { MenuButton, IconMenuButton, IconTextMenuButton, TextMenuButton } from '../../menu-button';

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
            {MenuButton.options.size.map((size) => (
                <div className="button-size-grid k-d-grid">
                    <span><small>Rounded / Size</small></span>
                    <span>{`${size}`}</span>
                    {MenuButton.options.rounded.map((rounded) => (
                        <>
                            <span>{`${rounded}`}</span>
                            <section>
                                <TextMenuButton size={size} rounded={rounded}>text</TextMenuButton>
                                <IconTextMenuButton size={size} rounded={rounded}>text</IconTextMenuButton>
                                <TextMenuButton size={size} rounded={rounded} endIcon="folder">text</TextMenuButton>
                                <IconTextMenuButton size={size} rounded={rounded} endIcon="folder">text</IconTextMenuButton>
                                <IconMenuButton size={size} rounded={rounded} />
                            </section>
                        </>
                    ))}
                </div>
            ))}
        </div>
    </>
);
