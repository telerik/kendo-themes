import { Treeview, TreeviewHierarchy } from '../../treeview';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { Treeview.options.size.map((size) => (
                <TreeviewHierarchy size={size} />
            ))}
        </div>
    </>
);
