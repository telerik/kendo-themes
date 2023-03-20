/* eslint-disable react/no-unescaped-entities */
import ReactDOM from 'react-dom/client';
import { Card, CardBody, CardDeck } from '../../card';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-chat {
        max-width: initial;
        height: auto;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div className="k-widget k-chat">
                <div className="k-message-list k-avatars">
                    <div className="k-message-list-content">
                        <CardDeck>
                            <Card orientation="horizontal">
                                <CardBody>
                                    Normal
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal" focus>
                                <CardBody>
                                    Focused
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal" selected>
                                <CardBody>
                                    Selected
                                </CardBody>
                            </Card>
                            <Card orientation="horizontal" focus selected>
                                <CardBody>
                                    Focused Selected
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>

        </div>
    </>
);
