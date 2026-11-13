import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { NoData } from '../../nodata';
import { Icon } from '../../icon';
import { IconButton } from '../../button';
import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button.spec';

// Empty history state with no previous prompts.
export const SmartBoxAdaptiveNoData = (props: React.HTMLAttributes<HTMLDivElement>) => (
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
        <NoData className="k-smart-box-no-data">
            <Icon icon="file-clock" size="xxxlarge" />
            <span>No previous prompts</span>
        </NoData>
    </ActionSheet>
);

export default SmartBoxAdaptiveNoData;
