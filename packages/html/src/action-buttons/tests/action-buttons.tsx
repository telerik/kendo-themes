import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-actions {
        outline: 1px dotted;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>start</span>
            <span>end</span>
            <div>
                <ActionButtons alignment="start">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons alignment="end">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>center</span>
            <span>stretch</span>
            <div>
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl start</span>
            <span>rtl end</span>
            <div dir="rtl">
                <ActionButtons alignment="start">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons alignment="end">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl center</span>
            <span>rtl stretch</span>
            <div dir="rtl">
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
        </div>

    </>
);
