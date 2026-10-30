import { AvatarIntegrationExample as Example, AvatarIntegrationSlot as Slot, avatarIntegrationStyles } from '../../avatar';
import { Form, FormField } from '../../form';
import { MessageBox } from '../../message-box';
import { Notification } from '../../notification';
import { Card, CardBody, CardHeader } from '../../card';
import { PanelBar, PanelBarItem, PanelBarContent } from '../../panelbar';
import { Appbar, AppbarSection } from '../../appbar';
import { ExpansionPanel } from '../../expansion-panel';
import { TaskBoardCard } from '../../taskboard';
import { TimelineCard } from '../../timeline';
import { Tooltip } from '../../tooltip';

const styles = `${avatarIntegrationStyles}
    #test-area .k-card-header, #test-area .k-appbar-section { display: flex; align-items: center; gap: 8px; }
    #test-area .k-card, #test-area .k-taskboard-card { width: 190px; }
    #test-area .avatar-profile-card { position: relative; width: 240px; }
    #test-area .avatar-profile-card > .avatar-slot {
        position: absolute; inset-inline-end: 12px; top: 50%; transform: translateY(-50%); z-index: 2;
    }
    #test-area .avatar-profile-card > .avatar-slot > .k-avatar { margin: 0; }
    #test-area .avatar-profile-card .k-card-header,
    #test-area .avatar-profile-card .k-card-body { padding-inline-end: 80px; }
    #test-area .k-appbar { min-width: 190px; }
    #test-area .k-messagebox { width: 200px; }
    #test-area .k-panelbar { min-width: 210px; }
    #test-area .k-notification { max-width: 220px; }
    #test-area .k-expander { width: 215px; }
    #test-area .k-tooltip { position: static; max-width: 210px; }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <Example title="Form" defaultSize={16} capacity={16} hostSelector=".k-form-field"
                rationale="XS keeps the form field compact; S only fits when an existing editor row already has room.">
                {(pixels) => <Form><FormField label="Profile photo" editor={
                    <span className="avatar-row"><Slot pixels={pixels} capacity={16} alt="Alex Morgan" />Alex Morgan</span>
                } /></Form>}
            </Example>
            <Example title="MessageBox" defaultSize={16} capacity={16} hostSelector=".k-messagebox"
                rationale="XS is conditional: even this size can wrap text and increase the natural height in Fluent. The preview holds the original height and may clip text.">
                {(pixels) => <MessageBox><span className="avatar-row">
                    <Slot pixels={pixels} capacity={16} />Alex Morgan joined the team.
                </span></MessageBox>}
            </Example>
            <Example title="Notification" defaultSize={16} capacity={16} hostSelector=".k-notification"
                rationale="XS is conditional: Bootstrap may wrap this content onto an extra line. The original height is retained by clipping overflow.">
                {(pixels) => <Notification><span className="avatar-row">
                    <Slot pixels={pixels} capacity={16} />New message from Alex.
                </span></Notification>}
            </Example>
            <Example title="Card" defaultSize={48} capacity={64} hostSelector=".k-card"
                rationale="L highlights the profile in a reserved card-side area; XS/S/M are more compact, and XL also fits.">
                {(pixels) => <Card className="avatar-profile-card">
                    <Slot pixels={pixels} capacity={64} alt="Alex Morgan" />
                    <CardHeader><strong>Alex Morgan</strong></CardHeader>
                    <CardBody>Profile card</CardBody>
                </Card>}
            </Example>
            <Example title="PanelBar" defaultSize={16} capacity={16} hostSelector=".k-panelbar"
                rationale="XS respects the existing panel item and disclosure alignment; larger images need reserved space.">
                {(pixels) => <PanelBar><PanelBarItem text="Team members" expanded>
                    <PanelBarContent><span className="avatar-row">
                        <Slot pixels={pixels} capacity={16} />Alex Morgan
                    </span></PanelBarContent>
                </PanelBarItem></PanelBar>}
            </Example>
            <Example title="AppBar" defaultSize={16} capacity={16} hostSelector=".k-appbar"
                rationale="XS fits without changing bar height; S/M need an existing account-control slot.">
                {(pixels) => <Appbar><AppbarSection>
                    <span className="k-spacer">Workspace</span>
                    <Slot pixels={pixels} capacity={16} alt="Account" />
                </AppbarSection></Appbar>}
            </Example>
            <Example title="ExpansionPanel Content" defaultSize={16} capacity={16} hostSelector=".k-expander"
                rationale="XS preserves content height; larger images need a pre-existing media region.">
                {(pixels) => <ExpansionPanel title="Team" expanded><span className="avatar-row">
                    <Slot pixels={pixels} capacity={16} />Alex Morgan
                </span></ExpansionPanel>}
            </Example>
            <Example title="TaskBoard Card" defaultSize={32} capacity={64} hostSelector=".k-taskboard-card"
                rationale="M identifies the assignee without crowding the task; XS/S are denser, while L/XL fit the reserved side area.">
                {(pixels) => <TaskBoardCard className="avatar-profile-card">
                    <Slot pixels={pixels} capacity={64} alt="Alex Morgan" />
                    <CardHeader>Design review</CardHeader>
                    <CardBody>Alex Morgan</CardBody>
                </TaskBoardCard>}
            </Example>
            <Example title="Timeline Card" defaultSize={32} capacity={64} hostSelector=".k-card"
                rationale="M balances the author image with the milestone; XS/S are compact, and L/XL use the reserved side area.">
                {(pixels) => <TimelineCard className="avatar-profile-card">
                    <Slot pixels={pixels} capacity={64} alt="Alex Morgan" />
                    <CardHeader>Milestone</CardHeader>
                    <CardBody>Alex Morgan</CardBody>
                </TimelineCard>}
            </Example>
            <Example title="Tooltip" defaultSize={16} capacity={16} hostSelector=".k-tooltip"
                rationale="XS limits text wrapping; larger images are conditional on the existing tooltip width and content height.">
                {(pixels) => <Tooltip content={
                    <span className="avatar-row"><Slot pixels={pixels} capacity={16} />Alex Morgan</span>
                } />}
            </Example>
        </div>
    </>
);
