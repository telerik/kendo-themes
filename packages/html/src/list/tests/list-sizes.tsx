import { List, ListNormal, ListWithGrouping, ListWithGroupingModern } from '../../list';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { List.options.size.map((size) => (
                <ListNormal size={size} />
            ))}

            <span className="k-colspan-all k-col-span-full">universal grouping</span>
            { List.options.size.map((size) => (
                <ListWithGrouping size={size} ></ListWithGrouping>
            ))}

            <span className="k-colspan-all k-col-span-full">angular grouping</span>
            { List.options.size.map((size) => (
                <ListWithGroupingModern size={size} ></ListWithGroupingModern>
            ))}
        </div>
    </>
);
