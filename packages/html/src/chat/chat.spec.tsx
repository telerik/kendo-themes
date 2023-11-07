import { classNames } from '../misc';
import { Button } from '../button';
import { Textbox } from '../textbox';

const CHAT_CLASSNAME = 'k-chat';

const states = [];

const options = {};

const defaultOptions = {
    showToolbar: true,
    showMessageBox: true,
    showMoreButton: true
};

export type KendoChatProps = {
    dir?: "ltr" | "rtl",
    showToolbar?: boolean,
    showMessageBox?: boolean,
    showMoreButton?: boolean,
}

export const Chat = (
    props: KendoChatProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        dir,
        showToolbar,
        showMessageBox = defaultOptions.showMessageBox,
        showMoreButton,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CHAT_CLASSNAME,
                props.className
            )} dir={dir}>
            <div className="k-message-list k-avatars">
                <div className="k-message-list-content">
                    {props.children}
                </div>
            </div>
            { showMessageBox &&
                <Textbox
                    className="k-message-box"
                    placeholder="Type a message..."
                    suffix={
                        <>
                            { showMoreButton && <Button fillMode="flat" icon="more-horizontal"></Button> }
                            <Button fillMode="flat" icon="paper-plane" className="k-chat-send"></Button>
                        </>
                    }
                />
            }
            { showToolbar &&
                <div className="k-chat-toolbar k-toolbar">
                    <Button className={classNames("k-scroll-button", "k-scroll-button-left", dir === 'rtl' ? "" : "k-hidden")} icon="chevron-left" />
                    <div className="k-toolbar-group k-button-list">
                        <Button icon="arrow-rotate-cw"></Button>
                        <Button icon="gear"></Button>
                        <Button icon="wrench"></Button>
                        <Button icon="plus"></Button>
                        <Button icon="search"></Button>
                        <Button icon="star"></Button>
                        <Button icon="bell"></Button>
                        <Button icon="question-circle"></Button>
                        <Button icon="trash"></Button>
                    </div>
                    <Button className={classNames("k-scroll-button", "k-scroll-button-right", dir === 'rtl' && "k-hidden")} icon="chevron-right" />
                </div>
            }
        </div>

    );
};

Chat.states = states;
Chat.options = options;
Chat.className = CHAT_CLASSNAME;
Chat.defaultOptions = defaultOptions;

export default Chat;
