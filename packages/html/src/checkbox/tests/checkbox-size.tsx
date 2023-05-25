import { Checkbox, CheckboxLabel } from '../../checkbox';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="ch1" checked >Checked</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="ch1" disabled checked >Checked</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="ch3" >Unchecked</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="ch4" disabled >Unchecked</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="chInd" indeterminate >Indeterminate</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="chIndDis" indeterminate disabled >Indeterminate</CheckboxLabel>
                </div>
            ))}

            <span></span>
            {Checkbox.options.size.map((size) => (
                <div key={size}>
                    <CheckboxLabel size={size} id="chError" invalid required>Invalid</CheckboxLabel>
                </div>
            ))}
        </div>
    </>
);
