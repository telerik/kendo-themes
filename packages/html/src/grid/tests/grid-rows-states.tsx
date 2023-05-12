import { Checkbox } from '../../checkbox';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <table className="k-table k-table-md k-grid-table">
                        <colgroup>
                            <col style={{ width: '50px' }} /><col /><col className="k-sorted" /><col /><col />
                        </colgroup>
                        <thead className="k-grid-thead k-grid-header">
                            <tr className="k-table-row">
                                <th className="k-table-th">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </th>
                                <th className="k-table-th k-header">Base</th>
                                <th className="k-table-th k-header k-sorted">Sorted</th>
                                <th className="k-table-th k-header">Focus</th>
                                <th className="k-table-th k-header">Selected</th>
                            </tr>
                        </thead>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Normal row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Focus</td>
                                <td className="k-table-td k-selected">Selected</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Alt row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Alt + Focus</td>
                                <td className="k-table-td k-selected">Alt + Selected</td>
                            </tr>
                        </tbody>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-hover">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td">Hovered row</td>
                                <td className="k-table-td k-focus">Hover + Focus</td>
                                <td className="k-table-td k-selected">Hover + Selected</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-hover">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Alt hovered row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Alt + Hover + Focus</td>
                                <td className="k-table-td k-selected">Alt + Hover + Selected</td>
                            </tr>
                        </tbody>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-focus">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Focused row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td">N/A</td>
                                <td className="k-table-td k-selected">Focus + Selected</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-focus">
                                <td className="k-table-td">
                                    <Checkbox />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Alt focused row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td">N/A</td>
                                <td className="k-table-td k-selected">Alt + Focus + Selected</td>
                            </tr>
                        </tbody>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-selected">
                                <td className="k-table-td">
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Selected row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Selected + Focus</td>
                                <td className="k-table-td">N/A</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-selected">
                                <td className="k-table-td">
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Alt selected row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Alt + Selected + Focus</td>
                                <td className="k-table-td">N/A</td>
                            </tr>
                        </tbody>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-hover k-selected">
                                <td className="k-table-td">
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Hover + Selected row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Hover + Selected + Focus</td>
                                <td className="k-table-td">N/A</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-hover k-selected">
                                <td className="k-table-td">
                                    <Checkbox checked />
                                    <label className="k-checkbox-label"></label>
                                </td>
                                <td className="k-table-td">Alt + Hover selected row</td>
                                <td className="k-table-td">Sorted</td>
                                <td className="k-table-td k-focus">Alt + Hover + Selected + Focus</td>
                                <td className="k-table-td">N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="k-marquee"><div className="k-marquee-color"></div></div>
            </section>

        </div>
    </>
);
