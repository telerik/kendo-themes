import { MultiSelect, MultiSelectValue } from '../../multiselect';

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

            { MultiSelect.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { MultiSelect.options.size.map((size) => (
                        <>
                            <div>
                                <MultiSelectValue size={size} rounded={rounded} >Multiselect</MultiSelectValue>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);