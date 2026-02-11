import { Combobox } from '../../combobox/combobox.spec';
import { ComboboxNormal } from '../../combobox/templates/combobox-normal';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { Combobox.options.rounded.map((rounded) => (
                <>
                    <span>{`${rounded}`}</span>
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
