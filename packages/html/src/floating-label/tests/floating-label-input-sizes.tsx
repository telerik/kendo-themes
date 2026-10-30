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
                    <FloatingLabelNormal label="Label">
                        <TextboxPrefix size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea w/ prefix</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label">
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
