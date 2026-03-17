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

Bubble.ariaSpec = {
    selector: '.k-bubble',
    rules: [
        { selector: '.k-bubble', attribute: 'tabindex=0', usage: 'The Chat bubble must be focusable.' },
        { selector: '.k-bubble-expandable-indicator', attribute: 'role=button', usage: 'The expandable indicator must have an appropriate role.' },
        { selector: '.k-bubble-expandable-indicator', attribute: 'aria-label or title', usage: 'The expandable indicator must be properly labelled.' },
        { selector: '.k-bubble-expandable-indicator', attribute: 'tabindex=0', usage: 'The expandable indicator must be part of the page tabsequence.' },
    ]
};

export default Bubble;
