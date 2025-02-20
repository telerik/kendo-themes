import { DrawerItem, DrawerNormal } from '..';

const styles = `
    #test-area .k-drawer-content {
        padding: 0 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-gap-6">
            <span>Drawer with icons</span>
            <section>
                <DrawerNormal items={
                    <>
                        {[ 'normal', ...DrawerItem.states ].map((state) => (
                            <DrawerItem text={`Item state: ${state}`} {...{ [state]: true }} icon="star" />
                        ))}
                        <DrawerItem text="Item state: selected + hover" selected hover icon="star" />
                        <DrawerItem text="Item state: selected + focus" selected focus icon="star" />
                    </>
                }>
                </DrawerNormal>
            </section>
            <span>Drawer with primary icons</span>
            <section>
                <DrawerNormal items={
                     <>
                        {[ 'normal', ...DrawerItem.states ].map((state) => (
                            <DrawerItem text={`Item state: ${state}`} {...{ [state]: true }} icon="star" iconThemeColor="primary" />
                        ))}
                        <DrawerItem text="Item state: selected + hover" selected hover icon="star" iconThemeColor="primary" />
                        <DrawerItem text="Item state: selected + focus" selected focus icon="star" iconThemeColor="primary" />
                    </>
                }>
                </DrawerNormal>
            </section>
        </div>
    </>
);
