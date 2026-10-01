import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListContent, ListGroupItem, ListItem, ListUl } from '../../list';
import { NoData } from '../../nodata';
import { Icon } from '../../icon';
import { IconButton } from '../../button';
import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button.spec';

// Usage-context scenarios from the Adaptive & Responsive Behavior spec (UX-B00): different SmartBox prefix icon/placeholder, SegmentedControl selection and list content.
const scenarios = {
    prompt: { prefixIcon: 'sparkles', placeholder: 'Ask AI about your data grid', searchSelected: false, searchMode: undefined, historyTitle: 'Previously asked' },
    search: { prefixIcon: 'search', placeholder: 'Search', searchSelected: true, searchMode: 'search', historyTitle: 'Previously searched' },
    semantic: { prefixIcon: 'zoom-sparkle', placeholder: 'Semantic search', searchSelected: true, searchMode: 'semantic', historyTitle: 'Previously asked' },
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
    const { prefixIcon, placeholder, searchSelected, searchMode, historyTitle } = scenarios[scenario];

    return (
        <ActionSheet
            {...other}
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
                    <SegmentedControl size="large" stretched thumbStyles={searchSelected ? { left: '2px', right: '50%' } : { left: '50%', right: '2px' }}>
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
                <List size="large">
                    <ListContent grouping>
                        {searchMode ? (
                            <ListUl>
                                <ListItem
                                    selected={searchMode === 'search'}
                                    iconName={searchMode === 'search' ? 'check' : undefined}
                                    iconClassName="k-smart-box-check-icon"
                                    description="Looks for exact word matches across your data"
                                >
                                    Search
                                </ListItem>
                                <ListItem
                                    selected={searchMode === 'semantic'}
                                    iconName={searchMode === 'semantic' ? 'check' : undefined}
                                    iconClassName="k-smart-box-check-icon"
                                    description="Understands context to surface the most relevant results"
                                >
                                    Semantic search
                                </ListItem>
                            </ListUl>
                        ) : (
                            <ListUl>
                                <ListGroupItem groupIconName="lightbulb">Suggested prompts</ListGroupItem>
                                <ListItem>Filter by account type</ListItem>
                                <ListItem>Show only failed transactions</ListItem>
                                <ListItem>Hide currency column</ListItem>
                                <ListItem>Sort by customer name ascending</ListItem>
                            </ListUl>
                        )}
                        <ListUl>
                            <ListGroupItem groupIconName="clock-arrow-rotate">{historyTitle}</ListGroupItem>
                            {searchMode
                                ? <ListItem>Amount descending</ListItem>
                                : <ListItem description="03:07">Sort by amount descending</ListItem>}
                        </ListUl>
                    </ListContent>
                </List>
            )}
        </ActionSheet>
    );
};

export default SmartBoxAdaptive;
