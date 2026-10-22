import { TestFrame } from '../popup-margin-frame';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Popup } from '../../popup';

const styles = `
    .k-popup .k-actions {
        outline: 1px dotted red;
    }

    .popup-margin-section {
        margin-block-end: 24px;
        border-block-end: 1px solid #ccc;
    }

    .popup-margin-section > .k-animation-container {
        position: relative;
        width: min-content;
        overflow: visible;
    }

    .popup-margin-section > h3 {
        margin: 0 0 8px;
    }
`;

const scenarios: [string, string, string][] = [
    ['popover', 'popover', 'k-popover-actions'],
    ['scheduler', 'scheduler-quick-actions-popover', 'k-popover-actions'],
    ['prompt', 'prompt-inline', 'k-card-actions'],
    ['prompt', 'prompt-inline-response-generation', 'k-card-actions'],
    ['prompt', 'prompt-output', 'k-card-actions'],
    ['grid', 'grid-angular', ''],
    ['time-selector', 'time-selector', 'Meridian overrides: k-time-footer'],
    ['timepicker', 'timepicker-opened', 'Meridian overrides: k-time-footer'],
    ['timedurationpicker', 'timedurationpicker-expanded', 'Meridian overrides: k-timeduration-footer'],
    ['datetime-selector', 'datetime-selector', 'Meridian overrides: k-datetime-footer'],
    ['datetimepicker', 'datetimepicker-opened', 'Meridian overrides: k-datetime-footer'],
    ['datetimepicker', 'datetimepicker-opened-sizes', 'Meridian overrides: k-datetime-footer']
];

// Every scenario renders action buttons inside a .k-popup that keeps the margin-top
// (Default, Bootstrap, Classic, Meridian). "Meridian overrides" sections are reset to 0 only in Meridian.
export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="popup-margin-section">
                <h3>Generic popup with action buttons</h3>
                <Popup style={{ position: 'relative' }}>
                    <div className="k-p-4">Popup content</div>
                    <ActionButtons alignment="stretched">
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </ActionButtons>
                </Popup>
            </div>
            {scenarios.map(([component, test, note]) => (
                <div className="popup-margin-section" key={test}>
                    <h3>{component}/{test}{note && ` (${note})`}</h3>
                    <TestFrame component={component} test={test} />
                </div>
            ))}
        </div>
    </>
);
