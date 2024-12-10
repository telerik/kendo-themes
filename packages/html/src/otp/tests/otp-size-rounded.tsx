import { OneTimePasswordNormal } from '..';
import { Input } from '../../input';

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 320px 320px 1fr;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>
                <small>rounded / size</small>
            </span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { Input.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { Input.options.size.map((size) => (
                        <>
                            <div>
                                <OneTimePasswordNormal size={size} rounded={rounded} value="0"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
