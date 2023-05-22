import { Checkbox } from '../../checkbox';


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

            <span>small</span>
            <span>
                <Checkbox size="small" rounded="small" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="medium" rounded="small" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="large" rounded="small" checked />
                checkbox
            </span>

            <span>medium</span>
            <span>
                <Checkbox size="small" rounded="medium" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="medium" rounded="medium" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="large" rounded="medium" checked />
                checkbox
            </span>

            <span>large</span>
            <span>
                <Checkbox size="small" rounded="large" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="medium" rounded="large" checked />
                checkbox
            </span>
            <span>
                <Checkbox size="large" rounded="large" checked />
                checkbox
            </span>

        </div>
    </>
);
