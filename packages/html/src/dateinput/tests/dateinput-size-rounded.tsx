import { DateInput, DateInputNormal } from '../../dateinput';


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

            { DateInput.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DateInput.options.size.map((size) => (
                        <>
                            <div>
                                <label htmlFor={`dateinput-${rounded}-${size}`} className="k-label">Select date</label>
                                <DateInputNormal id={`dateinput-${rounded}-${size}`} showSpinButton={true} size={size} rounded={rounded} value="DateInput"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
