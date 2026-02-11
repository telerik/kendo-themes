import { Treeview } from '../../treeview/treeview.spec';
import { TreeviewHierarchy } from "../../treeview/templates/treeview-hierarchy";

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { Treeview.options.size.map((size) => (
                <TreeviewHierarchy size={size} />
            ))}
        </div>
    </>
);
