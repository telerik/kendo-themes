import { TileLayout, KendoTileLayoutProps } from '../tilelayout.spec';
import { TileLayoutItem } from '../tilelayout-item.spec';
import { TileLayoutNormal } from '../templates/tilelayout-normal';

const options = TileLayout.options;
const states = TileLayout.states;
const defaults = {
  ...TileLayout.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'resizable',
        title: 'Resizable',
    },
];
const modifiers = [];

export const TilelayoutDemo = (
    props: KendoTileLayoutProps & { variant?: (typeof variants)[number]['name'] }
) => {

    const { variant, ...other } = props;

    switch (variant) {
        case 'resizable':
            return (
                <TileLayoutNormal
                    columns={2}
                    columnWidth="1fr"
                    rowHeight="1fr"
                    gap="4px"
                    style={{ width: '467px', height: "365px" }}
                    {...other}
                >
                    <TileLayoutItem resize="vertical" header="Title" body="Vertically resizable card" style={{ order: "0", gridColumnEnd: "span 1", gridRowEnd: "span 2" }} />
                    <TileLayoutItem resize="horizontal" header="Title" body="Horizontally resizable card" style={{ order: "1", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                    <TileLayoutItem resize header="Title" body="Horizontally and Vertically resizable card" style={{ order: "2", gridColumnEnd: "span 0", gridRowEnd: "span 0" }} />
                </TileLayoutNormal>
            );
        case 'normal':
        default:
            return (
                <TileLayoutNormal
                    columns={3}
                    columnWidth="1fr"
                    rowHeight="1fr"
                    gap="4px"
                    style={{ width: '467px', height: "365px" }}
                    {...other}
                >
                    <TileLayoutItem header="Title" body="Card Content" style={{ order: "0", gridColumnEnd: "span 2", gridRowEnd: "span 1", width: "100%", height: "100%" }} />
                    <TileLayoutItem header="Title" body="Card Content" style={{ order: "1", gridColumnEnd: "span 1", gridRowEnd: "span 2", width: "100%", height: "100%" }} />
                    <TileLayoutItem header="Title" body="Card Content" style={{ order: "3", gridColumnEnd: "span 1", gridRowEnd: "span 1", width: "100%", height: "100%" }} />
                    <TileLayoutItem header="Title" body="Card Content" style={{ order: "4", gridColumnEnd: "span 1", gridRowEnd: "span 1", width: "100%", height: "100%" }} />
                </TileLayoutNormal>
            );
    }
}


TilelayoutDemo.options = options;
TilelayoutDemo.states = states;
TilelayoutDemo.variants = variants;
TilelayoutDemo.defaultOptions = defaults;
TilelayoutDemo.modifiers = modifiers;

export default TilelayoutDemo;

