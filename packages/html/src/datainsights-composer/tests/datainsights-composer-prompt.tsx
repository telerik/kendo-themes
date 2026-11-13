import { DataInsightsComposerErrorState } from '../templates/datainsights-composer-error';
import { DataInsightsComposerFollowUpState } from '../templates/datainsights-composer-followup';
import { DataInsightsComposerPromptManyDataSources } from '../templates/datainsights-composer-prompt-many-data-sources';
import { DataInsightsComposerPrompt } from '../templates/datainsights-composer-prompt';

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-2 k-gap-6" style={{ maxWidth: '1240px' }}>
        <section>
            <h3>Prompt</h3>
            <DataInsightsComposerPrompt />
        </section>
        <section>
            <h3>Prompt with horizontally scrollable data sources</h3>
            <DataInsightsComposerPromptManyDataSources />
        </section>
        <section>
            <h3>Follow-up</h3>
            <DataInsightsComposerFollowUpState />
        </section>
        <section>
            <h3>Error</h3>
            <DataInsightsComposerErrorState />
        </section>
    </div>
);
