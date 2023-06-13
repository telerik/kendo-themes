import { DateTimePicker, DateTimePickerNormal } from '../../datetimepicker';


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

            { DateTimePicker.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DateTimePicker.options.size.map((size) => (
                        <>
                            <div>
                                <DateTimePickerNormal size={size} rounded={rounded} value="DateTimePicker"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
