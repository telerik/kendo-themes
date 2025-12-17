import { MaskedTextbox, MaskedTextboxNormal } from '../../maskedtextbox';

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

            { MaskedTextbox.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { MaskedTextbox.options.size.map((size) => (
                        <>
                            <div>
                                <MaskedTextboxNormal size={size} rounded={rounded} value="MaskedTextbox"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);