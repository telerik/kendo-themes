import TimeSelector from "../time-selector.spec";
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';
import { TimeSelectorHeader } from '../time-selector-header';
import { Popup } from '../../popup';

export const TimeSelectorMinute = (props) => (
    <Popup
        children={[
            <TimeSelector columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="mm" header={(
                <TimeSelectorHeader title="10:00:00 AM">
                    <Button fillMode="flat" className="k-time-now">Now</Button>
                </TimeSelectorHeader>
            )}/>,
            <ActionButtons alignment="stretched" className="k-time-footer">
                <Button className="k-time-cancel">Cancel</Button>
                <Button themeColor="primary" className="k-time-accept">Set</Button>
            </ActionButtons>
        ]}
        {...props}
    >
    </Popup>
);
