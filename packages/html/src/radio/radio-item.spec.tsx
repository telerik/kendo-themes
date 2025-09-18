import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { RADIO_FOLDER_NAME, RADIO_MODULE_NAME } from './constants';
export const RADIOITEM_CLASSNAME = `k-radio-list-item`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoRadioItemState = { [K in (typeof states)[number]]?: boolean };

export const RadioItem: KendoComponent<KendoRadioItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoRadioItemState &
     React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        ...other
    } = props;
    return (
        <li
            {...other}
            className={classNames(
                props.className,
                RADIOITEM_CLASSNAME,
            )}
        >
            {props.children}
        </li>
    );
};

RadioItem.states = states;
RadioItem.options = options;
RadioItem.className = RADIOITEM_CLASSNAME;
RadioItem.defaultOptions = defaultOptions;
RadioItem.moduleName = RADIO_MODULE_NAME;
RadioItem.folderName = RADIO_FOLDER_NAME;

export default RadioItem;
