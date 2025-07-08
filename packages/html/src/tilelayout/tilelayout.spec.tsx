import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const TILELAYOUT_CLASSNAME = `k-tilelayout`;

const states = [];

const options = {};

export type KendoTileLayoutProps = {
    gap?: string;
    columns?: number;
    columnWidth?: string,
    rowHeight?: string,
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

const defaultOptions = {};

export const TileLayout: KendoComponent<KendoTileLayoutProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTileLayoutProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        gap,
        columns,
        columnWidth,
        rowHeight,
        style,
        children
    } = props;

    const tileLayoutStyles = {
        gridTemplateColumns: `repeat(${columns}, minmax(0px, ${columnWidth}))`,
        gridAutoRows: `minmax(0px, ${rowHeight})`,
        gap: gap,
        ...style
    };

    return (
        <div className={classNames(
            props.className,
            TILELAYOUT_CLASSNAME,
        )}
        style={tileLayoutStyles}
        >
            {children}
        </div>
    );
};

TileLayout.states = states;
TileLayout.options = options;
TileLayout.className = TILELAYOUT_CLASSNAME;
TileLayout.defaultOptions = defaultOptions;

export default TileLayout;
