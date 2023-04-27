/* eslint-disable react/no-unescaped-entities */
import ReactDOM from 'react-dom/client';
import { Avatar } from '../../avatar';
import { Button } from '../../button';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    /* needed for test */
    .k-chat .k-bubble {
        white-space: normal;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-chat">
                    <div className="k-message-list k-avatars">
                        <div className="k-message-list-content">
                            <div className="k-timestamp">Bubbles</div>
                            <div className="k-message-group">
                                <p className="k-author">Bruv</p>
                                <Avatar type="image">
                                    <img src="/packages/html/assets/avatar.jpg" />
                                </Avatar>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">How can I help you?</div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-message-group k-alt">
                                <p className="k-author">Bruv</p>
                                <Avatar type="image">
                                    <img src="/packages/html/assets/avatar.jpg" />
                                </Avatar>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">How can I help you?</div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-timestamp">Quick Replies</div>
                            <div className="k-quick-replies">
                                <span className="k-quick-reply">Quick</span>
                                <span className="k-quick-reply">Reply</span>
                                <span className="k-quick-reply">Another quick</span>
                                <span className="k-quick-reply">Reply with different length</span>
                            </div>
                            <div className="k-timestamp">Card Deck</div>
                            <div className="k-card-deck">
                                <div className="k-card">
                                    <div className="k-card-body">
                                        <h5 className="k-card-title">Card Title</h5>
                                        <h6 className="k-card-subtitle">Card Subtitle</h6>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="k-card">
                                    <div className="k-card-body">
                                        <h5 className="k-card-title">Card Title</h5>
                                        <h6 className="k-card-subtitle">Card Subtitle</h6>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="k-card">
                                    <div className="k-card-body">
                                        <h5 className="k-card-title">Card Title</h5>
                                        <h6 className="k-card-subtitle">Card Subtitle</h6>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="k-card">
                                    <div className="k-card-body">
                                        <h5 className="k-card-title">Card Title</h5>
                                        <h6 className="k-card-subtitle">Card Subtitle</h6>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Textbox
                        className="k-message-box"
                        placeholder="Type a message..."
                        suffix={
                            <>
                                <Button fillMode="flat" icon="more-horizontal"></Button>
                                <Button fillMode="flat" icon="pencil" className="k-chat-send"></Button>
                            </>
                        }
                    />
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
                </div>
            </section>

            <section>
                <div className="k-widget k-chat">
                    <div className="k-message-list k-avatars">
                        <div className="k-message-list-content">
                            <div className="k-timestamp">Bubbles without avatar</div>
                            <div className="k-message-group k-no-avatar">
                                <p className="k-author">Bruv</p>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">How can I help you?</div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-message-group k-alt k-no-avatar">
                                <p className="k-author">Bruv</p>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">How can I help you?</div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-message-group k-no-avatar">
                                <p className="k-author">Bruv</p>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">
                                        Very long message text that tests message overflowing behavior.
                                        Very long message text that tests message overflowing behavior.
                                    </div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-message-group k-alt k-no-avatar">
                                <p className="k-author">Bruv</p>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">
                                        Unusually_long_word_that_tests_word_break_behavior__unusually_long_word_that_tests_word_break_behavior
                                    </div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Textbox
                        className="k-message-box"
                        placeholder="Type a message..."
                        suffix={
                            <>
                                <Button fillMode="flat" icon="more-horizontal"></Button>
                                <Button fillMode="flat" icon="pencil" className="k-chat-send"></Button>
                            </>
                        }
                    />
                </div>
            </section>

        </div>
    </>
);
