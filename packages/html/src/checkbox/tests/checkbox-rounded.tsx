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

            {[ null,...Checkbox.options.rounded ].map((rounded) => (
                <>
                    <span>{rounded || 'none'}</span>
                    <span>
                        <label className="k-checkbox-label">
                            <CheckboxChecked size="small" rounded={rounded} />
                            checkbox
                        </label>
                    </span>
                    <span>
                        <label className="k-checkbox-label">
                            <CheckboxChecked size="medium" rounded={rounded} />
                            checkbox
                        </label>
                    </span>
                    <span>
                        <label className="k-checkbox-label">
                            <CheckboxChecked size="large" rounded={rounded} />
                            checkbox
                        </label>
                    </span>
                </>
            ))}
        </div>
    </>
);
