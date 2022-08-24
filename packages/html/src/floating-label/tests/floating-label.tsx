import React from 'react';
import ReactDOM from 'react-dom/client';
import { FloatingLabel } from '../../floating-label';
import { Textbox } from '../../textbox';
import { Combobox } from '../../combobox';
import { Textarea } from '../../textarea';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 660px;
    }
    .k-floating-label-container {
        width: 100%;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Floating label</span>
            <span>Floating label RTL</span>

            <div>
                <FloatingLabel label="Textbox label" empty>
                    <Textbox />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" empty>
                    <Textbox />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" empty>
                    <Combobox />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" empty>
                    <Combobox />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox value="Textbox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox value="Textbox value" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox value="Combobox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox value="Combobox value" />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox value="Hover" hover />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox value="Hover" hover />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" focus>
                    <Textbox value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" focus>
                    <Textbox value="Focus" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" focus>
                    <Combobox value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" focus>
                    <Combobox value="Focus" focus />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox value="Disabled" disabled />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textarea label" empty>
                    <Textarea />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textarea label" empty>
                    <Textarea />
                </FloatingLabel>
            </div>
        </div>
    </>
);
