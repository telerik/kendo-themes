import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetHeader } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area> section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select date</div>
                    </ActionSheetHeader>
                    <div className="k-widget k-calendar k-calendar-lg k-calendar-infinite">
                        <div className="k-vstack k-calendar-view k-calendar-monthview">
                            <div className="k-calendar-header k-hstack">
                                <span className="k-button k-nav-fast k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title">December 1999</span>
                                <span className="k-spacer"></span>
                                <span className="k-calendar-nav k-hstack">
                                    <button className="k-calendar-nav-today k-button k-button-md k-button-flat k-button-flat-primary k-rounded-md"> Today </button>
                                </span>
                            </div>
                            <table className="k-calendar-weekdays k-calendar-table">
                                <thead className="k-calendar-thead">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-th">Su</th>
                                        <th className="k-calendar-th">Mo</th>
                                        <th className="k-calendar-th">Tu</th>
                                        <th className="k-calendar-th">We</th>
                                        <th className="k-calendar-th">Th</th>
                                        <th className="k-calendar-th">Fr</th>
                                        <th className="k-calendar-th">Sa</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="k-flex k-content k-scrollable">
                                <table className="k-calendar-table">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-calendar-tbody">
                                        <tr className="k-calendar-tr">
                                            <th className="k-calendar-caption" colSpan={7}>December 1999</th>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">1</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">2</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">3</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">4</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">5</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">6</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">7</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">8</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">9</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">10</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">11</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">12</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">13</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">14</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">15</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">16</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">17</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">18</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">19</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">20</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">21</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">22</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">23</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">24</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">25</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">26</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">27</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">28</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">29</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">30</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">31</span>
                                            </td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                    <tbody className="k-calendar-tbody">
                                        <tr className="k-calendar-tr">
                                            <th className="k-calendar-caption" colSpan={7}>January 2000</th>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">1</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">2</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">3</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">4</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">5</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">6</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">7</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">8</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">9</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">10</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">11</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">12</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">13</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">14</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">15</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">16</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">17</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">18</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">19</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">20</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">21</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">22</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">23</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">24</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">25</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">26</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">27</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">28</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">29</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">30</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">31</span>
                                            </td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select date</div>
                    </ActionSheetHeader>
                    <div className="k-widget k-calendar k-calendar-lg k-calendar-infinite">
                        <div className="k-vstack k-calendar-view k-calendar-monthview">
                            <div className="k-calendar-header k-hstack">
                                <span className="k-button k-nav-fast k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title">December 1999</span>
                                <span className="k-spacer"></span>
                                <span className="k-calendar-nav k-hstack">
                                    <button className="k-calendar-nav-today k-button k-button-md k-button-flat k-button-flat-primary k-rounded-md"> Today </button>
                                </span>
                            </div>
                            <table className="k-calendar-weekdays k-calendar-table">
                                <thead className="k-calendar-thead">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-th">Su</th>
                                        <th className="k-calendar-th">Mo</th>
                                        <th className="k-calendar-th">Tu</th>
                                        <th className="k-calendar-th">We</th>
                                        <th className="k-calendar-th">Th</th>
                                        <th className="k-calendar-th">Fr</th>
                                        <th className="k-calendar-th">Sa</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="k-flex k-content k-scrollable">
                                <table className="k-calendar-table">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-calendar-tbody">
                                        <tr className="k-calendar-tr">
                                            <th className="k-calendar-caption" colSpan={7}>December 1999</th>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">1</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">2</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">3</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">4</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">5</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">6</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">7</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">8</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">9</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">10</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">11</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">12</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">13</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">14</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">15</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">16</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">17</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">18</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">19</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">20</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">21</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">22</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">23</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">24</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">25</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">26</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">27</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">28</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">29</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">30</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">31</span>
                                            </td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                    <tbody className="k-calendar-tbody">
                                        <tr className="k-calendar-tr">
                                            <th className="k-calendar-caption" colSpan={7}>January 2000</th>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">1</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">2</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">3</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">4</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">5</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">6</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">7</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">8</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">9</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">10</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">11</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">12</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">13</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">14</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">15</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">16</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">17</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">18</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">19</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">20</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">21</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">22</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">23</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">24</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">25</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">26</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">27</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">28</span>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">29</span>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <span className="k-link">30</span>
                                            </td>
                                            <td className="k-calendar-td">
                                                <span className="k-link">31</span>
                                            </td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                            <td className="k-empty k-calendar-td">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </ActionSheet>
            </section>
        </div>
    </>
);
