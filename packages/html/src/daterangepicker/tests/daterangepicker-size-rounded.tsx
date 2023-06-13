import { DateRangePicker, DateRangePickerNormal } from '../../daterangepicker';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
    .k-daterangepicker .k-dateinput {
        width: 5em;
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

            { DateRangePicker.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DateRangePicker.options.size.map((size) => (
                        <>
                            <div>
                                <DateRangePickerNormal size={size} rounded={rounded} />
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);