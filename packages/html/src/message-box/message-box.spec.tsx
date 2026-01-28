import { classNames, optionClassNames, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { MESSAGE_BOX_FOLDER_NAME, MESSAGE_BOX_MODULE_NAME } from './constants';
export const MESSAGE_BOX_CLASSNAME = `k-messagebox`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};

export type KendoMessageBoxOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoMessageBoxProps = KendoMessageBoxOptions;

const defaultOptions = {};

export const MessageBox: KendoComponent<KendoMessageBoxProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoMessageBoxProps &
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
                MESSAGE_BOX_CLASSNAME,
                optionClassNames(MESSAGE_BOX_CLASSNAME, {
                    themeColor,
                })
            )}>
            {props.children}
        </div>
    );
};

MessageBox.states = states;
MessageBox.options = options;
MessageBox.className = MESSAGE_BOX_CLASSNAME;
MessageBox.defaultOptions = defaultOptions;
MessageBox.moduleName = MESSAGE_BOX_MODULE_NAME;
MessageBox.folderName = MESSAGE_BOX_FOLDER_NAME;

export default MessageBox;
