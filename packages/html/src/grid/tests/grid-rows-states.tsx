import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    section {
        position: relative;
    }
    .k-marquee {
        width: 100px;
        height: 50px;
        left: 100px;
        top: 50px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-widget k-grid k-grid-no-scrollbar">
                    <table>
                        <colgroup>
                            <col style={{ width: '50px' }} /><col /><col className="k-sorted" /><col /><col />
                        </colgroup>
                        <thead className="k-grid-header">
                            <tr>
                                <th>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </th>
                                <th className="k-header">Base</th>
                                <th className="k-header k-sorted">Sorted</th>
                                <th className="k-header">Focus</th>
                                <th className="k-header">Selected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Normal row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Focus</td>
                                <td className="k-selected">Selected</td>
                            </tr>
                            <tr className="k-alt">
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Alt row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Alt + Focus</td>
                                <td className="k-selected">Alt + Selected</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="k-hover">
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Sorted</td>
                                <td>Hovered row</td>
                                <td className="k-focus">Hover + Focus</td>
                                <td className="k-selected">Hover + Selected</td>
                            </tr>
                            <tr className="k-alt k-hover">
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Alt hovered row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Alt + Hover + Focus</td>
                                <td className="k-selected">Alt + Hover + Selected</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="k-focus">
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Focused row</td>
                                <td>Sorted</td>
                                <td>N/A</td>
                                <td className="k-selected">Focus + Selected</td>
                            </tr>
                            <tr className="k-alt k-focus">
                                <td>
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Alt focused row</td>
                                <td>Sorted</td>
                                <td>N/A</td>
                                <td className="k-selected">Alt + Focus + Selected</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="k-selected">
                                <td>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Selected row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Selected + Focus</td>
                                <td>N/A</td>
                            </tr>
                            <tr className="k-alt k-selected">
                                <td>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Alt selected row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Alt + Selected + Focus</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="k-hover k-selected">
                                <td>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Hover + Selected row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Hover + Selected + Focus</td>
                                <td>N/A</td>
                            </tr>
                            <tr className="k-alt k-hover k-selected">
                                <td>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td>Alt + Hover selected row</td>
                                <td>Sorted</td>
                                <td className="k-focus">Alt + Hover + Selected + Focus</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="k-marquee"><div className="k-marquee-color"></div></div>
            </section>

        </div>
    </>
);
