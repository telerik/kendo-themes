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
            <span>Floating label outline</span>
            <span>Floating label outline RTL</span>

            <div>
                <FloatingLabel label="Textbox label" empty>
                    <Textbox fillMode="outline" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" empty>
                    <Textbox fillMode="outline" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox fillMode="outline" placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox fillMode="outline" placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox fillMode="outline" placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox fillMode="outline" placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" empty>
                    <Combobox fillMode="outline" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" empty>
                    <Combobox fillMode="outline" />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="outline" value="Textbox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="outline" value="Textbox value" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="outline" value="Combobox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="outline" value="Combobox value" />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="outline" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="outline" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="outline" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="outline" value="Hover" hover />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" focus>
                    <Textbox fillMode="outline" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" focus>
                    <Textbox fillMode="outline" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" focus>
                    <Combobox fillMode="outline" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" focus>
                    <Combobox fillMode="outline" value="Focus" focus />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox fillMode="outline" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox fillMode="outline" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox fillMode="outline" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox fillMode="outline" value="Disabled" disabled />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox fillMode="outline" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox fillMode="outline" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox fillMode="outline" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox fillMode="outline" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textarea label" empty>
                    <Textarea fillMode="outline" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textarea label" empty>
                    <Textarea fillMode="outline" />
                </FloatingLabel>
            </div>
        </div>
    </>
);
