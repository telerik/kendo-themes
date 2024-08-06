import { classNames } from '../misc';

export const ACTIONBUTTONS_CLASSNAME = `k-actions`;

const states = [];

const options = {};

export type KendoActionButtonsProps = {
    alignment?: 'start' | 'center' | 'end' | 'stretched';
    orientation?: 'horizontal' | 'vertical';
};

export const ActionButtons = (
    props: KendoActionButtonsProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        alignment = 'start',
        orientation = 'horizontal',
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

export default ActionButtons;
