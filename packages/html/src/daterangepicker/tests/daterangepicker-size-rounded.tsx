import ReactDOM from 'react-dom/client';
import { DateRangePicker } from '../../daterangepicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
    .k-daterangepicker .k-dateinput {
        width: 5em;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>small</span>
            <div>
                <DateRangePicker size="small" rounded="small" />
            </div>
            <div>
                <DateRangePicker size="medium" rounded="small" />
            </div>
            <div>
                <DateRangePicker size="large" rounded="small" />
            </div>
            <span>medium</span>
            <div>
                <DateRangePicker size="small" rounded="medium" />
            </div>
            <div>
                <DateRangePicker size="medium" rounded="medium" />
            </div>
            <div>
                <DateRangePicker size="large" rounded="medium" />
            </div>

            <span>large</span>
            <div>
                <DateRangePicker size="small" rounded="large" />
            </div>
            <div>
                <DateRangePicker size="medium" rounded="large" />
            </div>
            <div>
                <DateRangePicker size="large" rounded="large" />
            </div>

            <span>full</span>
            <div>
                <DateRangePicker size="small" rounded="full" />
            </div>
            <div>
                <DateRangePicker size="medium" rounded="full" />
            </div>
            <div>
                <DateRangePicker size="large" rounded="full" />
            </div>
        </div>
    </>
);
