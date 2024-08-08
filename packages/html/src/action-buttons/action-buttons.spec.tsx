import { classNames } from '../misc';

export const ACTIONBUTTONS_CLASSNAME = `k-actions`;

const states = [];

const options = {};

export type KendoActionButtonsProps = {
    alignment?: 'start' | 'center' | 'end' | 'stretched';
    orientation?: 'horizontal' | 'vertical';
};

const defaultOptions = {
    alignment: 'start',
    orientation: 'horizontal'
};

export const ActionButtons = (
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

export default ActionButtons;
