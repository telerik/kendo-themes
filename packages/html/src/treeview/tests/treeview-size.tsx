import { Treeview, TreeviewItem } from '../../treeview';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <section>
                <Treeview size="small">
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hasChildren hover />
                    <TreeviewItem text="Focus" hasChildren focus />
                    <TreeviewItem text="Selected" hasChildren selected />
                    <TreeviewItem text="Selected focus" hasChildren selected focus />
                    <TreeviewItem text="Disabled" hasChildren disabled />
                    <TreeviewItem text="Disabled focus" hasChildren disabled focus />
                    <TreeviewItem text="Icon" showIcon icon="folder" />
                    <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                </Treeview>
            </section>
            <section>
                <Treeview size="medium">
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hasChildren hover />
                    <TreeviewItem text="Focus" hasChildren focus />
                    <TreeviewItem text="Selected" hasChildren selected />
                    <TreeviewItem text="Selected focus" hasChildren selected focus />
                    <TreeviewItem text="Disabled" hasChildren disabled />
                    <TreeviewItem text="Disabled focus" hasChildren disabled focus />
                    <TreeviewItem text="Icon" showIcon icon="folder" />
                    <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                </Treeview>
            </section>
            <section>
                <Treeview size="large">
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hasChildren hover />
                    <TreeviewItem text="Focus" hasChildren focus />
                    <TreeviewItem text="Selected" hasChildren selected />
                    <TreeviewItem text="Selected focus" hasChildren selected focus />
                    <TreeviewItem text="Disabled" hasChildren disabled />
                    <TreeviewItem text="Disabled focus" hasChildren disabled focus />
                    <TreeviewItem text="Icon" showIcon icon="folder" />
                    <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                </Treeview>
            </section>
        </div>
    </>
);
