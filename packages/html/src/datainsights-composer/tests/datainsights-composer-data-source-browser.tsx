import { DataInsightsComposerDataSourceBrowserPopup } from '../templates/datainsights-composer-data-source-browser-popup';
import { DataInsightsComposerDataSourceFieldsPopup } from '../templates/datainsights-composer-data-source-fields-popup';

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-flex k-gap-6">
            <section>
                <h3>All data sources</h3>
                <DataInsightsComposerDataSourceBrowserPopup />
            </section>
            <section>
                <h3>Single data source</h3>
                <DataInsightsComposerDataSourceFieldsPopup />
            </section>
        </div>
    </>
);
