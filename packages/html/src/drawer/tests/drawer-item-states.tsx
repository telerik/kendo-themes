import { DrawerItem, DrawerNormal } from '..';

const styles = `
    #test-area .k-drawer-content {
        padding: 0 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <DrawerNormal items={
                <>
                    {[ 'normal', ...DrawerItem.states ].map((state) => (
                        <DrawerItem text={`Item state: ${state}`} {...{ [state]: true }} icon="star-outline" />
                    ))}
                    <DrawerItem text="Item state: selected + hover" selected hover icon="star-outline" />
                    <DrawerItem text="Item state: selected + focus" selected focus icon="star-outline" />
                </>
            }>
            </DrawerNormal>
        </div>
    </>
);
