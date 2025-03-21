import * as React from 'react';
import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

const EXPANSION_PANEL_CLASSNAME = 'k-expander';

const states = [
    States.hover,
    States.focus,
    States.disabled
];

const options = {};

export type KendoExpansionPanelProps = {
    title?: string;
    subtitle?: string;
    expanded?: boolean;
    dir?: 'ltr' | 'rtl';
    contentStyle?: React.CSSProperties;
};

export type KendoExpansionPanelState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const ExpansionPanel = (
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
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                EXPANSION_PANEL_CLASSNAME,
                stateClassNames(EXPANSION_PANEL_CLASSNAME, {
                    hover,
                    focus,
                    disabled
                }),
                {
                    'k-expanded': expanded,
                }
            )} dir={dir}>
            <div className={classNames(
                'k-expander-header',
                stateClassNames(EXPANSION_PANEL_CLASSNAME, {
                    hover
                })
            )}>
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
            )}>
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

export default ExpansionPanel;
