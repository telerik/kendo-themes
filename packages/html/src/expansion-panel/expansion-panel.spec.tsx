import * as React from 'react';
import { classNames, nextId, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { EXPANSION_PANEL_FOLDER_NAME, EXPANSION_PANEL_MODULE_NAME } from './constants';
const EXPANSION_PANEL_CLASSNAME = 'k-expander';

const states = [
    States.hover,
    States.focus,
    States.disabled,
    States.expanded
];

const options = {};

export type KendoExpansionPanelProps = {
    title?: string;
    subtitle?: string;
    dir?: 'ltr' | 'rtl';
    contentStyle?: React.CSSProperties;
    /** @aria ID for aria-controls reference between header and content */
    id?: string;
};

export type KendoExpansionPanelState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const ExpansionPanel: KendoComponent<KendoExpansionPanelProps & KendoExpansionPanelState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoExpansionPanelProps &
        KendoExpansionPanelState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        expanded,
        hover,
        focus,
        disabled,
        dir,
        contentStyle,
        id,
        ...other
    } = props;

    const contentWrapperId = id ? `${id}-content` : nextId('expander-content');

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                EXPANSION_PANEL_CLASSNAME,
                stateClassNames(EXPANSION_PANEL_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    expanded
                })
            )} dir={dir}>
            <div className={classNames(
                'k-expander-header',
                stateClassNames(EXPANSION_PANEL_CLASSNAME, {
                    hover
                })
            )}
                role="button"
                aria-controls={contentWrapperId}
                aria-expanded={expanded ? 'true' : 'false'}
                tabIndex={0}
                aria-disabled={disabled ? 'true' : undefined}
            >
                <div className="k-expander-title">{title}</div>
                <span className="k-spacer"></span>
                <div className="k-expander-sub-title">{subtitle}</div>
                <span className="k-expander-indicator">
                    {!expanded ? <Icon icon="chevron-down" /> : <Icon icon="chevron-up" />}
                </span>
            </div>
            <div className={classNames(
                'k-expander-content-wrapper',
                {
                    'k-hidden': !expanded
                }
            )} id={contentWrapperId}>
                <div className="k-expander-content" style={contentStyle}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

ExpansionPanel.states = states;
ExpansionPanel.options = options;
ExpansionPanel.className = EXPANSION_PANEL_CLASSNAME;
ExpansionPanel.defaultOptions = defaultOptions;
ExpansionPanel.moduleName = EXPANSION_PANEL_MODULE_NAME;
ExpansionPanel.folderName = EXPANSION_PANEL_FOLDER_NAME;

/**
 * @ariaSpec
 * ExpansionPanel implements the WAI-ARIA disclosure pattern.
 *
 * - Header: role="button" with aria-controls pointing to content wrapper
 * - aria-expanded indicates open/closed state
 * - tabindex=0 on header for keyboard focus
 * - aria-disabled when panel is disabled
 */
ExpansionPanel.ariaSpec = {
    selector: '.k-expander',
    rules: [
        { selector: '.k-expander-header', attribute: 'role=button', usage: 'Sets the proper role for the ExpansionPanel header.' },
        { selector: '.k-expander-header', attribute: 'aria-controls', usage: 'Points to the controlled content wrapper element.' },
        { selector: '.k-expander-header', attribute: 'aria-expanded=true/false', usage: 'Indicates the expanded state of the ExpansionPanel.' },
        { selector: '.k-expander-header', attribute: 'tabindex=0', usage: 'The element should be focusable.' },
        { selector: '.k-disabled .k-expander-header', attribute: 'aria-disabled=true', usage: 'Rendered only when the ExpansionPanel is disabled.' },
        { selector: '.k-expander-content-wrapper', attribute: 'id', usage: 'Content wrapper has an id referenced by aria-controls.' },
    ]
};

export default ExpansionPanel;
