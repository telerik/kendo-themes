import { TestFrame } from '../popup-margin-frame';
import { Popup } from '../../popup';
import { TimeSelectorFastSelection } from '../../time-selector';

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

const scenarios: [string, string][] = [
    ['colorpicker', 'colorpicker-opened'],
    ['prompt', 'prompt-normal'],
    ['grid', 'grid-column-menu'],
    ['grid', 'grid-column-menu-rtl'],
    ['grid', 'grid-column-menu-tabbed'],
    ['grid', 'grid-columns-toolbar-tool'],
    ['grid', 'grid-filter-menu'],
    ['grid', 'grid-filter-menu-multi-checkbox'],
    ['grid', 'grid-filter-toolbar-tool'],
    ['grid', 'grid-group-toolbar-tool'],
    ['grid', 'grid-sort-toolbar-tool'],
    ['pivotgrid', 'pivotgrid-column-menus'],
    ['spreadsheet', 'spreadsheet-borders-config'],
    ['spreadsheet', 'spreadsheet-filter-menu']
];

// Every scenario renders action buttons inside a .k-popup whose margin-top is overridden.
export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="popup-margin-section">
                <h3>Time fast selection (core override)</h3>
                <Popup style={{ position: 'relative' }}>
                    <TimeSelectorFastSelection />
                </Popup>
            </div>
            {scenarios.map(([component, test]) => (
                <div className="popup-margin-section" key={test}>
                    <h3>{component}/{test}</h3>
                    <TestFrame component={component} test={test} />
                </div>
            ))}
        </div>
    </>
);
