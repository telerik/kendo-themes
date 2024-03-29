import TimeSelector from "../time-selector.spec";
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';
import { TimeSelectorHeader } from '../time-selector-header';
import { Popup } from '../../popup';

export const TimeSelectorAll = (props) => (
    <Popup
        children={
            <>
                <TimeSelector columns={[ "HH", "mm", "ss", "SSS", "tt" ]} focusedColumn="HH" header={(
                    <TimeSelectorHeader title="13:14:07:189 PM">
                        <Button fillMode="flat" className="k-time-now">Now</Button>
                    </TimeSelectorHeader>
                )}/>
                <ActionButtons alignment="stretched" className="k-time-footer">
                    <Button className="k-time-cancel">Cancel</Button>
                    <Button themeColor="primary" className="k-time-accept">Set</Button>
                </ActionButtons>
            </>
        }
        {...props}
    >
    </Popup>
);
