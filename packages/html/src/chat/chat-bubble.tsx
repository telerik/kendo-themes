import { classNames } from '../misc';
import { Bubble, KendoBubbleProps, KendoBubbleState } from '../bubble';
import React from 'react';

const className = `k-chat-bubble`;

export type KendoChatBubbleProps = KendoBubbleProps &
    KendoBubbleState & {
        typing?: boolean;
        files?: React.JSX.Element | React.JSX.Element[];
    }

export const ChatBubble = (
    props: KendoChatBubbleProps &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>
) => {
    const {
        typing,
        content,
        files,
        ...other
    } = props;

    return (
        <Bubble
            {...other}
            className={classNames(
                props.className,
                className,
            )}
        >
            {typing ?
                <div className="k-typing-indicator">
                    <span></span><span></span><span></span>
                </div>
                : content
            }
            {files}
        </Bubble>
    );
};
