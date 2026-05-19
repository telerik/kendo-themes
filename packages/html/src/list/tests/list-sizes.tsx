import { List, ListItem, ListNormal, ListWithGrouping } from '../../list';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span className="k-colspan-all k-col-span-full">List sizes with an empty list item <i>(empty item is represented with a dashed outline)</i></span>

            { List.options.size.map((size) => (
                <span>{`${size}`}</span>
            ))}

            { List.options.size.map((size) => (
                <ListNormal size={size}>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem style={{ outlineStyle: "dashed", outlineWidth: "1px", outlineOffset: "-1px", outlineColor: "var(--kendo-color-border-alt)" }}></ListItem>
                </ListNormal>
            ))}

            <span className="k-colspan-all k-col-span-full">Universal grouping and sticky header</span>
            { List.options.size.map((size) => (
                <ListWithGrouping size={size} ></ListWithGrouping>
            ))}
        </div>
    </>
);
