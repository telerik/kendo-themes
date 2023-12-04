import { TileLayoutNormal } from '../../tilelayout';
import { TileLayoutItem } from '../tilelayout-item.spec';

export default () => (
    <>
        <div id="test-area">
            <TileLayoutNormal columns={4} gap="16px" columnWidth="1fr">
                <TileLayoutItem resize="horizontal" header="Card Title" body="Horizontally resizable card" />
                <TileLayoutItem resize="vertical" header="Card Title" body="Vertically resizable card" />
                <TileLayoutItem resize={true} header="Card Title" body="Horizontally and Vertically resizable card" />
                <TileLayoutItem header="Card Title" body="Non-resizable card" />
            </TileLayoutNormal>
        </div>
    </>
);
