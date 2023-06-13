import { DatePicker, DatePickerNormal } from '../../datepicker';

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

            { DatePicker.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DatePicker.options.size.map((size) => (
                        <>
                            <div>
                                <DatePickerNormal size={size} rounded={rounded} value="DatePicker"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
