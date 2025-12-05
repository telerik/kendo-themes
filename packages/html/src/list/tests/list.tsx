import { ListNormal, ListVirtualization, ListItem, ListGroup, ListAngular } from '../../list';
import { Icon } from '../../icon';
import { IconButton } from '../../button';

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item {
        position: relative;
    }

    .k-list-item:has(.k-list-item-wrapper),
    .k-list-item:has(.k-list-item-description) {
        flex-direction: column;
        align-items: flex-start;
    }

    .k-list-item-text {
        flex: 1;
    }

    .k-list-item-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    :root {
        --icon-offset: 16px;
    }

    .k-list-item-text:has(+ .k-icon) {
        padding-inline-end: calc(var(--icon-offset) + (4px + 8px));
    }


    .k-list .k-list-item:has(.k-list-item-wrapper >.k-icon) {
        padding-inline-start: 8px;
    }

      .k-list .k-list-item {
        padding-inline-start: calc(var(--icon-offset) + 8px);
    }

     .k-list .k-list-item:has(.k-list-item-wrapper >.k-icon) .k-list-item-description {
        padding-inline-start: calc(var(--icon-offset) + 4px);
    }

    .k-list-item-description {
        font-size: 12px;
        color: gray;
    }

    .k-virtual-list .k-list-item, .k-virtual-list .k-list-optionlabel, .k-virtual-list .k-list-group-item, .k-virtual-content .k-list-item, .k-virtual-content .k-list-optionlabel, .k-virtual-content .k-list-group-item {
        position: static;
    }

`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Static list</span>
            <span>Virtual list</span>
            <span>Static list (rtl)</span>
            <span>Virtual list (rtl)</span>

            <section>
                <ListNormal>
                    <ListItem>List item</ListItem>
                    <ListItem showIcon iconName="star" description="aaaaaaaaaaaaaaa">Hover</ListItem>
                    <ListItem description="aaaaaaaaaaaaaaa">Focus</ListItem>
                    <ListItem description="aaaaaaaaaaaaaaa" endContent={
                        <>
                               <IconButton icon="star" />
                             <Icon icon="star" />
                             <IconButton icon="star" />
                              <IconButton icon="star" />
                        </>}>List item with very long text, that</ListItem>
                        <ListItem description="aaaaaaaaaaaaaaa" showIcon iconName="star" endContent={
                        <>
                               <IconButton icon="star" />
                             <Icon icon="star" />
                             <IconButton icon="star" />
                              <IconButton icon="star" />
                        </>}>List item with very long text, that</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="gear">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="gear">Checkbox icon</ListItem>
                </ListNormal>
            </section>

            <section>
                <ListAngular>
                        <ListGroup label="Group 1" groupIcon groupIconName="star">
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                            <ListItem>List item 1.3</ListItem>
                        </ListGroup>
                        <ListGroup label="Group 2" groupIcon groupIconName="search">
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                            <ListItem>List item 2.3</ListItem>
                        </ListGroup>
                    </ListAngular>
            </section>

            <section>
               <ListVirtualization>
                    <ListItem>List item</ListItem>
                    <ListItem showIcon iconName="gear">List item with icon</ListItem>
                    <ListItem showIcon iconName="gear">List item with looooooooooooooooooo g icon</ListItem>
                    <ListItem showIcon iconName="gear" description='Long long long description'>Icon + description</ListItem>
                    <ListItem showIcon iconName="gear" description='Long long long description'>Icon + loooooooooooooooooong description</ListItem>
                    <ListItem showIcon iconName="gear" description='Long long long description'>Item with icons and long long description</ListItem>

                    <ListItem endContent={
                        <>
                               <IconButton icon="star" />
                             <Icon icon="star" />
                             <IconButton icon="star" />
                              <IconButton icon="star" />
                        </>
                    }>List item with coooooooooooontent</ListItem>
                    <ListItem showIcon iconName="gear" endContent={
                        <>
                               <IconButton icon="star" />
                             <Icon icon="star" />
                             <IconButton icon="star" />
                              <IconButton icon="star" />
                        </>
                    }>List item with coooooooooooontent</ListItem>

                    <ListItem description='Long long long description' endContent={
                        <>
                               <IconButton icon="star" />
                             <Icon icon="star" />
                             <IconButton icon="star" />
                              <IconButton icon="star" />
                        </>
                    }>List item with coooooooooooontent</ListItem>

                    <ListItem><span className="k-separator"></span></ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="gear">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="gear">Checkbox icon</ListItem>
                </ListVirtualization>
            </section>

            <section>
                 <ListAngular virtualization>
                        <ListGroup label="Group 1" groupIcon groupIconName="star">
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                            <ListItem>List item 1.3</ListItem>
                        </ListGroup>
                        <ListGroup label="Group 2" groupIcon groupIconName="search">
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                            <ListItem>List item 2.3</ListItem>
                        </ListGroup>
                    </ListAngular>
            </section>
        </div>
    </>
);
