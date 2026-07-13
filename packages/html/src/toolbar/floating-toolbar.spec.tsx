import { classNames, Size, FillMode  } from '../misc';
import { Popup, KendoPopupProps } from '../popup';
import { Toolbar, KendoToolbarOptions, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
import { TOOLBAR_FOLDER_NAME, TOOLBAR_MODULE_NAME } from './constants';

export const FLOATING_TOOLBAR_CLASSNAME = `k-floating-toolbar`;

const states = [];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.outline, FillMode.flat],
};

const defaultOptions = {};

export type KendoFloatingToolbarOptions = KendoToolbarOptions;

export type KendoFloatingToolbarProps = KendoFloatingToolbarOptions & KendoPopupProps & KendoToolbarProps & {};

/**
 * @ux {Contextual display} Appears near selected content (e.g., selected text in an editor).
 * @ux {Floating position} Rendered as a floating layer above the page, not in the document flow.
 * @ux {Action buttons} Contains formatting or context-specific action buttons.
 */
export const FloatingToolbar: KendoComponent<KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        fillMode,
        resizable,
        scrollable,
        scrollButtons,
        scrollingPosition,
        section,
        ...other
    } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                FLOATING_TOOLBAR_CLASSNAME,
            )}>
            <Toolbar
                size={size}
                fillMode={fillMode}
                resizable={resizable}
                scrollable={scrollable}
                scrollButtons={scrollButtons}
                scrollingPosition={scrollingPosition}
                section={section}>
                    {props.children}
            </Toolbar>
        </Popup>
    );
};

FloatingToolbar.states = states;
FloatingToolbar.options = options;
FloatingToolbar.className = FLOATING_TOOLBAR_CLASSNAME;
FloatingToolbar.defaultOptions = defaultOptions;
FloatingToolbar.moduleName = TOOLBAR_MODULE_NAME;
FloatingToolbar.folderName = TOOLBAR_FOLDER_NAME;

export default FloatingToolbar;
