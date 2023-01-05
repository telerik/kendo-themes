import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        text-align: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-7">
            <span>xs</span>
            <span>sm</span>
            <span>md</span>
            <span>lg</span>
            <span>xl</span>
            <span>xxl </span>
            <span>xxxl</span>

            <span>
                <Icon name="star" size="xs" />
            </span>
            <span>
                <Icon name="star" size="sm" />
            </span>
            <span>
                <Icon name="star" size="md" />
            </span>
            <span>
                <Icon name="star" size="lg" />
            </span>
            <span>
                <Icon name="star" size="xl" />
            </span>
            <span>
                <Icon name="star" size="xxl" />
            </span>
            <span>
                <Icon name="star" size="xxxl" />
            </span>
        </div>
    </>
);
