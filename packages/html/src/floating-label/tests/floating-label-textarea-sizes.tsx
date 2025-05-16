import { FloatingLabelNormal } from '..';
import { Input } from '../../input';
import { TextareaNormal, TextareaPrefix } from '../../textarea';

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

            <span>textarea</span>


            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label">
                        <TextareaNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea border</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" position="border">
                        <TextareaNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>textarea inside</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" position="inside">
                        <TextareaNormal size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>(custom) horizontal offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "33px" }} label="Label">
                    <TextareaNormal size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "37px" }} label="Label">
                    <TextareaNormal/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "41px" }} label="Label">
                    <TextareaNormal size="large"/>
                </FloatingLabelNormal>
            </div>

            <span>(custom) vertical offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "46px" }} label="Label">
                    <TextareaPrefix size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "50px" }} label="Label">
                    <TextareaPrefix />
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
