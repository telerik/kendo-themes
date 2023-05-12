import { FloatingLabel } from '../../floating-label';
import { Textbox } from '../../textbox';
import { Combobox } from '../../combobox';
import { Textarea } from '../../textarea';


const styles = `
    #test-area {
        width: 660px;
    }
    .k-floating-label-container {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Floating label flat</span>
            <span>Floating label flat RTL</span>

            <div>
                <FloatingLabel label="Textbox label" empty>
                    <Textbox fillMode="flat" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" empty>
                    <Textbox fillMode="flat" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox fillMode="flat" placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox with placeholder and floating label" empty>
                    <Textbox fillMode="flat" placeholder="Placeholder" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox fillMode="flat" placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Focused Textbox with placeholder" empty focus>
                    <Textbox fillMode="flat" placeholder="Placeholder" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" empty>
                    <Combobox fillMode="flat" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" empty>
                    <Combobox fillMode="flat" />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="flat" value="Textbox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="flat" value="Textbox value" />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="flat" value="Combobox value" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="flat" value="Combobox value" />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="flat" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label">
                    <Textbox fillMode="flat" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="flat" value="Hover" hover />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label">
                    <Combobox fillMode="flat" value="Hover" hover />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" focus>
                    <Textbox fillMode="flat" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" focus>
                    <Textbox fillMode="flat" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" focus>
                    <Combobox fillMode="flat" value="Focus" focus />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" focus>
                    <Combobox fillMode="flat" value="Focus" focus />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox fillMode="flat" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" disabled>
                    <Textbox fillMode="flat" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox fillMode="flat" value="Disabled" disabled />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" disabled>
                    <Combobox fillMode="flat" value="Disabled" disabled />
                </FloatingLabel>
            </div>

            <div>
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox fillMode="flat" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textbox label" invalid>
                    <Textbox fillMode="flat" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox fillMode="flat" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Combobox label" invalid>
                    <Combobox fillMode="flat" value="Invalid value" invalid />
                </FloatingLabel>
            </div>
            <div>
                <FloatingLabel label="Textarea label" empty>
                    <Textarea fillMode="flat" />
                </FloatingLabel>
            </div>
            <div dir="rtl">
                <FloatingLabel label="Textarea label" empty>
                    <Textarea fillMode="flat" />
                </FloatingLabel>
            </div>
        </div>
    </>
);
