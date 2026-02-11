import { Button } from '../../button/button.spec';
import { IconButtonGroup } from '../templates/icon-button-group';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {Button.options.rounded.map((rounded: any) => (
                <>
                    <span>{`${rounded}`}</span>
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
