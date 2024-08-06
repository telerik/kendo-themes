import { classNames } from '../misc';

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

export const TileLayout = (
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

export default TileLayout;
