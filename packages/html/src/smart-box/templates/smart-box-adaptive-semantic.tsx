import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListContent, ListGroupItem, ListItem, ListUl } from '../../list';
import { Icon } from '../../icon';
import { IconButton } from '../../button';
import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button.spec';

// Search usage context with the Semantic search mode selected.
export const SmartBoxAdaptiveSemantic = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <ActionSheet
        {...props}
        style={{ width: '100%', ...props.style }}
        header={
            <ActionSheetHeader>
                <SmartBox
                    size="large"
                    separators={false}
                    placeholder="Semantic search"
                    inputAriaLabel="Semantic search"
                    prefix={<Icon icon="zoom-sparkle" className="k-accent-icon" aria-hidden="true" />}
                    suffix={
                        <>
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                            <SmartBoxSendButton />
                        </>
                    }
                />
                <SegmentedControl size="large" stretched thumbStyles={{ left: '2px', right: '50%' }}>
                    <SegmentedControlButton icon="search" selected={true}>Search</SegmentedControlButton>
                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected={false}> AI Assistant</SegmentedControlButton>
                </SegmentedControl>
            </ActionSheetHeader>
        }
    >
        <List size="large">
            <ListContent grouping>
                <ListUl>
                    <ListItem
                        iconClassName="k-smart-box-check-icon"
                        description="Looks for exact word matches across your data"
                    >
                        Search
                    </ListItem>
                    <ListItem
                        iconName="check"
                        iconClassName="k-smart-box-check-icon"
                        description="Understands context to surface the most relevant results"
                    >
                        Semantic search
                    </ListItem>
                </ListUl>
                <ListUl>
                    <ListGroupItem groupIconName="clock-arrow-rotate">Previously asked</ListGroupItem>
                    <ListItem>Amount descending</ListItem>
                </ListUl>
            </ListContent>
        </List>
    </ActionSheet>
);

export default SmartBoxAdaptiveSemantic;
