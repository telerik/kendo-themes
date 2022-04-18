import React from 'react';
import ReactDOM from 'react-dom/client';
import { SplitButton } from '../../split-button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>state / fillmode</small></span>
            <span>solid</span>
            <span>outline</span>
            <span>flat</span>

            <span>normal</span>
            <span>
                <SplitButton icon="save">Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="outline" icon="save">Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="flat" icon="save">Button</SplitButton>
            </span>

            <span>hover</span>
            <span>
                <SplitButton icon="save" hover>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="outline" icon="save" hover>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="flat" icon="save" hover>Button</SplitButton>
            </span>

            <span>focus</span>
            <span>
                <SplitButton icon="save" focus>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="outline" icon="save" focus>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="flat" icon="save" focus>Button</SplitButton>
            </span>

            <span>active</span>
            <span>
                <SplitButton icon="save" active>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="outline" icon="save" active>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="flat" icon="save" active>Button</SplitButton>
            </span>

            <span>disabled</span>
            <span>
                <SplitButton icon="save" disabled>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="outline" icon="save" disabled>Button</SplitButton>
            </span>
            <span>
                <SplitButton fillMode="flat" icon="save" disabled>Button</SplitButton>
            </span>

            <span>rtl</span>
            <span dir="rtl">
                <SplitButton icon="save">Button</SplitButton>
            </span>
            <span dir="rtl">
                <SplitButton fillMode="outline" icon="save">Button</SplitButton>
            </span>
            <span dir="rtl">
                <SplitButton fillMode="flat" icon="save">Button</SplitButton>
            </span>
        </div>
    </>
);
