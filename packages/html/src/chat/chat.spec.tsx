import { classNames } from '../misc';
import { Button } from '../button';
import { Toolbar } from '../toolbar';
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
        showToolbar = defaultOptions.showToolbar,
        showMessageBox = defaultOptions.showMessageBox,
        showMoreButton = defaultOptions.showMoreButton,
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
                <Toolbar className="k-chat-toolbar">
                    <Button className="k-scroll-button k-scroll-button-left k-hidden" fillMode="flat" rounded={null} size={null} icon="chevron-left"></Button>
                    <div className="k-toolbar-group k-button-list">
                        <Button fillMode="flat" icon="arrow-rotate-cw"></Button>
                        <Button fillMode="flat" icon="gear"></Button>
                        <Button fillMode="flat" icon="wrench"></Button>
                        <Button fillMode="flat" icon="plus"></Button>
                        <Button fillMode="flat" icon="search"></Button>
                        <Button fillMode="flat" icon="star"></Button>
                        <Button fillMode="flat" icon="bell"></Button>
                        <Button fillMode="flat" icon="question-circle"></Button>
                        <Button fillMode="flat" icon="trash"></Button>
                    </div>
                    <Button className="k-scroll-button k-scroll-button-right" fillMode="flat" rounded={null} size={null} icon="chevron-right"></Button>
                </Toolbar>
            }
        </div>

    );
};

Chat.states = states;
Chat.options = options;
Chat.className = CHAT_CLASSNAME;
Chat.defaultOptions = defaultOptions;

export default Chat;
