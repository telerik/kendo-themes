import { FloatingLabelNormal } from '..';
import { DropdownList } from '../../dropdownlist';
import { Input } from '../../input';

const styles = `
    #test-area {
        grid-template-columns: 100px repeat(3, 1fr);
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

            <span>DropdownList</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label">
                        <DropdownList size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>DropdownList border</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" position="border">
                        <DropdownList size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>DropdownList inside</span>

            {Input.options.size.map((size) => (
                <div>
                    <FloatingLabelNormal label="Label" position="inside">
                        <DropdownList size={size}/>
                    </FloatingLabelNormal>
                </div>
            ))}

            <span>(custom) horizontal offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "33px" }} label="Label">
                    <DropdownList size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "37px" }} label="Label">
                    <DropdownList />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-x": "41px" }} label="Label">
                    <DropdownList size="large"/>
                </FloatingLabelNormal>
            </div>

            <span>(custom) vertical offset</span>

            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "20px" }} label="Label">
                    <DropdownList size="small"/>
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "20px" }} label="Label">
                    <DropdownList />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal style={{ "--kendo-floating-label-offset-y": "20px" }} label="Label">
                    <DropdownList size="large"/>
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
