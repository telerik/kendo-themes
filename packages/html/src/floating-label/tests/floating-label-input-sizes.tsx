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

            <span>(custom) horizontal offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "39px" }} label="Label">
                    <TextboxPrefix/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "43px" }} label="Label">
                    <TextboxPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "47px" }} label="Label">
                    <TextboxPrefix size="medium"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "51px" }} label="Label">
                    <TextboxPrefix size="large"/>
                </FloatingLabelNormal>
            </div>

            <span>(custom) vertical offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "57px" }} label="Label">
                    <TextareaPrefix/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "53px" }} label="Label">
                    <TextareaPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "57px" }} label="Label">
                    <TextareaPrefix size="medium"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "65px" }} label="Label">
                    <TextareaPrefix size="large"/>
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
