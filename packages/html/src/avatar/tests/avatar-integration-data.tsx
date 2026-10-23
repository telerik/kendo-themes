import { AvatarIntegrationExample as Example, AvatarIntegrationSlot as Slot, avatarIntegrationStyles } from '../../avatar';
import { ChatMessage, ChatMessageGroup } from '../../chat';
import { Card, CardBody, CardHeader } from '../../card';
import { Map } from '../../map';
import { Chart } from '../../chart';

const styles = `${avatarIntegrationStyles}
    #test-area .avatar-chat .avatar-slot > .k-avatar,
    #test-area .avatar-diagram-card .avatar-slot > .k-avatar { margin: 0; }
    #test-area .avatar-chat .avatar-row { flex-direction: row-reverse; }
    #test-area .avatar-diagram-card { width: 240px; position: relative; }
    #test-area .avatar-diagram-card > .avatar-slot {
        position: absolute; inset-inline-start: 12px; top: 50%; transform: translateY(-50%); z-index: 2;
    }
    #test-area .avatar-diagram-card .k-card-header,
    #test-area .avatar-diagram-card .k-card-body { padding-inline-start: 80px; }
    #test-area .avatar-diagram-card .k-card-header,
    #test-area .avatar-bar,
    #test-area .avatar-scheduler-event { display: flex; align-items: center; gap: 8px; }
    #test-area .avatar-map { height: 180px; position: relative; overflow: hidden; }
    #test-area .avatar-map .k-layer { width: 100%; height: 100%; }
    #test-area .avatar-pin { position: absolute; left: 65%; top: 35%; }
    #test-area .avatar-pin::after { content: ''; display: block; width: 2px; height: 10px;
        margin: auto; background: var(--kendo-color-primary); }
    #test-area .avatar-scheduler-event { min-width: 170px; padding: 6px; }
    #test-area .avatar-bar { margin: 12px; }
    #test-area .avatar-bar-fill { height: 18px; background: var(--kendo-color-primary); }
    #test-area .avatar-bar-label { width: 58px; }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <Example title="Chat" defaultSize={32} capacity={32} hostSelector=".k-message-group"
                rationale="M makes the sender recognizable beside the message; XS/S are compact alternatives.">
                {(pixels) => <div className="k-chat" style={{ padding: 8 }}>
                    <ChatMessageGroup type="sender" author="Alex Morgan" avatar={null} className="avatar-chat">
                        <div className="avatar-row"><Slot pixels={pixels} capacity={32} alt="Alex Morgan" />
                            <ChatMessage text="Can you review this?" />
                        </div>
                    </ChatMessageGroup>
                </div>}
            </Example>
            <Example title="Diagram Card" defaultSize={32} capacity={64} hostSelector=".avatar-diagram-card"
                rationale="M shows an uncropped portrait in the card's reserved media space; S is compact, while L/XL remain fully visible but dominate the card.">
                {(pixels) => <div className="k-diagram"><Card className="avatar-diagram-card">
                    <Slot pixels={pixels} capacity={64} alt="Alex Morgan" />
                    <CardHeader><strong>Alex Morgan</strong></CardHeader>
                    <CardBody>Product designer</CardBody>
                </Card></div>}
            </Example>
            <Example title="Map pins" defaultSize={24} capacity={64} hostSelector=".avatar-map"
                rationale="S balances recognition and map visibility; XS is denser, while M/L/XL are fully visible but obscure nearby pins.">
                {(pixels) => <Map className="avatar-map"><div className="avatar-pin" title="Alex Morgan">
                    <Slot pixels={pixels} capacity={64} alt="Alex Morgan" />
                </div></Map>}
            </Example>
            <Example title="Scheduler appointments and events" defaultSize={16} capacity={16} hostSelector=".avatar-scheduler-event"
                rationale="XS is provisional: this synthetic event does not establish real timed, all-day, or agenda slot heights.">
                {(pixels) => <div className="k-scheduler"><div className="k-event avatar-scheduler-event">
                    <Slot pixels={pixels} capacity={16} />
                    <span className="k-event-template k-event-title">Design review</span>
                </div></div>}
            </Example>
            <Example title="Chart: bar labels" defaultSize={16} capacity={16} hostSelector=".k-chart"
                rationale="XS leaves the bars readable; S and above need additional existing plot space.">
                {(pixels) => <Chart aria-label="Bar chart with teammate avatars">
                    {[70, 100, 55].map((width, index) => (
                        <div className="avatar-bar" key={width}>
                            <Slot pixels={pixels} capacity={16} />
                            <span className="avatar-bar-label">{['Alex', 'Jordan', 'Sam'][index]}</span>
                            <span className="avatar-bar-fill" style={{ width }} />
                        </div>
                    ))}
                </Chart>}
            </Example>
        </div>
    </>
);
