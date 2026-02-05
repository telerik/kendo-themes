import { List, ListNormal, ListWithGrouping } from '../../list';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            { List.options.size.map((size) => (
                <span>{`${size}`}</span>
            ))}

            { List.options.size.map((size) => (
                <ListNormal size={size} />
            ))}

            <span className="k-colspan-all k-col-span-full">universal grouping and sticky header</span>
            { List.options.size.map((size) => (
                <ListWithGrouping size={size} ></ListWithGrouping>
            ))}
        </div>
    </>
);
