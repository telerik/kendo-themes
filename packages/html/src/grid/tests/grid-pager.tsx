import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pager } from '../../pager';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>jQuery grid</span>
            <span>Angular grid</span>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header">100px</th>
                                        <th className="k-header">no width</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Row</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>2</td>
                                    <td>Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pager className="k-grid-pager" focus />
                </div>
            </section>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header">100px</th>
                                            <th className="k-header">no width</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Row</td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td>2</td>
                                                <td>Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pager className="k-grid-pager" focus />
                </div>
            </section>


            <span>jQuery grid pager top</span>
            <span>Angular grid pager top</span>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <Pager className="k-grid-pager k-grid-pager-top" />
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header">100px</th>
                                        <th className="k-header">no width</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Row</td>
                                </tr>
                                <tr className="k-alt">
                                    <td>2</td>
                                    <td>Alt row</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <Pager className="k-grid-pager k-grid-pager-top" />
                    <div className="k-grid-aria-root">
                        {/* add padding-left or -right for scrollbar width */}
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap">
                                <table>
                                    <colgroup>
                                        <col style={{ width: "100px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="k-header">100px</th>
                                            <th className="k-header">no width</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="k-grid-container">
                            <div className="k-grid-content k-virtual-content">
                                <div>
                                    <table className="k-grid-table">
                                        <colgroup>
                                            <col style={{ width: "100px" }} />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Row</td>
                                            </tr>
                                            <tr className="k-alt">
                                                <td>2</td>
                                                <td>Alt row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="k-height-container">
                                    {/* set height to scroll height (virtual scrolling) */}
                                    <div style={{ height: '0px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
