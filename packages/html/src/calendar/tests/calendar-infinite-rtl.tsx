import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>infinite calendar month</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2018</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                                <li><span>Apr</span></li>
                                <li><span>May</span></li>
                                <li><span>Jun</span></li>
                                <li><span>Jul</span></li>
                                <li><span>Aug</span></li>
                                <li><span>Sep</span></li>
                                <li><span>Oct</span></li>
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2019</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                                <li><span>Apr</span></li>
                                <li><span>May</span></li>
                                <li><span>Jun</span></li>
                                <li><span>Jul</span></li>
                                <li><span>Aug</span></li>
                                <li><span>Sep</span></li>
                                <li><span>Oct</span></li>
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2020</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                                <li><span>Apr</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">April 2018</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <table className="k-calendar-table k-calendar-weekdays">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
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
                        <div className="k-content k-scrollable k-flex">
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
                                        <th className="k-calendar-caption" scope="col" colSpan={7}>April 2018</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">1</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">7</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">8</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">14</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">15</span>
                                        </td>
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">16</span>
                                        </td>
                                        <td className="k-calendar-td k-focus">
                                            <span className="k-link">17</span>
                                        </td>
                                        <td className="k-calendar-td k-selected">
                                            <span className="k-link">18</span>
                                        </td>
                                        <td className="k-calendar-td k-hover k-focus">
                                            <span className="k-link">19</span>
                                        </td>
                                        <td className="k-calendar-td k-selected k-focus">
                                            <span className="k-link">20</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend k-selected k-hover">
                                            <span className="k-link">21</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">22</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">28</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">29</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">30</span>
                                        </td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={7}>May 2018</th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar with long month names</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>de nov.</span></li>
                                <li><span>de des.</span></li>
                                <li><span className="k-calendar-navigation-marker">2018</span></li>
                                <li><span>de febr.</span></li>
                                <li><span>de març</span></li>
                                <li><span>d’abr.</span></li>
                                <li><span>de maig</span></li>
                                <li><span>de juny</span></li>
                                <li><span>de jul.</span></li>
                                <li><span>d’ag.</span></li>
                                <li><span>de set.</span></li>
                                <li><span>d’oct.</span></li>
                                <li><span>de nov.</span></li>
                                <li><span>de des.</span></li>
                                <li><span className="k-calendar-navigation-marker">2019</span></li>
                                <li><span>de febr.</span></li>
                                <li><span>de març</span></li>
                                <li><span>d’abr.</span></li>
                                <li><span>de maig</span></li>
                                <li><span>de juny</span></li>
                                <li><span>de jul.</span></li>
                                <li><span>d’ag.</span></li>
                                <li><span>de set.</span></li>
                                <li><span>d’oct.</span></li>
                                <li><span>de nov.</span></li>
                                <li><span>de des.</span></li>
                                <li><span className="k-calendar-navigation-marker">2020</span></li>
                                <li><span>de febr.</span></li>
                                <li><span>de març</span></li>
                                <li><span>d’abr.</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">d’abril 2018</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <table className="k-calendar-table k-calendar-weekdays">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-calendar-thead">
                                <tr className="k-calendar-tr">
                                    <th className="k-calendar-th">dg.</th>
                                    <th className="k-calendar-th">dl.</th>
                                    <th className="k-calendar-th">dt.</th>
                                    <th className="k-calendar-th">dc.</th>
                                    <th className="k-calendar-th">dj.</th>
                                    <th className="k-calendar-th">dv.</th>
                                    <th className="k-calendar-th">ds.</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="k-content k-scrollable k-flex">
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
                                        <th className="k-calendar-caption" scope="col" colSpan={7}>d’abril 2018</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">1</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2</span>
                                        </td>
                                        <td className="k-calendar-td k-today">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">7</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">8</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">14</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">15</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">21</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">22</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">28</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">29</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">30</span>
                                        </td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                        <td className="k-calendar-td k-other-month"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={7}>May 2018</th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar year</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>2013</span></li>
                                <li><span>2014</span></li>
                                <li><span>2015</span></li>
                                <li><span>2016</span></li>
                                <li><span>2017</span></li>
                                <li><span>2018</span></li>
                                <li><span>2019</span></li>
                                <li><span className="k-calendar-navigation-marker">2020</span></li>
                                <li><span>2021</span></li>
                                <li><span>2022</span></li>
                                <li><span>2023</span></li>
                                <li><span>2024</span></li>
                                <li><span>2025</span></li>
                                <li><span>2026</span></li>
                                <li><span>2027</span></li>
                                <li><span>2028</span></li>
                                <li><span>2029</span></li>
                                <li><span className="k-calendar-navigation-marker">2030</span></li>
                                <li><span>2031</span></li>
                                <li><span>2032</span></li>
                                <li><span>2033</span></li>
                                <li><span>2034</span></li>
                                <li><span>2035</span></li>
                                <li><span>2036</span></li>
                                <li><span>2037</span></li>
                                <li><span>2038</span></li>
                                <li><span>2039</span></li>
                                <li><span className="k-calendar-navigation-marker">2040</span></li>
                                <li><span>2041</span></li>
                                <li><span>2042</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-yearview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">2018</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <div className="k-content k-scrollable k-flex">
                            <table className="k-calendar-table">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2018</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jan</span>
                                        </td>
                                        <td className="k-calendar-td k-hover">
                                            <span className="k-link">Feb</span>
                                        </td>
                                        <td className="k-calendar-td k-focus">
                                            <span className="k-link">Mar</span>
                                        </td>
                                        <td className="k-calendar-td k-selected">
                                            <span className="k-link">Apr</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">May</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jun</span>
                                        </td>
                                        <td className="k-calendar-td k-hover k-focus">
                                            <span className="k-link">Jul</span>
                                        </td>
                                        <td className="k-calendar-td k-selected k-hover">
                                            <span className="k-link">Aug</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">Sep</span>
                                        </td>
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">Oct</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Nov</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Dec</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2019</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jan</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Feb</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Mar</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Apr</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">May</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jun</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jul</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Aug</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">Sep</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Oct</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Nov</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Dec</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar decade</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>1960</span></li>
                                <li><span>1970</span></li>
                                <li><span>1980</span></li>
                                <li><span>1990</span></li>
                                <li><span className="k-calendar-navigation-marker">2000</span></li>
                                <li><span>2010</span></li>
                                <li><span>2020</span></li>
                                <li><span>2030</span></li>
                                <li><span>2040</span></li>
                                <li><span>2050</span></li>
                                <li><span>2060</span></li>
                                <li><span>2070</span></li>
                                <li><span>2080</span></li>
                                <li><span>2090</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-decadeview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">2010 - 2019</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <div className="k-content k-scrollable k-flex">
                            <table className="k-calendar-table">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2010 - 2019</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2010</span>
                                        </td>
                                        <td className="k-calendar-td k-hover">
                                            <span className="k-link">2011</span>
                                        </td>
                                        <td className="k-calendar-td k-focus">
                                            <span className="k-link">2012</span>
                                        </td>
                                        <td className="k-calendar-td k-selected">
                                            <span className="k-link">2013</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2014</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2015</span>
                                        </td>
                                        <td className="k-calendar-td k-hover k-focus">
                                            <span className="k-link">2016</span>
                                        </td>
                                        <td className="k-calendar-td k-selected k-hover">
                                            <span className="k-link">2017</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">2018</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2019</span>
                                        </td>
                                        <td className="k-calendar-td"></td>
                                        <td className="k-calendar-td"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2020 - 2029</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2020</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2021</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2022</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2023</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2024</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2025</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2026</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2027</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2028</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2029</span>
                                        </td>
                                        <td className="k-calendar-td"></td>
                                        <td className="k-calendar-td"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar century</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>1900</span></li>
                                <li><span className="k-calendar-navigation-marker">2000</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-centuryview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">2000 - 2099</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <div className="k-content k-scrollable k-flex">
                            <table className="k-calendar-table">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>1900 - 1990</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">1900</span>
                                        </td>
                                        <td className="k-calendar-td k-hover">
                                            <span className="k-link">1910</span>
                                        </td>
                                        <td className="k-calendar-td k-focus">
                                            <span className="k-link">1920</span>
                                        </td>
                                        <td className="k-calendar-td k-selected">
                                            <span className="k-link">1930</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">1940</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">1950</span>
                                        </td>
                                        <td className="k-calendar-td k-hover k-focus">
                                            <span className="k-link">1960</span>
                                        </td>
                                        <td className="k-calendar-td k-selected k-hover">
                                            <span className="k-link">1970</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">1980</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">1990</span>
                                        </td>
                                        <td className="k-calendar-td"></td>
                                        <td className="k-calendar-td"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2000 - 2090</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2000</span>
                                        </td>
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">2010</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2020</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2030</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2040</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2050</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2060</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2070</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">2080</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">2090</span>
                                        </td>
                                        <td className="k-calendar-td"></td>
                                        <td className="k-calendar-td"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar empty cells</div>
                <div className="k-widget k-calendar k-calendar-infinite" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset" style={{ transform: "translateY(136px)" }}>
                                <li><span>2018</span></li>
                                <li><span>2019</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "328px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-yearview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">2018</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <div className="k-content k-scrollable k-flex">
                            <table className="k-calendar-table" style={{ transform: "translateY(-35px)" }}>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2018</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Nov</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Dec</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={4}>2019</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td">
                                            <span className="k-link">Jan</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">Feb</span>
                                        </td>
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">Mar</span>
                                        </td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "435px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>infinite calendar - week number column</div>
                <div className="k-widget k-calendar k-calendar-infinite k-week-number" dir="rtl">
                    <div className="k-calendar-navigation">
                        <span className="k-calendar-navigation-highlight"></span>
                        <div className="k-content k-scrollable">
                            <ul className="k-reset">
                                <li><span>Oct</span></li>
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2020</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                                <li><span>Apr</span></li>
                                <li><span>May</span></li>
                                <li><span>Jun</span></li>
                                <li><span>Jul</span></li>
                                <li><span>Aug</span></li>
                                <li><span>Sep</span></li>
                                <li><span>Oct</span></li>
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2021</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                                <li><span>Apr</span></li>
                                <li><span>May</span></li>
                                <li><span>Jun</span></li>
                                <li><span>Jul</span></li>
                                <li><span>Aug</span></li>
                                <li><span>Sep</span></li>
                                <li><span>Oct</span></li>
                                <li><span>Nov</span></li>
                                <li><span>Dec</span></li>
                                <li><span className="k-calendar-navigation-marker">2022</span></li>
                                <li><span>Feb</span></li>
                                <li><span>Mar</span></li>
                            </ul>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                    <div className="k-calendar-view k-calendar-monthview k-vstack">
                        <div className="k-calendar-header k-hstack">
                            <Button fillMode="flat" className="k-calendar-title k-title">March 2020</Button>
                            <span className="k-spacer"></span>
                            <span className="k-calendar-nav k-hstack">
                                <span className="k-calendar-nav-today">Today</span>
                            </span>
                        </div>
                        <table className="k-calendar-table k-calendar-weekdays">
                            <thead className="k-calendar-thead">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <tr className="k-calendar-tr">
                                    <th className="k-calendar-th"></th>
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
                        <div className="k-content k-scrollable k-flex">
                            <table className="k-calendar-table">
                                <colgroup>
                                    <col />
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
                                        <th className="k-calendar-caption" scope="col" colSpan={8}>March 2020</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">10</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">1</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-today">
                                            <span className="k-link">6</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">7</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">11</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">8</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">14</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">12</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">15</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">21</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">13</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">22</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">28</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">14</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">29</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">30</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">31</span>
                                        </td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={8}>April 2020</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">14</td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
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
                                        <td className="k-calendar-td k-alt">15</td>
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
                                        <td className="k-calendar-td k-alt">16</td>
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
                                        <td className="k-calendar-td k-alt">17</td>
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
                                        <td className="k-calendar-td k-alt">18</td>
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
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={8}>May 2020</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">18</td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">1</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">2</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">19</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">8</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">9</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">20</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">10 </span>
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">15</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">21</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">22</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">23</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">22</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">29</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">30</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">23</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">31</span>
                                        </td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={8}>June 2020</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">23</td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">1</span>
                                        </td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">6</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">24</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">11</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">12</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">13</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">25</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">18</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">19</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">20</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">26</td>
                                        <td className="k-calendar-td k-weekend">
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
                                        <td className="k-calendar-td">
                                            <span className="k-link">25</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">26</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">27</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">27</td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">28</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">29</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">30</span>
                                        </td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                                <tbody className="k-calendar-tbody">
                                    <tr className="k-calendar-tr">
                                        <th className="k-calendar-caption" scope="col" colSpan={8}>July 2020</th>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">27</td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
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
                                        <td className="k-calendar-td k-alt">28</td>
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
                                        <td className="k-calendar-td k-alt">29</td>
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
                                        <td className="k-calendar-td k-alt">30</td>
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
                                            <span className="k-link">3</span>
                                        </td>
                                        <td className="k-calendar-td">
                                            <span className="k-link">24</span>
                                        </td>
                                        <td className="k-calendar-td k-weekend">
                                            <span className="k-link">25</span>
                                        </td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-alt">31</td>
                                        <td className="k-calendar-td">
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
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                    <tr className="k-calendar-tr">
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                        <td className="k-calendar-td k-empty"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
