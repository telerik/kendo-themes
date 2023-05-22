import { Pager } from '../../pager';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>LTR</span>
            <section>
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <div className="k-grid k-grid-md k-grid-display-block k-grid-mobile k-editable">
                                    <Pager className="k-grid-pager" mobile="small" />
                                </div>
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
                                <div className="k-grid k-grid-md k-grid-display-block k-grid-mobile k-editable">
                                    <Pager className="k-grid-pager" mobile="small" dir="rtl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
