import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LABEL_FOLDER_NAME, LABEL_MODULE_NAME } from './constants';

export const LABEL_CLASSNAME = 'k-label';

const states = [
    States.disabled
];

const options = {};

export type KendoLabelState = { [K in (typeof states)[number]]?: boolean };

export type KendoLabelProps = {
    optional?: boolean;
    info?: string;
    text?: string;
};

const defaultOptions = {};

export const Label: KendoComponent<KendoLabelState & KendoLabelProps & React.LabelHTMLAttributes<HTMLLabelElement>> = (
    props: KendoLabelState & KendoLabelProps & React.LabelHTMLAttributes<HTMLLabelElement>
) => {
    const {
        disabled,
        optional,
        info,
        text,
        children,
        ...other
    } = props;

    return (
        <label
            {...other}
            className={classNames(
                props.className,
                LABEL_CLASSNAME,
                stateClassNames(LABEL_CLASSNAME, {
                    disabled
                })
            )}
        >
            {text || children}
            {optional && <span className="k-label-optional">(Optional)</span>}
            {info && <span className="k-field-info">{info}</span>}
        </label>
    );
};

Label.states = states;
Label.options = options;
Label.className = LABEL_CLASSNAME;
Label.defaultOptions = defaultOptions;
Label.moduleName = LABEL_MODULE_NAME;
Label.folderName = LABEL_FOLDER_NAME;

export default Label;
