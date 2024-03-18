import { DrawerWithHierarchy } from '..';

const styles = `
    #test-area .k-drawer-content {
        padding: 0 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>hierarchical items</span>
            <span></span>

            <section>
                <DrawerWithHierarchy />
            </section>

        </div>
    </>
);
