import React from 'react';
import ReactDOM from 'react-dom/client';
import { Popover } from '../../popover';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-popover {
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout bottom</span>
            <span>Callout left</span>
            <span>Empty body fixed height</span>

            <section>
                <Popover callout="top" title="Title" body="Body content">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </Popover>
            </section>

            <section>
                <Popover callout="right" title="Title" body="Body content">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </Popover>
            </section>

            <section>
                <Popover callout="bottom" title="Title" body="Body content">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </Popover>
            </section>

            <section>
                <Popover callout="left" title="Title" body="Body content">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </Popover>
            </section>

            <section>
                <Popover callout="left" title="Title" body="" style={{ height: "150px" }}>
                </Popover>
            </section>
        </div>
    </>
);
