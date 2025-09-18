import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { ACTION_BUTTONS_FOLDER_NAME, ACTION_BUTTONS_MODULE_NAME } from './constants';
export const ACTIONBUTTONS_CLASSNAME = `k-actions`;

const states = [];

const options = {};

export type KendoActionButtonsProps = {
    alignment?: 'start' | 'center' | 'end' | 'stretched' | 'justify';
    orientation?: 'horizontal' | 'vertical';
};

const defaultOptions = {
    alignment: 'start',
    orientation: 'horizontal'
};

export const ActionButtons: KendoComponent<KendoActionButtonsProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoActionButtonsProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        alignment = defaultOptions.alignment,
        orientation = defaultOptions.orientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                ACTIONBUTTONS_CLASSNAME,
                {
                    [`${ACTIONBUTTONS_CLASSNAME}-${alignment}`]: alignment,
                    [`${ACTIONBUTTONS_CLASSNAME}-${orientation}`]: orientation
                },
                props.className
            )}>
            {props.children}
        </div>
    );
};

ActionButtons.states = states;
ActionButtons.options = options;
ActionButtons.className = ACTIONBUTTONS_CLASSNAME;
ActionButtons.defaultOptions = defaultOptions;
ActionButtons.moduleName = ACTION_BUTTONS_MODULE_NAME;
ActionButtons.folderName = ACTION_BUTTONS_FOLDER_NAME;

export default ActionButtons;
