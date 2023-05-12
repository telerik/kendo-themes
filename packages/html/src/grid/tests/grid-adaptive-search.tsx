import { Button } from '../../button';
import { Searchbox } from '../../searchbox';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <div className="k-pane-wrapper k-widget" style={{ height: "100px" }}>
                <div className="k-pane">
                    <div className="k-view k-widget">
                        <div className="k-stretched-view k-content">
                            <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-mobile">
                                <Toolbar className="k-grid-toolbar">
                                    <Button className="k-grid-pdf" icon="file-pdf">Export to PDF</Button>
                                    <Searchbox className="k-grid-search" placeholder="Search..." />
                                </Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4>RTL</h4>
            <div className="k-pane-wrapper k-widget k-rtl" style={{ height: "100px" }}>
                <div className="k-pane">
                    <div className="k-view k-widget">
                        <div className="k-stretched-view k-content">
                            <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-mobile">
                                <Toolbar className="k-grid-toolbar">
                                    <Button className="k-grid-pdf" icon="file-pdf">Export to PDF</Button>
                                    <Searchbox className="k-grid-search" placeholder="Search..." />
                                </Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
