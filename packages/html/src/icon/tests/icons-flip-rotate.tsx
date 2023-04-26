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
            <span className="k-colspan-8 k-text-left">Rotate Font Icon</span>

            <span>0deg</span>
            <span>45deg</span>
            <span>90deg</span>
            <span>135deg</span>
            <span>180deg</span>
            <span>225deg </span>
            <span>270deg</span>
            <span>315deg</span>

            <span>
                <Icon icon="hand" size="xlarge" rotate="0" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="45" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="90" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="135" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="180" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="225" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="270" type="font" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="315" type="font" />
            </span>

            <span className="k-colspan-8 k-text-left">Rotate SVG Icon</span>

            <span>0deg</span>
            <span>45deg</span>
            <span>90deg</span>
            <span>135deg</span>
            <span>180deg</span>
            <span>225deg </span>
            <span>270deg</span>
            <span>315deg</span>

            <span>
                <Icon icon="hand" size="xlarge" rotate="0" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="45" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="90" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="135" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="180" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="225" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="270" />
            </span>
            <span>
                <Icon icon="hand" size="xlarge" rotate="315" />
            </span>

            <span className="k-colspan-8 k-text-left">Flip Font Icon</span>

            <span>none</span>
            <span>vertical</span>
            <span>horizontal</span>
            <span>both</span>
            <span className="k-colspan-4"></span>

            <span>
                <Icon icon="folder-open" size="xlarge" type="font" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="v" type="font" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="h" type="font" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="both" type="font" />
            </span>
            <span className="k-colspan-4"></span>

            <span className="k-colspan-8 k-text-left">Flip SVG Icon</span>

            <span>none</span>
            <span>vertical</span>
            <span>horizontal</span>
            <span>both</span>
            <span className="k-colspan-4"></span>

            <span>
                <Icon icon="folder-open" size="xlarge" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="v" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="h" />
            </span>
            <span>
                <Icon icon="folder-open" size="xlarge" flip="both" />
            </span>
            <span className="k-colspan-4"></span>

        </div>
    </>
);
