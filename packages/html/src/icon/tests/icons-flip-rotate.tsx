import ReactDOM from 'react-dom/client';
import { Icon } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        gap: 15px;
        text-align: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-8">
            <span>Rotate</span>
            <span className="k-colspan-7"></span>

            <span>0deg</span>
            <span>45deg</span>
            <span>90deg</span>
            <span>135deg</span>
            <span>180deg</span>
            <span>225deg </span>
            <span>270deg</span>
            <span>315deg</span>

            <span>
                <Icon name="hand" size="xlarge" rotate="0" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="45" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="90" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="135" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="180" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="225" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="270" />
            </span>
            <span>
                <Icon name="hand" size="xlarge" rotate="315" />
            </span>

            <span>Flip</span>
            <span className="k-colspan-7"></span>

            <span>none</span>
            <span>vertical</span>
            <span>horizontal</span>
            <span className="k-colspan-5"></span>

            <span>
                <Icon name="folder-open" size="xlarge" />
            </span>
            <span>
                <Icon name="folder-open" size="xlarge" flip="v" />
            </span>
            <span>
                <Icon name="folder-open" size="xlarge" flip="h" />
            </span>

        </div>
    </>
);
