import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { OVERLAY_FOLDER_NAME, OVERLAY_MODULE_NAME } from './constants';
export const OVERLAY_CLASSNAME = `k-overlay`;

const states = [];

const options = {};

export type KendoOverlayOptions = {};

export type KendoOverlayProps = KendoOverlayOptions;

const defaultOptions = {};

/**
 * @ux {Backdrop} Renders a semi-transparent layer over the page content.
 * @ux {Click-outside} Can trigger a close action on the associated dialog or panel when clicked.
 * @ux {Scroll lock} Prevents the body from scrolling while the overlay is visible.
 */
export const Overlay: KendoComponent<KendoOverlayProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOverlayProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                OVERLAY_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

Overlay.states = states;
Overlay.options = options;
Overlay.className = OVERLAY_CLASSNAME;
Overlay.defaultOptions = defaultOptions;
Overlay.moduleName = OVERLAY_MODULE_NAME;
Overlay.folderName = OVERLAY_FOLDER_NAME;

export default Overlay;
