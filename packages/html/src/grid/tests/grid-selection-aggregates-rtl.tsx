import { GridWithSelectionAggregates, GridPager } from '../../grid';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Base State (RTL)</span>
            <section className="col-2 k-rtl">
                <GridWithSelectionAggregates className="k-grid-no-scrollbar" pager={( <GridPager dir="rtl" /> )} />
            </section>
            <span className="col-2">Aggregated (RTL)</span>
            <section className="col-2 k-rtl">
                <GridWithSelectionAggregates aggregated className="k-grid-no-scrollbar" pager={( <GridPager dir="rtl" />)} />
            </section>
        </div>
    </>
);
