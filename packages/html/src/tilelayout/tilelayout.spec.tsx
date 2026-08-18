import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TILELAYOUT_FOLDER_NAME, TILELAYOUT_MODULE_NAME } from './constants';
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

/**
 * @aria {role="list"} Sets list role to the TileLayout wrapper.
 * @ux {Tiles} Content areas are organized as resizable tiles in a grid.
 * @ux {Drag and drop} Tiles are reordered by dragging their header.
 * @ux {Resize} Tile dimensions are adjusted by dragging the resize handle at the tile corner.
 * @ux {Gap} Configurable spacing is applied uniformly between tiles.
 */
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
        role="list"
        >
            {children}
        </div>
    );
};

TileLayout.states = states;
TileLayout.options = options;
TileLayout.className = TILELAYOUT_CLASSNAME;
TileLayout.defaultOptions = defaultOptions;
TileLayout.moduleName = TILELAYOUT_MODULE_NAME;
TileLayout.folderName = TILELAYOUT_FOLDER_NAME;

/**
 * @keyboard {Tab} Move focus to the next tile. If focus is on the last tile, focus the next focusable element on the page.
 * @keyboard {Shift + Tab} Move focus to the previous tile. If focus is on the first tile, focus the previous focusable element before the TileLayout.
 * @keyboard {Enter} Focuses the first focusable element within the tile. Focus is trapped and wrapped within the tile content and follows its natural Tab sequence.
 * @keyboard {Escape} Moves focus back to the TileLayout item wrapper when it is on a focusable element within the tile content.
 * @keyboard {Shift + ArrowRight} Reorders the focused tile with the next one (if such exists).
 * @keyboard {Shift + ArrowLeft} Reorders the focused tile with the previous one (if such exists).
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Increments the focused tile width with one column (to a maximum of the preset columns count).
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Decrements the focused tile width with one column (to a minimum of 1).
 * @keyboard {Control/Cmd(Mac) + ArrowDown} Increments the focused item height with one row (to a maximum of the preset rows count if such option exists).
 * @keyboard {Control/Cmd(Mac) + ArrowUp} Decrements the focused item height with one row (to a minimum of 1).
 */

export default TileLayout;
