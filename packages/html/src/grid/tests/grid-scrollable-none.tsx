import { GridWithFilterMenu } from '../../grid';
import { NonScrollableGrid } from '../templates/grid-scrollable-none';

const styles = `
    #test-area {
        max-width: 1000px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Scrollable (reference)</span>
            <span>Scrollable (reference) RTL</span>
            <section>
                <GridWithFilterMenu sortable resizable />
            </section>
            <section>
                <GridWithFilterMenu sortable resizable dir="rtl" />
            </section>
            <span>Not scrollable (React)</span>
            <span>Not scrollable (React) RTL</span>
            <section>
                <NonScrollableGrid />
            </section>
            <section>
                <NonScrollableGrid dir="rtl" />
            </section>
            <span>Not scrollable (Angular)</span>
            <span>Not scrollable (Angular) RTL</span>
            <section>
                <NonScrollableGrid theadClassName="k-grid-header" />
            </section>
            <section>
                <NonScrollableGrid theadClassName="k-grid-header" dir="rtl" />
            </section>
        </div>
    </>
);
