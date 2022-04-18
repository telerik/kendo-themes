import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuButton } from '../../menu-button';

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
                <MenuButton icon="save"text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save"text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save"text="Button"></MenuButton>
            </span>

            <span>hover</span>
            <span>
                <MenuButton icon="save" hover text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save" hover text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save" hover text="Button"></MenuButton>
            </span>

            <span>focus</span>
            <span>
                <MenuButton icon="save" focus text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save" focus text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save" focus text="Button"></MenuButton>
            </span>

            <span>active</span>
            <span>
                <MenuButton icon="save" active text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save" active text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save" active text="Button"></MenuButton>
            </span>

            <span>disabled</span>
            <span>
                <MenuButton icon="save" disabled text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save" disabled text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save" disabled text="Button"></MenuButton>
            </span>

            <span>rtl</span>
            <span>
                <MenuButton icon="save" dir="rtl" text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="outline" icon="save" dir="rtl" text="Button"></MenuButton>
            </span>
            <span>
                <MenuButton fillMode="flat" icon="save" dir="rtl" text="Button"></MenuButton>
            </span>

        </div>
    </>
);
