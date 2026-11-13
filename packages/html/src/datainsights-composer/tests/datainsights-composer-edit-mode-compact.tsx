import { DataInsightsComposerReportEditPanelCompact } from '../templates/datainsights-composer-report-edit-panel-compact';

// Narrow container: demonstrates the Confirm/Discard/History actions as
// icon-only buttons, which is how the component is expected to render them
// once the surrounding layout drops below ~650px.
export default () => (
    <div id="test-area" style={{ width: '600px', maxWidth: '100%' }}>
        <DataInsightsComposerReportEditPanelCompact />
    </div>
);
