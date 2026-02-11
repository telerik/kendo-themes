import { Checkbox } from '../checkbox.spec';
import { CheckboxChecked } from '../templates/checkbox-checked';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size </small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {Checkbox.options.rounded.map((rounded) => (
                <>
                    <span>{`${rounded}`}</span>
                    {Checkbox.options.size.map((size) => (
                        <span>
                            <CheckboxChecked size={size} rounded={rounded} />
                            checkbox
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
