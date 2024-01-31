import { GridWithSelectionAggregates, GridPager } from '../../grid';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Base State</span>
            <section className="col-2">
                <GridWithSelectionAggregates className="k-grid-no-scrollbar" pager={( <GridPager /> )} />
            </section>
            <span className="col-2">Aggregated</span>
            <section className="col-2">
                <GridWithSelectionAggregates aggregated className="k-grid-no-scrollbar" pager={( <GridPager /> )} />
            </section>
        </div>
    </>
);
