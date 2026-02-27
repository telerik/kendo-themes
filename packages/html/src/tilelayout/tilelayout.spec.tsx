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
 * Accessibility specification for TileLayout.
 *
 * @accessibility
 * - Container has role=list
 * - Items have role=listitem with tabindex=0
 * - Items have aria-keyshortcuts and aria-grabbed for drag-and-drop
 * - Item header title has id linked via aria-labelledby
 *
 * @wcag 4.1.2 Name, Role, Value - list pattern for tile items
 */
TileLayout.ariaSpec = {
    selector: '.k-tilelayout',
    rules: [
        { selector: '.k-tilelayout', attribute: 'role=list', usage: 'Sets list role to the TileLayout wrapper.' },
        { selector: '.k-tilelayout-item', attribute: 'role=listitem', usage: 'Sets listitem role to the TileLayout items.' },
        { selector: '.k-tilelayout-item', attribute: 'aria-labelledby', usage: 'Associates the focusable item wrapper with the respective header text element.' },
        { selector: '.k-tilelayout-item', attribute: 'tabindex=0', usage: 'Makes the item wrapper element focusable.' },
        { selector: '.k-tilelayout-item', attribute: 'aria-keyshortcuts=Enter', usage: 'Announces Enter as an available key shortcut when the item is focused.' },
        { selector: '.k-tilelayout-item', attribute: 'aria-dropeffect=execute', usage: 'Announces that an action will be executed when the item is dropped.' },
        { selector: '.k-tilelayout-item', attribute: 'aria-grabbed=true/false', usage: 'Indicates the grabbed state in a drag-and-drop operation.' },
        { selector: '.k-tilelayout-item-header .k-card-title', attribute: 'id', usage: 'Unique identifier to link the header text element to the focusable wrapper.' },
    ]
};

export default TileLayout;
