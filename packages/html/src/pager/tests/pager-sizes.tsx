import { Pager, PagerNormal, PagerInput } from "../../pager";


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            { Pager.options.size.map((size) => (
                <>
                    <span>{size} numeric</span>
                    <PagerNormal size={size} itemsPerPage={500} />
                    <span>{size} input</span>
                    <PagerInput size={size} itemsPerPage={500} />
                </>
            ))}
        </div>
    </>
);
