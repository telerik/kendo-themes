import * as React from 'react';
import { classNames } from '../misc';

const WINDOW_CONTENT_CLASSNAME = 'k-window-content';

const states = [];

const options = {};

export type KendoWindowContentProps = {
    children?: React.ReactNode;
};

export type KendoWindowContentState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const WindowContent = (
    props: KendoWindowContentProps &
        KendoWindowContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WINDOW_CONTENT_CLASSNAME
            )}>
            {children}
        </div>
    );
};

WindowContent.states = states;
WindowContent.options = options;
WindowContent.className = WINDOW_CONTENT_CLASSNAME;
WindowContent.defaultOptions = defaultOptions;

export default WindowContent;
