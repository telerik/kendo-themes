import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListContent, ListGroupItem, ListItem, ListUl } from '../../list';
import { Icon } from '../../icon';
import { IconButton } from '../../button';
import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button.spec';

// Search + AI prompt usage context with suggested prompts and history.
export const SmartBoxAdaptivePrompt = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <ActionSheet
        {...props}
        style={{ width: '100%', ...props.style }}
        header={
            <ActionSheetHeader>
                <SmartBox
                    size="large"
                    separators={false}
                    placeholder="Ask AI about your data grid"
                    inputAriaLabel="Ask AI about your data grid"
                    prefix={<Icon icon="sparkles" className="k-accent-icon" aria-hidden="true" />}
                    suffix={
                        <>
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                            <SmartBoxSendButton />
                        </>
                    }
                />
                <SegmentedControl size="large" stretched thumbStyles={{ left: '50%', right: '2px' }}>
                    <SegmentedControlButton icon="search" selected={false}>Search</SegmentedControlButton>
                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected={true}> AI Assistant</SegmentedControlButton>
                </SegmentedControl>
            </ActionSheetHeader>
        }
    >
        <List size="large">
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
    </ActionSheet>
);

export default SmartBoxAdaptivePrompt;
