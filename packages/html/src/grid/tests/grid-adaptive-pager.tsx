import { Grid, GridPager } from '../../grid';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>LTR</span>
            <section>
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <Grid className="k-grid-display-block k-grid-mobile k-editable" pager={(
                                    <GridPager adaptive info={false} pageSizes={false} />
                                )}>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span>RTL</span>
            <section className="k-rtl">
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <Grid className="k-grid-display-block k-grid-mobile k-editable" pager={(
                                    <GridPager adaptive info={false} pageSizes={false} dir="rtl" />
                                )}>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
