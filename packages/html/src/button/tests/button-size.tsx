import { Button } from '../button.spec';
import { TextButton } from '../templates/text-button';
import { IconTextButton } from '../templates/icon-text-button';
import { IconButton } from '../templates/icon-button';


const styles = `
#test-area {
    max-width: 1240px;
    grid-template-columns: 80px 320px 320px 1fr;
}
small,
section {
    white-space: nowrap;
}
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>
            {[ null,...Button.options.rounded ].map((roundness) => (
                <>
                    <span>{roundness || 'null'}</span>
                    {Button.options.size.map((size) => (
                        <section>
                            <TextButton size={size} rounded={roundness}></TextButton>
                            <IconTextButton size={size} rounded={roundness} ></IconTextButton>
                            <IconButton aria-label="Folder" size={size} rounded={roundness} ></IconButton>
                        </section>
                    ))}
                </>
            ))}
        </div>

    </>
);
