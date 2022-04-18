import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-listview-item {
        padding: 10px;
        display: inline-block;
        outline: 1px dashed;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>No layout</span>
                <div className="k-widget k-listview">
                    <div className="k-listview-content">
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                    </div>
                </div>
            </section>

            <section>
                <span>Flex layout</span>
                <div className="k-widget k-listview">
                    <div className="k-listview-content k-d-flex k-flex-col k-flex-nowrap">
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                    </div>
                </div>
            </section>

            <section>
                <span>Grid layout</span>
                <div className="k-widget k-listview">
                    <div className="k-listview-content k-d-grid k-grid-cols-2">
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                        <div className="k-listview-item">Listview item</div>
                    </div>
                </div>
            </section>

            <section>
                <span>Interactive states</span>
                <div className="k-widget k-listview k-listview-grid">
                    <div className="k-listview-content k-d-grid k-grid-cols-2">
                        <div className="k-listview-item">Normal item</div>
                        <div className="k-listview-item k-focus">Focus item</div>
                        <div className="k-listview-item k-selected">Selected item</div>
                        <div className="k-listview-item k-selected k-focus">Selected focus item</div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
