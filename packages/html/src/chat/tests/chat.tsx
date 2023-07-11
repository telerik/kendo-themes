/* eslint-disable react/no-unescaped-entities */
import { Card, CardDeck, CardBody } from '../../card';
import { Chat, ChatMessage, ChatMessageGroup, ChatQuickReply } from '../../chat';


const styles = `
    /* needed for test */
    .k-chat .k-chat-bubble {
        white-space: normal;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Chat>
                    <div className="k-timestamp">Bubbles</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <ChatMessageGroup alt>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatQuickReply />
                    <div className="k-timestamp">Card Deck</div>
                    <CardDeck>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Chat>
            </section>

            <section>
                <Chat showToolbar={false}>
                    <div className="k-timestamp">Bubbles without avatar</div>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <ChatMessageGroup alt avatar={null}>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage className="k-only" text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior."/>
                    </ChatMessageGroup>
                    <ChatMessageGroup alt avatar={null}>
                        <ChatMessage className="k-only" text="Unusually_long_word_that_tests_word_break_behavior__unusually_long_word_that_tests_word_break_behavior"/>
                    </ChatMessageGroup>
                </Chat>
            </section>

            <section>
                <Chat showToolbar={false}>
                    <div className="k-timestamp">Messages with attachment list</div>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage className="k-only" text="A message with attachment" />
                    </ChatMessageGroup>
                    <div className="k-card-list">
                        <Card>
                            <CardBody>
                                <img width="200px" height="200px" src="/packages/html/assets/sofia.jpg" />
                            </CardBody>
                        </Card>
                    </div>
                    <ChatMessageGroup alt avatar={null}>
                        <ChatMessage className="k-only" text="Another message with attachment" />
                    </ChatMessageGroup>
                    <div className="k-card-list">
                        <Card>
                            <CardBody>
                                <img width="200px" height="200px" src="/packages/html/assets/sofia.jpg" />
                            </CardBody>
                        </Card>
                    </div>
                </Chat>
            </section>

        </div>
    </>
);
