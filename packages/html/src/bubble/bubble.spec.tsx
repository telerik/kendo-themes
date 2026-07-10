import React from 'react';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { BUBBLE_FOLDER_NAME, BUBBLE_MODULE_NAME } from './constants';
export const BUBBLE_CLASSNAME = `k-bubble`;

const states = [
    States.hover,
    States.active,
    States.selected,
    States.focus
];

export type KendoBubbleProps = {
    content?: null | string | React.JSX.Element;
    expandable?: boolean;
    expanded?: boolean;
};

export type KendoBubbleState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    expandable: false,
    expanded: false
};

/**
 * @aria {tabindex="0"} The Chat bubble must be focusable.
 * @aria {role="button"} The expandable indicator must have an appropriate role.
 * @aria {aria-label|title} The expandable indicator must be properly labelled.
 * @aria {tabindex="0"} The expandable indicator must be part of the page tabsequence.
 * @ux {Expand / Collapse} An expandable indicator lets the user toggle additional bubble content.
 * @ux {Focusable} The bubble is keyboard-focusable and interactive.
 * @ux {Chat context} Renders as a speech-bubble shape associated with a chat participant.
 */
export const Bubble: KendoComponent<KendoBubbleProps &
        KendoBubbleState &
        React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoBubbleProps &
        KendoBubbleState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        content,
        hover,
        active,
        focus,
        selected,
        expandable = defaultOptions.expandable,
        expanded = defaultOptions.expanded,
        ...other
    } = props;

    return (
        <div
            { ...other }
            className={classNames(
                props.className,
                BUBBLE_CLASSNAME,
                stateClassNames(BUBBLE_CLASSNAME, {
                    hover,
                    active,
                    focus,
                    selected
                }),
                {
                    'k-bubble-expandable': expandable,
                },
                {
                    'k-expanded': expanded,
                },
            )}
            tabIndex={0}
        >
        <div className="k-bubble-content">{content ?? props.children}</div>
        { expandable &&
            <span className="k-bubble-expandable-indicator" role="button" aria-label={expanded ? "Show less" : "Show more"} tabIndex={0}>
                { !expanded ? <Icon icon="chevron-down" /> : <Icon icon="chevron-up" /> }
            </span>
        }
        </div>
    );
};

Bubble.states = states;
Bubble.className = BUBBLE_CLASSNAME;
Bubble.defaultOptions = defaultOptions;
Bubble.moduleName = BUBBLE_MODULE_NAME;
Bubble.folderName = BUBBLE_FOLDER_NAME;

export default Bubble;
