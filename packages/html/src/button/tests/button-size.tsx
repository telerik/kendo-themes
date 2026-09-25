import { Button } from '../button.spec';
import { TextButton } from '../templates/text-button';
import { IconTextButton } from '../templates/icon-text-button';
import { IconButton } from '../templates/icon-button';


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
            {Button.options.size.map((size) => (
                <div className="button-size-grid k-d-grid">
                    <span><small>Rounded value</small></span>
                    <span>{`${size}`}</span>
                    {Button.options.rounded.map((roundness) => (
                        <>
                            <span>{`${roundness}`}</span>
                            <section>
                                <TextButton size={size} rounded={roundness}></TextButton>
                                <IconTextButton size={size} rounded={roundness} ></IconTextButton>
                                <Button size={size} rounded={roundness} endIcon="folder">Button</Button>
                                <Button size={size} rounded={roundness} icon="folder" endIcon="folder">Button</Button>
                                <IconButton size={size} rounded={roundness} ></IconButton>
                            </section>
                        </>
                    ))}
                </div>
            ))}
        </div>

    </>
);
