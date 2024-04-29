import { Button } from '../../button';
import { IconButtonGroup } from '../../button-group';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
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

            {[ "null", ...Button.options.rounded ].map((rounded) => (
                <>
                    <span>{rounded}</span>
                    {Button.options.size.map((size) => (
                        <span>
                            <IconButtonGroup size={size} rounded={rounded}/>
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
