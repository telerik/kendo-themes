import { Pager } from '../../pager';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Large Numeric</span>
            <Pager size="large" />
            <span></span>
            <span>Large Input</span>
            <Pager size="large" type="input" />

            <span></span>
            <span>Medium Numeric</span>
            <Pager />
            <span></span>
            <span>Medium Input</span>
            <Pager type="input" />

            <span></span>
            <span>Small Numeric</span>
            <Pager size="small" />
            <span></span>
            <span>Small Input</span>
            <Pager size="small" type="input" />
        </div>
    </>
);
