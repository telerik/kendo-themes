import { Combobox, ComboboxNormal } from '../../combobox';

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

            { Combobox.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { Combobox.options.size.map((size) => (
                        <>
                            <div>
                                <ComboboxNormal size={size} rounded={rounded} value="Combobox"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);