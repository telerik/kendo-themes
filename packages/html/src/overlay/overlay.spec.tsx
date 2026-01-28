import { classNames, optionClassNames, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { OVERLAY_FOLDER_NAME, OVERLAY_MODULE_NAME } from './constants';
export const OVERLAY_CLASSNAME = `k-overlay`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};

export type KendoOverlayOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoOverlayProps = KendoOverlayOptions;

const defaultOptions = {};

export const Overlay: KendoComponent<KendoOverlayProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOverlayProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        themeColor,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                OVERLAY_CLASSNAME,
                optionClassNames(OVERLAY_CLASSNAME, {
                    themeColor,
                })
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
