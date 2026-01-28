import { ListNormal, ListVirtualization, ListItem } from '../../list';
import { Icon } from '../../icon';
import { IconButton } from '../../button';

const style = `
    #test-area {
        max-width: 600px;
    }

    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Static list</span>
            <span>Virtual list</span>

            <section dir="rtl">
                <ListNormal>
                    <ListItem>List Item</ListItem>
                    <ListItem>List Item</ListItem>
                </ListNormal>
            </section>

            <section dir="rtl">
                <ListVirtualization>
                    <ListItem>List Item</ListItem>
                    <ListItem>List Item</ListItem>
                </ListVirtualization>
            </section>

            <span>Static list with icons and actions</span>
            <span>Virtual list with icons and actions</span>

            <section dir="rtl">
                <ListNormal>
                    <ListItem iconName="gear">Icon</ListItem>
                    <ListItem iconName="gear"
                              description='Item with description'>
                    Icon and description</ListItem>
                    <ListItem actions={
                        <>
                            <IconButton icon="bold" size="small" />
                            <Icon icon="check" />

                        </>
                    }>Actions</ListItem>
                    <ListItem iconName="gear"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }>Icon+Actions</ListItem>
                    <ListItem description="Item with actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }>Actions+description</ListItem>
                    <ListItem iconName="gear"
                              description="Item with icon, actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }> Icon+Actions+description </ListItem>
                    <ListItem showCheckbox
                              iconName="gear">
                    Checkbox + icon</ListItem>
                    <ListItem showCheckbox
                              iconName="gear"
                              description="Item with actions and description">
                    Checkbox + icon + description</ListItem>
                    <ListItem showCheckbox
                              iconName="gear"
                              description="Item with actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                                }>
                    Checkbox + icon + actions + description</ListItem>
                </ListNormal>
            </section>

            <section dir="rtl">
                <ListVirtualization>
                    <ListItem iconName="gear">Icon</ListItem>
                    <ListItem iconName="gear"
                              description='Item with description'>
                    Icon and description</ListItem>
                    <ListItem actions={
                        <>
                            <Icon icon="check" />

                        </>
                    }>Actions</ListItem>
                    <ListItem iconName="gear"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }>Icon+Actions</ListItem>
                    <ListItem description="Item with actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }>Actions+description</ListItem>
                    <ListItem iconName="gear"
                              description="Item with icon, actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                    }> Icon+Actions+description </ListItem>
                    <ListItem showCheckbox
                              iconName="gear">
                    Checkbox + icon</ListItem>
                    <ListItem showCheckbox
                              iconName="gear"
                              description="Item with actions and description">
                    Checkbox + icon + description</ListItem>
                    <ListItem showCheckbox
                              iconName="gear"
                              description="Item with actions and description"
                              actions={
                                <>
                                    <IconButton icon="bold" size="small" />
                                    <Icon icon="check" />
                                </>
                                }>
                    Checkbox + icon + actions + description</ListItem>
                </ListVirtualization>
            </section>

        </div>
    </>
);
