import { TileLayout } from '../tilelayout.spec';
import { TileLayoutItem } from '../tilelayout-item.spec';
import TileLayoutItemHint from '../tilelayout-item-hint.spec';

export default () => (
    <>
        <div id="test-area">
            <TileLayout
                columns={5}
                columnWidth="1fr"
                rowHeight="1fr"
                gap="16px"
                style={{ width: '1000px' }}
            >
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "0", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} focus />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "1", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "2", gridColumnEnd: "span 1", gridRowEnd: "span 2", width: "250px", position: "absolute", height: "198px", left: "410px", top: "16px", zIndex: 1 }} />
                <TileLayoutItemHint style={{ order: "2", gridColumnEnd: "span 2", gridRowEnd: "span 2" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "3", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "4", gridColumnEnd: "span 1", gridRowEnd: "span 2" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "5", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "6", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "7", gridColumnEnd: "span 1", gridRowEnd: "span 2" }} />
                <TileLayoutItem header="Title goes here" body="Content goes here" style={{ order: "8", gridColumnEnd: "span 1", gridRowEnd: "span 1" }} />
                <TileLayoutItem
                    header={<h5 className="k-card-title">Header element</h5>}
                    body="Content goes here"
                    style={{ order: "9", gridColumnEnd: "span 1", gridRowEnd: "span 2" }}
                />
            </TileLayout>
        </div>
    </>
);
