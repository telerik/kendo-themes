import { ListView, KendoListViewProps } from '../listview.spec';
import { ListViewItem } from '../listview-item.spec';
import { ListViewNormal } from '../templates/listview-normal';

const options = ListView.options;
const states = ListView.states;
const defaults = {
  ...ListView.defaultOptions,
  variant: 'flex',
};


const variants = [
    {
        name: 'flex',
        title: 'Flex',
    },
    {
        name: 'grid',
        title: 'Grid',
    }
];

const modifiers = [
    {
        name: 'loading',
        title: 'Loading',
    },
    {
        name: 'pageable',
        title: 'Pager',
    },
];

export const ListviewDemo = (props: KendoListViewProps &
{ modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean } } &
{ variant?: (typeof variants)[number]['name'] }
) => {

    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'loading':
                additionalProps.loading = mods?.[modifier] ? true : false;
                break;
            case 'pageable':
                additionalProps.pageable = mods?.[modifier] ? true : false;
                break;
            default:
                break;
        }
    });

    switch (variant) {
        case 'grid':
            return (
                <ListViewNormal style={{ width: "324px" }} {...other} {...additionalProps}
                    //TODO: Header and Footer are hardcoded in spec and their content cannot be changed. Add them when properly handled in the spec.
                    // header
                    // footer
                    bordered
                    layout="grid"
                    gridColumns={2}
                >
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2' selected>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                </ListViewNormal>
            );
        case 'flex':
        default:
            return (
                <ListViewNormal style={{ width: "324px" }} {...other} {...additionalProps}
                    //TODO: Header and Footer are hardcoded in spec and their content cannot be changed. Add them when properly handled in the spec.
                    // header
                    // footer
                    bordered
                    layout="flex"
                    flexDirection="col"
                >
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2' selected>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                    <ListViewItem className='k-p-2'>Listview Item</ListViewItem>
                </ListViewNormal>
            );
    }
}


ListviewDemo.options = options;
ListviewDemo.states = states;
ListviewDemo.variants = variants;
ListviewDemo.defaultOptions = defaults;
ListviewDemo.modifiers = modifiers;

export default ListviewDemo;

