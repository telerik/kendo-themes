import ReactDOM from 'react-dom/client';
import { LoaderContainer } from '../../loader';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .example {
        width: 100%;
        min-height: 200px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Primary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'primary'} overlay={'dark'} panel={true} />
            </span>

            <span>Secondary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'secondary'} overlay={'dark'} panel={true} />
            </span>

            <span>Tertiary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'tertiary'} overlay={'dark'} panel={true} />
            </span>

            <span>Info</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'info'} overlay={'dark'} panel={true} />
            </span>

            <span>Success</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'success'} overlay={'dark'} panel={true} />
            </span>

            <span>Warning</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'warning'} overlay={'dark'} panel={true} />
            </span>

            <span>Error</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'error'} overlay={'dark'} panel={true} />
            </span>

            <span>Dark</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'dark'} overlay={'dark'} panel={true} />
            </span>

            <span>Light</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'light'} overlay={'dark'} panel={true} />
            </span>

            <span>Inverse</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} themeColor={'inverse'} overlay={'dark'} panel={true} />
            </span>
        </div>
    </>
);
