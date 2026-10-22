import { List, ListContent } from '../../list';
import { Popup } from '../../popup';
import { classNames } from '../../misc';
import { DataInsightsComposerHistoryCheckpoint, DataInsightsComposerPopupListGroupHeader } from '..';

export const DataInsightsComposerHistoryPopup = (props: any) => {
    const { className, ...other } = props;

    return (
        <Popup
            {...other}
            className={classNames('k-list-container', 'k-datainsights-composer-popup', className)}
            containerRole="region"
            containerAriaLabel="History"
        >
            <DataInsightsComposerPopupListGroupHeader>
                Version history
            </DataInsightsComposerPopupListGroupHeader>
            <List>
                <ListContent aria-label="History">
                    <DataInsightsComposerHistoryCheckpoint current label="Sorted by revenue descending" timestamp="Today, 9:31 AM" />
                    <DataInsightsComposerHistoryCheckpoint label="Grouped by region" timestamp="Today, 9:26 AM" />
                    <DataInsightsComposerHistoryCheckpoint label="Filtered to the last 6 months and grouped by customer region" timestamp="Today, 9:20 AM" />
                    <DataInsightsComposerHistoryCheckpoint label="Revenue by territory" timestamp="Today, 9:14 AM" />
                </ListContent>
            </List>
        </Popup>
    );
};

export default DataInsightsComposerHistoryPopup;
