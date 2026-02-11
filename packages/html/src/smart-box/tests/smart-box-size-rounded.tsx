import { SmartBox } from '../smart-box.spec';
import { SmartBoxNormal } from '../templates/smart-box-normal';

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 1fr 1fr 1fr 1fr;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>
                <small>rounded / size</small>
            </span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { SmartBox.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { SmartBox.options.size.map((size) => (
                        <>
                            <div>
                                <SmartBoxNormal size={size} rounded={rounded} value="Smart box"/>
                            </div>
                        </>
                    ))}
                </>
            ))}

        </div>
    </>
);
