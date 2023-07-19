import { NumericTextbox, NumericTextboxNormal } from '../../numerictextbox';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
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

            { NumericTextbox.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { NumericTextbox.options.size.map((size) => (
                        <>
                            <div>
                                <NumericTextboxNormal size={size} rounded={rounded} value="NumericTextbox"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);