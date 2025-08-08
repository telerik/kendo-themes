import { Card, CardBody } from '../../card';
import { ChatMessage, ChatNormal, ChatMessageGroup } from '..';


const styles = `
    .k-chat {
        height: 800px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Bubbles</span>
            <span>Messages with attachment list</span>
            <section>
                <ChatNormal dir="rtl">
                    <div className="k-timestamp">Bubbles With Avatar</div>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="First message" />
                        <ChatMessage text="(Selected) Middle message" selected />
                        <ChatMessage text="Last message"  />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage text="First message" />
                        <ChatMessage text="Middle message" />
                        <ChatMessage text="(Selected) Last message" selected />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal dir="rtl">
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="A message with attachment" />
                    </ChatMessageGroup>
                    <div className="k-card-list">
                        <Card>
                            <CardBody>
                                <img width="200px" height="200px" src="/packages/html/assets/sofia.jpg" />
                            </CardBody>
                        </Card>
                    </div>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Another message with attachment" />
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
        </div>
    </>
);
