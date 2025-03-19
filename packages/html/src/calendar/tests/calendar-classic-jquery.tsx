import { Button } from '../../button';

const styles = `
    #test-area {
        max-width: 1240px;
    }
    .wrapper {
        display: flex;
        gap: 8px;
    }
`;


export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>jquery classic month</span>
            <span>jquery classic weeknumber</span>
            <span>jquery classic weeknumber with selected range</span>

            <section>
                <div className="k-widget k-calendar k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">March 2018</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview">
                        <table className="k-calendar-table k-month">
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
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">3</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-hover">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-focus">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-selected">
                                        <a className="k-link">7</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">8</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">9</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">10</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">11</a>
                                    </td>
                                    <td className="k-calendar-td k-hover k-focus">
                                        <a className="k-link">12</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-focus">
                                        <a className="k-link">13</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-hover">
                                        <a className="k-link">14</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">15</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">16</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">17</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">18</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">19</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">20</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">21</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">22</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">23</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">24</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td k-today">
                                        <a className="k-link">29</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">30</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">31</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">3</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">7</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-calendar k-week-number k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">March 2018</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview">
                        <table className="k-calendar-table k-month">
                            <thead className="k-calendar-thead">
                                <tr className="k-calendar-tr">
                                    <th className="k-calendar-th">Wk</th>
                                    <th className="k-calendar-th">Su</th>
                                    <th className="k-calendar-th">Mo</th>
                                    <th className="k-calendar-th">Tu</th>
                                    <th className="k-calendar-th">We</th>
                                    <th className="k-calendar-th">Th</th>
                                    <th className="k-calendar-th">Fr</th>
                                    <th className="k-calendar-th">Sa</th>
                                </tr>
                            </thead>
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">9</td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">3</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">10</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-hover">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-focus">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-selected">
                                        <a className="k-link">7</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">8</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">9</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">10</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">11</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">11</a>
                                    </td>
                                    <td className="k-calendar-td k-hover k-focus">
                                        <a className="k-link">12</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-focus">
                                        <a className="k-link">13</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-hover">
                                        <a className="k-link">14</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">15</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">16</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">17</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">12</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">18</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">19</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">20</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">21</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">22</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">23</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">24</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">13</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td k-today">
                                        <a className="k-link">29</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">30</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">31</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">14</td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">3</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">7</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex k-disabled">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-calendar k-week-number k-calendar-range k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">March 2018</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview">
                        <table className="k-calendar-table k-month">
                            <thead className="k-calendar-thead">
                                <tr className="k-calendar-tr">
                                    <th className="k-calendar-th">Wk</th>
                                    <th className="k-calendar-th">Su</th>
                                    <th className="k-calendar-th">Mo</th>
                                    <th className="k-calendar-th">Tu</th>
                                    <th className="k-calendar-th">We</th>
                                    <th className="k-calendar-th">Th</th>
                                    <th className="k-calendar-th">Fr</th>
                                    <th className="k-calendar-th">Sa</th>
                                </tr>
                            </thead>
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">9</td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td k-range-start k-selected k-hover">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td k-range-mid">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend k-range-mid">
                                        <a className="k-link">3</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">10</td>
                                    <td className="k-calendar-td k-weekend k-range-mid">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-range-mid k-hover">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-range-mid">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-range-mid">
                                        <a className="k-link">7</a>
                                    </td>
                                    <td className="k-calendar-td k-range-end k-selected k-hover">
                                        <a className="k-link">8</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">9</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">10</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">11</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">11</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">12</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">13</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">14</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">15</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">16</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">17</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">12</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">18</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">19</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">20</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">21</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">22</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">23</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">24</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">13</td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">25</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">26</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">27</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">28</a>
                                    </td>
                                    <td className="k-calendar-td k-today">
                                        <a className="k-link">29</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">30</a>
                                    </td>
                                    <td className="k-calendar-td k-weekend">
                                        <a className="k-link">31</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-alt">14</td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">1</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">2</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">3</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">4</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">5</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month">
                                        <a className="k-link">6</a>
                                    </td>
                                    <td className="k-calendar-td k-other-month k-weekend">
                                        <a className="k-link">7</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex k-disabled">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

            <span>jquery classic year</span>
            <span>jquery classic decade</span>
            <span>jquery classic century</span>

            <section>
                <div className="k-widget k-calendar k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">2018</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-yearview">
                        <table className="k-calendar-table k-meta-view k-year">
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">Jan</a>
                                    </td>
                                    <td className="k-calendar-td k-hover">
                                        <a className="k-link">Feb</a>
                                    </td>
                                    <td className="k-calendar-td k-today k-focus">
                                        <a className="k-link">Mar</a>
                                    </td>
                                    <td className="k-calendar-td k-selected">
                                        <a className="k-link">Apr</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">May</a>
                                    </td>
                                    <td className="k-calendar-td k-hover k-focus">
                                        <a className="k-link">Jun</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-hover">
                                        <a className="k-link">Jul</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">Aug</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">Sep</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">Oct</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">Nov</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">Dec</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-calendar k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">2010 - 2019</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-decadeview">
                        <table className="k-calendar-table k-meta-view k-decade">
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">2010</a>
                                    </td>
                                    <td className="k-calendar-td k-hover">
                                        <a className="k-link">2011</a>
                                    </td>
                                    <td className="k-calendar-td k-focus">
                                        <a className="k-link">2012</a>
                                    </td>
                                    <td className="k-calendar-td k-selected">
                                        <a className="k-link">2013</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">2014</a>
                                    </td>
                                    <td className="k-calendar-td k-hover k-focus">
                                        <a className="k-link">2015</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-hover">
                                        <a className="k-link">2016</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2027</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td k-today">
                                        <a className="k-link">2018</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2019</a>
                                    </td>
                                    <td className="k-calendar-td"></td>
                                    <td className="k-calendar-td"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-calendar k-calendar-md">
                    <div className="k-header k-hstack">
                        <Button fillMode="flat" className="k-calendar-nav-prev" icon="caret-alt-left"></Button>
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">2000 - 2099</Button>
                        <Button fillMode="flat" className="k-calendar-nav-next" icon="caret-alt-right"></Button>
                    </div>
                    <div className="k-calendar-view k-calendar-centuryview">
                        <table className="k-calendar-table k-meta-view k-century">
                            <tbody className="k-calendar-tbody">
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">1990 - 1999</a>
                                    </td>
                                    <td className="k-calendar-td k-hover">
                                        <a className="k-link">2000 - 2009</a>
                                    </td>
                                    <td className="k-calendar-td k-today k-focus">
                                        <a className="k-link">2010 - 2019</a>
                                    </td>
                                    <td className="k-calendar-td k-selected">
                                        <a className="k-link">2020 - 2029</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">2030 - 2039</a>
                                    </td>
                                    <td className="k-calendar-td k-hover k-focus">
                                        <a className="k-link">2040 - 2049</a>
                                    </td>
                                    <td className="k-calendar-td k-selected k-hover">
                                        <a className="k-link">2050 - 2059</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2060 - 2069</a>
                                    </td>
                                </tr>
                                <tr className="k-calendar-tr">
                                    <td className="k-calendar-td">
                                        <a className="k-link">2070 - 2079</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2080 - 2089</a>
                                    </td>
                                    <td className="k-calendar-td">
                                        <a className="k-link">2090 - 2099</a>
                                    </td>
                                    <td className="k-calendar-td">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-footer">
                        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today k-flex">Thursday, March 29, 2018</Button>
                    </div>
                </div>
            </section>

        </div>

    </>
);
