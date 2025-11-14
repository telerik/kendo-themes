import { List, ListNormal, ListWithGrouping, ListWithGroupingModern, ListWithGroupingAccessible } from '../../list';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-6">

            <span className="k-col-span-3">normal</span>
            <span className="k-col-span-3">classic grouping</span>

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { List.options.size.map((size) => (
                <ListNormal size={size} />
            ))}

            { List.options.size.map((size) => (
                <ListWithGrouping size={size} ></ListWithGrouping>
            ))}

            <span className="k-col-span-3">modern grouping</span>
            <span className="k-col-span-3">accessible grouping</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { List.options.size.map((size) => (
                <ListWithGroupingModern size={size} ></ListWithGroupingModern>
            ))}

            { List.options.size.map((size) => (
                <ListWithGroupingAccessible size={size} ></ListWithGroupingAccessible>
            ))}
        </div>
    </>
);
