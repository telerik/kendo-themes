import { classNames, optionClassNames, Size, FillMode  } from '../misc';
import { Popup, KendoPopupProps } from '../popup';
import { Toolbar, KendoToolbarOptions, KendoToolbarProps } from '../toolbar';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { FLOATING_TOOLBAR_FOLDER_NAME, FLOATING_TOOLBAR_MODULE_NAME } from './constants';

export const FLOATING_TOOLBAR_CLASSNAME = `k-floating-toolbar`;
export const FLOATING_TOOLBAR_DRAG_HANDLE_CLASSNAME = `k-floating-toolbar-drag-handle`;

const states = [];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.outline, FillMode.flat],
};

const defaultOptions = {
    scrollButtons: 'around'
};

export type KendoFloatingToolbarOptions = KendoToolbarOptions;

export type KendoFloatingToolbarProps = KendoFloatingToolbarOptions & KendoPopupProps & KendoToolbarProps & {
    /** Renders a permanently-visible drag handle that bypasses the toolbar's overflow/scroll strategy. */
    draggable?: boolean;
    /** Accessible name for the drag handle button. */
    dragHandleAriaLabel?: string;
};

/**
 * @aria {role="button"} The drag handle is a non-semantic element exposed as a button; it is a Tab stop independent of the Toolbar's own roving-tabindex group.
 * @aria {aria-label="Drag to reposition"} The drag handle requires an accessible name; override via `dragHandleAriaLabel`.
 * @aria {aria-pressed="true"|"false"} Implementations must toggle this to reflect whether Move mode is currently engaged.
 * @aria {aria-live="polite"} Implementations must announce each Move-mode position change (e.g. "Moved right") via a live region, since dragging has no other feedback for screen-reader users.
 * @ux {Contextual display} Appears near selected content (e.g., selected text in an editor).
 * @ux {Floating position} Rendered as a floating layer above the page, not in the document flow.
 * @ux {Action buttons} Contains formatting or context-specific action buttons.
 * @ux {Drag handle} When draggable, a persistent handle sits outside the scrollable Toolbar so it's never hidden behind the overflow menu.
 * @ux {Non-drag alternative} Per WCAG 2.5.7, implementations must also offer a way to reposition without a sustained drag gesture (e.g. tap handle, then tap/click the destination); the keyboard Move mode alone does not satisfy this for touch/mouse users. Not addressed by this spec — flagged as an open requirement for consuming implementations.
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
        draggable,
        dragHandleAriaLabel = 'Drag to reposition',
        ...other
    } = props;

    const dragHandleItems: React.ReactNode[] = draggable ? [
        <div
            key="drag-handle"
            className={FLOATING_TOOLBAR_DRAG_HANDLE_CLASSNAME}
            role="button"
            tabIndex={0}
            aria-label={dragHandleAriaLabel}
        >
            <Icon icon="handle-drag-dots" />
        </div>,
        <div key="drag-handle-separator" className={classNames('k-separator', 'k-separator-vertical')}></div>
    ] : [];

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                FLOATING_TOOLBAR_CLASSNAME,
                optionClassNames(FLOATING_TOOLBAR_CLASSNAME, {
                    size,
                    fillMode
                })
            )}>
            {dragHandleItems}
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
FloatingToolbar.moduleName = FLOATING_TOOLBAR_MODULE_NAME;
FloatingToolbar.folderName = FLOATING_TOOLBAR_FOLDER_NAME;

/**
 * @keyboard {—(inherited)} The Toolbar's own keyboard map applies in full to its actions (roving tabindex, arrow-key navigation, Home/End, Enter, Alt+ArrowDown/Up). The drag handle is a separate Tab stop before/after the Toolbar and is not part of that roving-tabindex group.
 * @keyboard {M} When draggable, activates the keyboard-driven "Move" mode on the drag handle (accessible equivalent to pointer drag).
 * @keyboard {ArrowLeft} While Move mode is active, moves the toolbar left.
 * @keyboard {ArrowRight} While Move mode is active, moves the toolbar right.
 * @keyboard {ArrowUp} While Move mode is active, moves the toolbar up.
 * @keyboard {ArrowDown} While Move mode is active, moves the toolbar down.
 * @keyboard {Enter} While Move mode is active, locks the toolbar in its new position and exits Move mode.
 * @keyboard {Escape} While Move mode is active, cancels the move, restores the original position, and exits Move mode.
 */

export default FloatingToolbar;
