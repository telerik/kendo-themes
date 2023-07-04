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
                <Chat dir="rtl" showToolbar={false} showMoreButton={false}>
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

        </div>
    </>
);
