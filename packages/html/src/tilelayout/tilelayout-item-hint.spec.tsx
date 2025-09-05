import React from 'react';

import { KendoComponent } from '../_types/component';
export const TILELAYOUTITEMHINT_CLASSNAME = `k-layout-item-hint`;

const states = [];

const options = {};

export type KendoTileLayoutItemHintProps = {
    style?: React.CSSProperties;
};

const defaultOptions = {};

export const TileLayoutItemHint: KendoComponent<KendoTileLayoutItemHintProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTileLayoutItemHintProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const { style } = props;

    return (
        <div className={TILELAYOUTITEMHINT_CLASSNAME} style={style} />
    );
};

TileLayoutItemHint.states = states;
TileLayoutItemHint.options = options;
TileLayoutItemHint.className = TILELAYOUTITEMHINT_CLASSNAME;
TileLayoutItemHint.defaultOptions = defaultOptions;
TileLayoutItemHint.moduleName = "tile-layout";
TileLayoutItemHint.folderName = "tilelayout";

export default TileLayoutItemHint;
