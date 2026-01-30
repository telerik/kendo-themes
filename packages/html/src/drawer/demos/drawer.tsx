import { Drawer, KendoDrawerProps } from '../drawer.spec';
import { DrawerContent } from '../drawer-content.spec';
import { DrawerItem } from '../drawer-item.spec';
import { DrawerItemSeparator } from '../drawer-item-separator';
import { DrawerNormal } from '../templates/drawer-normal';
import { DrawerMini } from '../templates/drawer-mini';

const options = Drawer.options;
const states = Drawer.states;
const defaults = {
    ...Drawer.defaultOptions,
    variant: 'normal',
};

const style = `
.custom-content ul {
    padding: 0;
}
.custom-content li {
    font-size: 1.2em;
    border-width: 0 0 1px;
    border-color: rgba(33, 37, 41, 0.125);
    border-style: solid;
    padding: 1em
}
.custom-content li:last-child {
    border: 0;
}
`;

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'mini',
        title: 'Mini',
    },
    {
        name: 'overlay',
        title: 'Overlay',
    },
];

const modifiers: Array<{ name: string; title: string }> = [
];

export const DrawerDemo = (
    props: KendoDrawerProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'end-position': {
                additionalProps.position = mods?.[modifier] ? "end" : undefined;
            }
        }
    });

    const defaultContent = (
        <>
            <style>{style}</style>
            <div className='custom-content'>
                <ul>
                    <li>
                        <p>Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.</p>
                    </li>
                    <li>
                        <p>Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...</p>
                    </li>
                </ul>
            </div>
        </>
    )

    switch (variant) {
        case 'mini':
            return (
                <>
                    <DrawerMini {...other} {...additionalProps} mini={true}
                        items={
                            <>
                                <DrawerItem selected icon="inbox" text="Inbox" level={''} />
                                <DrawerItem icon="bell" text="Notification" level={''} />
                                <DrawerItemSeparator />
                                <DrawerItem icon="star" text="Favourites" level={''} />
                                <DrawerItem icon="calendar" text="Calendar" level={''} />
                            </>
                        }
                    >
                        <DrawerContent>
                            {defaultContent}
                        </DrawerContent>
                    </DrawerMini >
                </>
            );
        case 'overlay':
            return (
                <>
                    <DrawerNormal {...other} {...additionalProps} mode="overlay" expanded
                        items={
                            <>
                                <DrawerItem selected text="Inbox" />
                                <DrawerItem icon="bell" text="Notification" />
                                <DrawerItemSeparator />
                                <DrawerItem icon="star" text="Favourites" />
                                <DrawerItem icon="calendar" text="Calendar" />
                            </>
                        }
                    >
                        <DrawerContent>
                            {defaultContent}
                        </DrawerContent>
                    </DrawerNormal>
                </>
            );
        case 'normal':
        default:
            return (
                <>
                    <DrawerNormal {...other} {...additionalProps} expanded
                        items={
                            <>
                                <DrawerItem selected text="Inbox" />
                                <DrawerItem icon="bell" text="Notification" />
                                <DrawerItemSeparator />
                                <DrawerItem icon="star" text="Favourites" />
                                <DrawerItem icon="calendar" text="Calendar" />
                            </>
                        }
                    >
                        <DrawerContent>
                            {defaultContent}
                        </DrawerContent>
                    </DrawerNormal>
                </>
            );
    }
}


DrawerDemo.options = options;
DrawerDemo.states = states;
DrawerDemo.variants = variants;
DrawerDemo.defaultOptions = defaults;
DrawerDemo.modifiers = modifiers;

export default DrawerDemo;

