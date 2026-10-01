import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListContent, ListGroupItem, ListItem, ListUl } from '../../list';
import { NoData } from '../../nodata';
import { Icon } from '../../icon';
import { IconButton } from '../../button';
import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button.spec';

// Usage-context scenarios from the Adaptive & Responsive Behavior spec (UX-B00): same list content, different SmartBox prefix icon/placeholder and SegmentedControl selection.
const scenarios = {
    prompt: { prefixIcon: 'sparkles', placeholder: 'Ask AI about your data grid', searchSelected: false },
    search: { prefixIcon: 'search', placeholder: 'Search your data grid', searchSelected: true },
    semantic: { prefixIcon: 'zoom-sparkle', placeholder: 'Ask AI to search semantically', searchSelected: false },
};

export type SmartBoxAdaptiveProps = {
    scenario?: keyof typeof scenarios;
    empty?: boolean;
};

export const SmartBoxAdaptive = (
    props: SmartBoxAdaptiveProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { scenario = 'prompt', empty, style, ...other } = props;
    const { prefixIcon, placeholder, searchSelected } = scenarios[scenario];

    return (
        <ActionSheet
            {...other}
            side="bottom"
            resizable
            constrained
            style={{ width: '100%', ...style }}
            header={
                <ActionSheetHeader>
                    <SmartBox
                        size="large"
                        separators={false}
                        placeholder={placeholder}
                        inputAriaLabel={placeholder}
                        prefix={<Icon icon={prefixIcon} className="k-accent-icon" aria-hidden="true" />}
                        suffix={
                            <>
                                <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                                <SmartBoxSendButton />
                            </>
                        }
                    />
                    <SegmentedControl stretched thumbStyles={searchSelected ? { left: '2px', right: '50%' } : { left: '50%', right: '2px' }}>
                        <SegmentedControlButton icon="search" selected={searchSelected}>Search</SegmentedControlButton>
                        <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected={!searchSelected}> AI Assistant</SegmentedControlButton>
                    </SegmentedControl>
                </ActionSheetHeader>
            }
        >
            {empty ? (
                <NoData className="k-smart-box-no-data">
                    <Icon icon="file-clock" size="xxxlarge" />
                    <span>No previous prompts</span>
                </NoData>
            ) : (
                <List>
                    <ListContent grouping>
                        <ListUl>
                            <ListGroupItem groupIconName="lightbulb">Suggested prompts</ListGroupItem>
                            <ListItem>Filter by account type</ListItem>
                            <ListItem>Show only failed transactions</ListItem>
                            <ListItem>Hide currency column</ListItem>
                            <ListItem>Sort by customer name ascending</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem groupIconName="clock-arrow-rotate">Previously asked</ListGroupItem>
                            <ListItem description="03:07">Sort by amount descending</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            )}
        </ActionSheet>
    );
};

export default SmartBoxAdaptive;
