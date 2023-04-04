import ReactDOM from 'react-dom/client';
import { TimeSelector } from '../time-selector.spec';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';
import { TimeSelectorHeader } from '../time-selector-header';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>HH:mm:ss:SSS tt</span>
            <span>HH:mm:ss tt</span>
            <span>HH</span>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
                        <TimeSelector columns={[ "HH", "mm", "ss", "SSS", "tt" ]} focusedColumn="HH" header={(
                            <TimeSelectorHeader title="13:14:07:189 PM">
                                <Button fillMode="flat" className="k-time-now">Now</Button>
                            </TimeSelectorHeader>
                        )}/>
                        <ActionButtons alignment="stretched" className="k-time-footer">
                            <Button className="k-time-cancel">Cancel</Button>
                            <Button themeColor="primary" className="k-time-accept">Set</Button>
                        </ActionButtons>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
                        <TimeSelector columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="mm" header={(
                            <TimeSelectorHeader title="10:00:00 AM">
                                <Button fillMode="flat" className="k-time-now">Now</Button>
                            </TimeSelectorHeader>
                        )}/>
                        <ActionButtons alignment="stretched" className="k-time-footer">
                            <Button className="k-time-cancel">Cancel</Button>
                            <Button themeColor="primary" className="k-time-accept">Set</Button>
                        </ActionButtons>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
                        <TimeSelector columns={[ "HH" ]} header={(
                            <TimeSelectorHeader title="10">
                                <Button fillMode="flat" className="k-time-now">Now</Button>
                            </TimeSelectorHeader>
                        )}/>
                        <ActionButtons alignment="stretched" className="k-time-footer">
                            <Button className="k-time-cancel">Cancel</Button>
                            <Button themeColor="primary" className="k-time-accept">Set</Button>
                        </ActionButtons>
                    </div>
                </div>
            </section>
        </div>
    </>
);
