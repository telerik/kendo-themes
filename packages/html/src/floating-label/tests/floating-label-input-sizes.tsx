import { FloatingLabelNormal } from '..';
import { Input } from '../../input';
import { TextareaNormal, TextareaPrefix } from '../../textarea';
import { TextboxNormal, TextboxPrefix } from '../../textbox';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(3, 1fr);
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
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>textbox</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" empty>
                        <TextboxNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea</span>


            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" empty>
                        <TextareaNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>(custom) horizontal offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "33px" }} label="Label" empty>
                    <TextboxPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "37px" }} label="Label" empty>
                    <TextboxPrefix/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "41px" }} label="Label" empty>
                    <TextboxPrefix size="large"/>
                </FloatingLabelNormal>
            </div>

            <span>(custom) vertical offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "53px" }} label="Label" empty>
                    <TextareaPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "57px" }} label="Label" empty>
                    <TextareaPrefix/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "65px" }} label="Label" empty>
                    <TextareaPrefix size="large"/>
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
