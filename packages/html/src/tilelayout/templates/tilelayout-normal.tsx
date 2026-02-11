import { TileLayout } from "../../tilelayout/tilelayout.spec";
import { TileLayoutItem } from "../../tilelayout/tilelayout-item.spec";

export const TileLayoutNormal = (props) => (
    <TileLayout
        children={
            <>
                <TileLayoutItem header="Title goes here" body="Content goes here" />
                <TileLayoutItem header="Title goes here" body="Content goes here" />
                <TileLayoutItem header="Title goes here" body="Content goes here" />
                <TileLayoutItem header="Title goes here" body="Content goes here" />
            </>
        }
        {...props}
    >
    </TileLayout>
);
