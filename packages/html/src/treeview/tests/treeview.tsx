import { TreeviewItem, TreeviewNormal, TreeviewHierarchy, TreeviewIcons, TreeviewCheckboxes } from '../../treeview';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>states</span>
            <span>states (rtl)</span>
            <span>hierarchy</span>
            <span>hierarchy (rtl)</span>

            <section>
                <TreeviewNormal>
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hover />
                    <TreeviewItem text="Focus" focus/>
                    <TreeviewItem text="Selected" selected/>
                    <TreeviewItem text="Selected focus" selected focus/>
                    <TreeviewItem text="Disabled" disabled/>
                    <TreeviewItem text="Disabled focus" disabled focus/>
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..."/>
                </TreeviewNormal>
            </section>
            <section>
                <TreeviewNormal dir="rtl">
                    <TreeviewItem text="Normal" />
                    <TreeviewItem text="Hover" hover />
                    <TreeviewItem text="Focus" focus/>
                    <TreeviewItem text="Selected" selected/>
                    <TreeviewItem text="Selected focus" selected focus/>
                    <TreeviewItem text="Disabled" disabled/>
                    <TreeviewItem text="Disabled focus" disabled focus/>
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." hover />
                </TreeviewNormal>
            </section>
            <section>
                <TreeviewHierarchy />
            </section>
            <section>
                <TreeviewHierarchy dir="rtl" />
            </section>

            <span>icons</span>
            <span>icons (rtl)</span>
            <span>checkboxes</span>
            <span>checkboxes (rtl)</span>

            <section>
                <TreeviewIcons />
            </section>
            <section>
                <TreeviewIcons dir="rtl" />
            </section>

            <section>
                <TreeviewCheckboxes />
            </section>
            <section>
                <TreeviewCheckboxes dir="rtl" />
            </section>
        </div>
    </>
);
