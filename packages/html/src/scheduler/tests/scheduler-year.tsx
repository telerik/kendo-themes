import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div id="scheduler" className="k-widget k-scheduler">
                <Toolbar className="k-scheduler-toolbar">
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        2021
                    </Button>
                    <span className="k-spacer"></span>
                    <ButtonGroup className="k-scheduler-views">
                        <Button className="k-group-start">Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button className="k-group-end" selected>Year</Button>
                    </ButtonGroup>
                </Toolbar>

                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-yearview">
                    <div className="k-scheduler-body">
                        <div className="k-widget k-calendar k-calendar-range">
                            <div className="k-calendar-header k-hstack k-hidden">
                                <Button fillMode="flat" className="k-calendar-title k-title">January 2020 - December 2020</Button>
                                <span className="k-spacer"></span>
                                <span className="k-calendar-nav k-hstack">
                                    <Button fillMode="flat" className="k-prev-view" icon="caret-alt-left"></Button>
                                    <Button fillMode="flat" className="k-next-view" icon="caret-alt-right"></Button>
                                </span>
                            </div>
                            <div className="k-calendar-view k-calendar-monthview k-hstack k-align-items-start k-justify-content-center">
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        January 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                    <span className="k-day-indicator"></span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        February 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        March 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        April 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        May 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        June 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        July 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        August 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        September 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        October 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        November 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="k-calendar-table k-month">
                                    <caption className="k-calendar-caption k-month-header">
                                        December 2020
                                    </caption>
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
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">1</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">2</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">3</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">4</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">5</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">6</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">7</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">8</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">9</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">10</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">11</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">12</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">13</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">14</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">15</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">16</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">17</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">18</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">19</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">20</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">21</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">22</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">23</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">24</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">25</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">26</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">27</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">28</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">29</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">30</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td">
                                                <a className="k-link" href="#">
                                                    <span className="k-day">31</span>
                                                </a>
                                            </td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                        <tr className="k-calendar-tr">
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-other-month k-out-of-range"></td>
                                            <td className="k-calendar-td k-weekend k-other-month k-out-of-range"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
