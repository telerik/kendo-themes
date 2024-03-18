import { DrawerMini, DrawerNormal } from '..';

const styles = `
    #test-area .k-drawer-content {
        padding: 0 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <h2 className="k-col-start-1 k-col-end-2 k-text-center">Drawer Push Mode</h2>
            <span>Drawer mini left</span>
            <section>
                <DrawerMini />
            </section>

            <span>Drawer mini right</span>
            <section>
                <DrawerMini position="end" />
            </section>


            <span>Drawer left</span>
            <section>
                <DrawerNormal width="280px" />
            </section>

            <span>Drawer right</span>
            <section>
                <DrawerNormal position="end" width="280px" />
            </section>
        </div>
    </>
);
