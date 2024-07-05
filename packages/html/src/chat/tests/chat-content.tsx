import { Button } from '../../button';
import { Card, CardDeck, CardBody } from '../../card';
import { ChatMessage, ChatMessageGroup, ChatNormal, ChatQuickReply } from '..';


const styles = `
    .k-chat {
        height: 650px;
    }

    /* needed for test */
    .k-chat .k-chat-bubble {
        white-space: normal;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Bubbles</span>
            <span>Quick replies & card deck</span>
            <section>
                <ChatNormal>
                    <div className="k-timestamp">Bubbles With Avatar</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <ChatMessageGroup alt>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <div className="k-timestamp">Bubbles Without Avatar</div>
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
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                    <ChatQuickReply />
                    <div className="k-timestamp">Card Deck Normal</div>
                    <CardDeck>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5 className="k-card-title">Card Title</h5>
                                <h6 className="k-card-subtitle">Card Subtitle</h6>
                                <p>Some quick example text to make up the bulk of the card's content.</p>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <ChatMessageGroup alt>
                        <ChatMessage className="k-only" text="Message after card deck" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Messages with attachment list</span>
            <span>Card deck scrollable</span>
            <section>
                <ChatNormal>
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
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <div className="k-timestamp">timestamp - day, month 7, 2023</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" text="Message before card deck" />
                    </ChatMessageGroup>
                    <div className="k-card-deck-scrollwrap">
                        <Button icon="chevron-left"></Button>
                        <CardDeck>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </CardDeck>
                        <Button icon="chevron-right"></Button>
                    </div>
                    <ChatMessageGroup alt>
                        <ChatMessage className="k-only" text="Message after card deck" />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage selected className="k-only" text="Message selected" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
