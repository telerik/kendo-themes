import { Pager } from "../../pager/pager.spec";
import { PagerNormal } from "../../pager/templates/pager-normal";
import { PagerInput } from "../../pager/templates/pager-input";


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            { Pager.options.size.map((size) => (
                <>
                    <span>{`${size}`} numeric</span>
                    <PagerNormal size={size} itemsPerPage={500} />
                    <span>{`${size}`} input</span>
                    <PagerInput size={size} itemsPerPage={500} />
                </>
            ))}
        </div>
    </>
);
