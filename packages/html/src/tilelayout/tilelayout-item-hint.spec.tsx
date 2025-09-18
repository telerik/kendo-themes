import React from 'react';

import { KendoComponent } from '../_types/component';
import { TILELAYOUT_FOLDER_NAME, TILELAYOUT_MODULE_NAME } from './constants';
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
TileLayoutItemHint.moduleName = TILELAYOUT_MODULE_NAME;
TileLayoutItemHint.folderName = TILELAYOUT_FOLDER_NAME;

export default TileLayoutItemHint;
