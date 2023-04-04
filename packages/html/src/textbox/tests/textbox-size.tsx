import ReactDOM from 'react-dom/client';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 320px 320px 1fr;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>
                <small>rounded / size</small>
            </span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <div>
                <Textbox size="small" rounded={null} value="Normal" />
            </div>
            <div>
                <Textbox size="medium" rounded={null} value="Normal" />
            </div>
            <div>
                <Textbox size="large" rounded={null} value="Normal" />
            </div>

            <span>small</span>
            <div>
                <Textbox size="small" rounded="small" value="Normal" />
            </div>
            <div>
                <Textbox size="medium" rounded="small" value="Normal" />
            </div>
            <div>
                <Textbox size="large" rounded="small" value="Normal" />
            </div>

            <span>medium</span>
            <div>
                <Textbox size="small" rounded="medium" value="Normal" />
            </div>
            <div>
                <Textbox size="medium" rounded="medium" value="Normal" />
            </div>
            <div>
                <Textbox size="large" rounded="medium" value="Normal" />
            </div>

            <span>large</span>
            <div>
                <Textbox size="small" rounded="large" value="Normal" />
            </div>
            <div>
                <Textbox size="medium" rounded="large" value="Normal" />
            </div>
            <div>
                <Textbox size="large" rounded="large" value="Normal" />
            </div>

            <span>full</span>
            <div>
                <Textbox size="small" rounded="full" value="Normal" />
            </div>
            <div>
                <Textbox size="medium" rounded="full" value="Normal" />
            </div>
            <div>
                <Textbox size="large" rounded="full" value="Normal" />
            </div>
        </div>
    </>
);
