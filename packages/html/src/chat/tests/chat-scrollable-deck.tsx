/* eslint-disable react/no-unescaped-entities */
import { Button } from '../../button';
import { Card, CardDeck, CardBody } from '../../card';
import { Chat, ChatMessage, ChatMessageGroup } from '../../chat';


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
                <Chat showToolbar={false} showMessageBox={false}>
                    <div className="k-timestamp">Card Deck Scrollable</div>
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
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal">
                                <CardBody>
                                    <h5 className="k-card-title">Card Title</h5>
                                    <h6 className="k-card-subtitle">Card Subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </CardDeck>
                        <Button icon="chevron-right"></Button>
                    </div>
                </Chat>
            </section>

        </div>
    </>
);
