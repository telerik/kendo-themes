/* eslint-disable react/no-unescaped-entities */
import { CardBody, CardDeck, CardHorizontal } from '../../card';


const styles = `
    .k-chat {
        max-width: initial;
        height: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div className="k-widget k-chat">
                <div className="k-message-list k-avatars">
                    <div className="k-message-list-content">
                        <CardDeck>
                            <CardHorizontal>
                                <CardBody>
                                    Normal
                                </CardBody>
                            </CardHorizontal>
                            <CardHorizontal focus>
                                <CardBody>
                                    Focused
                                </CardBody>
                            </CardHorizontal>
                            <CardHorizontal selected>
                                <CardBody>
                                    Selected
                                </CardBody>
                            </CardHorizontal>
                            <CardHorizontal focus selected>
                                <CardBody>
                                    Focused Selected
                                </CardBody>
                            </CardHorizontal>
                        </CardDeck>
                    </div>
                </div>
            </div>

        </div>
    </>
);
