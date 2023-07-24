import React from 'react';

export const TILELAYOUTITEMHINT_CLASSNAME = `k-layout-item-hint`;

const states = [];

const options = {};

export type KendoTileLayoutItemHintProps = {
    style?: React.CSSProperties;
};

const defaultProps = {};

export const TileLayoutItemHint = (
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
TileLayoutItemHint.defaultProps = defaultProps;

export default TileLayoutItemHint;
