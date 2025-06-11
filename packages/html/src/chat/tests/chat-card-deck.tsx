import { Button } from '../../button';
import { Card, CardDeck, CardBody } from '../../card';
import { ChatMessage, ChatMessageGroup, ChatNormal } from '..';


const styles = `
    .k-chat {
        height: 700px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Quick replies & card deck</span>
            <span>Card deck scrollable</span>

            <section>
                <ChatNormal>
                    <div className="k-timestamp">Quick Replies</div>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
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
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Message after card deck" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <div className="k-timestamp">timestamp - day, month 7, 2023</div>
                    <ChatMessageGroup>
                        <ChatMessage text="Message before card deck" />
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
                    <ChatMessageGroup type="sender">
                        <ChatMessage selected text="(Selected) Message after card deck" />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage selected text="(Selected) Message selected" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
