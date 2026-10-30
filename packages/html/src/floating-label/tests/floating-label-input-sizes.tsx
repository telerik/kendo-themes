import { FloatingLabelNormal } from '..';
import { Input } from '../../input';
import { TextareaNormal, TextareaPrefix } from '../../textarea';
import { TextboxNormal, TextboxPrefix } from '../../textbox';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(4, 1fr);
    }

    .k-floating-label-container {
        width: 100%;
    }
`;

// Prefixes are free-form content (icons, text, buttons) whose rendered width can't be known at
// CSS-compile time, so the automatic per-size offset can't account for them. When a prefix is
// present, compensate by extending the auto-detected offset with the prefix's own width.
const prefixOffsetX = { undefined: '24px', small: '20px', medium: '24px', large: '28px' };
const prefixOffsetY = { undefined: '28px', small: '24px', medium: '28px', large: '32px' };

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>with/input</span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>textbox</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label">
                        <TextboxNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea</span>


            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label">
                        <TextareaNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textbox w/ prefix</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal
                        style={{ "--kendo-floating-label-offset-x": `calc(var(--kendo-floating-label-size-offset-x) + ${prefixOffsetX[size as keyof typeof prefixOffsetX]})` }}
                        label="Label"
                    >
                        <TextboxPrefix size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea w/ prefix</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal
                        style={{ "--kendo-floating-label-offset-y": `calc(var(--kendo-floating-label-size-offset-y) + ${prefixOffsetY[size as keyof typeof prefixOffsetY]})` }}
                        label="Label"
                    >
                        <TextareaPrefix size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>(custom) manual offset override</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "50px" }} label="Label">
                    <TextboxPrefix/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "50px" }} label="Label">
                    <TextboxPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "50px" }} label="Label">
                    <TextboxPrefix size="medium"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "50px" }} label="Label">
                    <TextboxPrefix size="large"/>
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
