import { Checkbox, CheckboxChecked } from '../../checkbox';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size </small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {[ ...Checkbox.options.rounded ].map((rounded) => (
                <>
                    <span>{rounded}</span>
                    <span>
                        <CheckboxChecked size="small" rounded={rounded} />
                        checkbox
                    </span>
                    <span>
                        <CheckboxChecked size="medium" rounded={rounded} />
                        checkbox
                    </span>
                    <span>
                        <CheckboxChecked size="large" rounded={rounded} />
                        checkbox
                    </span>
                </>
            ))}
        </div>
    </>
);
