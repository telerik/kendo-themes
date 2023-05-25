import { Checkbox, CheckboxNormal } from '../../checkbox';


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
                        <CheckboxNormal size="small" rounded={rounded} checked />
                        checkbox
                    </span>
                    <span>
                        <CheckboxNormal size="medium" rounded={rounded} checked />
                        checkbox
                    </span>
                    <span>
                        <CheckboxNormal size="large" rounded={rounded} checked />
                        checkbox
                    </span>
                </>
            ))}
        </div>
    </>
);
