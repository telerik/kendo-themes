import { DataInsightsComposerHistoryCheckpoint, DataInsightsComposerPopupListGroupHeader } from '..';
import { List, ListContent } from '../../list';
import { Popup } from '../../popup';
import { classNames } from '../../misc';

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <h3>History popup states</h3>
            <Popup className={classNames('k-list-container', 'k-datainsights-composer-popup')} containerRole="region" containerAriaLabel="History">
                <DataInsightsComposerPopupListGroupHeader>
                    Version history
                </DataInsightsComposerPopupListGroupHeader>
                <List>
                    <ListContent aria-label="History">
                        <DataInsightsComposerHistoryCheckpoint current label="Current (no restore action)" timestamp="Today, 9:31 AM" />
                        <DataInsightsComposerHistoryCheckpoint focus label="Focus" timestamp="Today, 9:26 AM" />
                        <DataInsightsComposerHistoryCheckpoint hover label="Hover" timestamp="Today, 9:20 AM" />
                        <DataInsightsComposerHistoryCheckpoint label="Default" timestamp="Today, 9:14 AM" />
                    </ListContent>
                </List>
            </Popup>
        </div>
    </>
);
