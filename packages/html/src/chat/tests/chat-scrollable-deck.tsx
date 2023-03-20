/* eslint-disable react/no-unescaped-entities */
import ReactDOM from 'react-dom/client';
import { Avatar } from '../../avatar';
import { Button } from '../../button';
import { Card, CardBody, CardDeck } from '../../card';

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
                            <div className="k-timestamp">Card Deck Scrollable</div>
                            <div className="k-message-group">
                                <p className="k-author">Bruv</p>
                                <Avatar type="image">
                                    <img src="/packages/html/assets/avatar.jpg" />
                                </Avatar>
                                <div className="k-message k-only">
                                    <time className="k-message-time">Thu Feb 08 2018</time>
                                    <div className="k-bubble">
                                        Message before card deck
                                    </div>
                                    <span className="k-message-status">Seen</span>
                                </div>
                            </div>
                            <div className="k-card-deck-scrollwrap">
                                <Button icon="arrow-chevron-left"></Button>
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
                                <Button icon="arrow-chevron-right"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
