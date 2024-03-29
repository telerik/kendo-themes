import { TileLayout, TileLayoutItem } from "../../tilelayout";

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
