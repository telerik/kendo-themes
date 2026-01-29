import * as React from 'react';
import { classNames, optionClassNames, stateClassNames, States, FillMode } from '../misc';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
import { BUTTON_GROUP_FOLDER_NAME, BUTTON_GROUP_MODULE_NAME } from './constants';
export const BUTTONGROUP_CLASSNAME = `k-button-group`;

const states = [
    States.disabled
];

const options = {
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoButtonGroupOptions = {
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoButtonGroupProps = KendoButtonGroupOptions & {
    stretched?: boolean;
};

export type KendoButtonGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const ButtonGroup: KendoComponent<KendoButtonGroupProps & KendoButtonGroupState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoButtonGroupProps &
        KendoButtonGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode,
        disabled,
        stretched,
        ...other
    } = props;

    const classNameTokens = typeof props.className === 'string' ? props.className.split(' ') : [];
    const isSplitButtonGroup = classNameTokens.includes('k-split-button');
    const isSchedulerNavigation = classNameTokens.includes('k-scheduler-navigation');
    const isZoomControl = classNameTokens.includes('k-zoom-control');
    const shouldApplyPressed = !(isSplitButtonGroup || isSchedulerNavigation || isZoomControl);

    const applyAriaPressed = (children: React.ReactNode): React.ReactNode => (
        React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
                return child;
            }

            if (child.type === React.Fragment) {
                const fragmentChild = child as React.ReactElement<{ children?: React.ReactNode }>;

                return (
                    <>
                        {applyAriaPressed(fragmentChild.props.children)}
                    </>
                );
            }

            if (child.type !== Button) {
                return child;
            }

            const buttonChild = child as React.ReactElement<React.ComponentProps<typeof Button>>;

            return React.cloneElement(buttonChild, {
                'aria-pressed': buttonChild.props.selected ? 'true' : 'false'
            });
        })
    );

    const childrenWithAria = shouldApplyPressed ? applyAriaPressed(props.children) : props.children;

    return (
        <div
            {...other}
            {...(!isSplitButtonGroup && { role: 'group' })}
            {...(disabled && { 'aria-disabled': 'true' })}
            className={classNames(
                props.className,
                BUTTONGROUP_CLASSNAME,
                optionClassNames(BUTTONGROUP_CLASSNAME, {
                    fillMode
                }),
                stateClassNames(BUTTONGROUP_CLASSNAME, {
                    disabled
                }),
                {
                    [`${BUTTONGROUP_CLASSNAME}-stretched`]: stretched,
                }
            )}
        >
            { childrenWithAria }
        </div>
    );
};

ButtonGroup.states = states;
ButtonGroup.options = options;
ButtonGroup.className = BUTTONGROUP_CLASSNAME;
ButtonGroup.defaultOptions = defaultOptions;
ButtonGroup.moduleName = BUTTON_GROUP_MODULE_NAME;
ButtonGroup.folderName = BUTTON_GROUP_FOLDER_NAME;

export default ButtonGroup;
