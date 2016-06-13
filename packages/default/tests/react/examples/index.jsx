import React from 'react'
import ReactDOM from 'react-dom'

//import { Slider } from '@telerik/kendo-react-inputs';
//import { Dialog } from '@telerik/kendo-react-dialog';
import { Button } from '@telerik/kendo-react-buttons';
import '@telerik/kendo-theme-default/styles/packages/all.scss';
import { Stateless as StatelessDropDowns } from '@telerik/kendo-react-dropdowns';
const { DropDownList, ComboBox, List, ListContainer, ListFilter } = StatelessDropDowns;

class Container extends React.Component {
    componentDidMount() {
        // nothing to see here.
        var listItems = document.querySelectorAll(".k-list-container .k-item");
        listItems[1].classList.add("__pseudo-hover");
    }

    render() {
        const people = [
            { value:  1, text: "Alberto Bertorelli" },
            { value:  2, text: "Hovered item" },
            { value:  3, text: "Bumbly Carstairs" },
            { value:  4, text: "Focused item" },
            { value:  5, text: "Edith Artois" },
            { value:  6, text: "Selected item" },
            { value:  7, text: "Erich von Klinkerhoffen" },
            { value:  8, text: "Ernest LeClerc" },
            { value:  9, text: "Fanny La Fan" },
            { value: 10, text: "Gavin Fairfax" },
            { value: 11, text: "Hans Geering" },
            { value: 12, text: "Helga Geerhart" },
            { value: 13, text: "Hubert Gruber" },
            { value: 14, text: "Kurt von Strohm" },
            { value: 15, text: "Leopold von Flockenstuffen" },
            { value: 16, text: "Maria Recamier" },
            { value: 17, text: "Michelle Dubois" },
            { value: 18, text: "Mimi Labonq" },
            { value: 19, text: "Otto Flick" },
            { value: 20, text: "René Artois" },
            { value: 21, text: "Roger LeClerc" },
            { value: 22, text: "Yvette Carte-Blanche" }
        ];

        const ddlProps = {
            onToggle: () => {},
            defaultItem: { text: "Georg Pipps" },
            data: people,
            textField: "text",
            valueField: "value",
            text: "Georg Pipps"
        };

        return (
            <main>
            <article>
                <h2>Button</h2>
                <table className="chrome-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Default</th>
                            <th>Primary</th>
                            <th>Icon</th>
                            <th>Icon+Text</th>
                            <th>Primary+Icon</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Disabled</th>
                            <td><Button disabled>Cancel</Button></td>
                            <td><Button disabled primary>Apply</Button></td>
                            <td><Button disabled icon="cog"></Button></td>
                            <td><Button disabled icon="cog">Settings</Button></td>
                            <td><Button disabled primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Normal</th>
                            <td><Button>Cancel</Button></td>
                            <td><Button primary>Apply</Button></td>
                            <td><Button icon="cog"></Button></td>
                            <td><Button icon="cog">Settings</Button></td>
                            <td><Button primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Hover</th>
                            <td><Button className='__pseudo-hover'>Cancel</Button></td>
                            <td><Button className='__pseudo-hover' primary>Apply</Button></td>
                            <td><Button className='__pseudo-hover' icon="cog"></Button></td>
                            <td><Button className='__pseudo-hover' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-hover' primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Focused</th>
                            <td><Button className='__pseudo-focus'>Cancel</Button></td>
                            <td><Button className='__pseudo-focus' primary>Apply</Button></td>
                            <td><Button className='__pseudo-focus' icon="cog"></Button></td>
                            <td><Button className='__pseudo-focus' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-focus' primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Active</th>
                            <td><Button className='__pseudo-focus __pseudo-active'>Cancel</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' primary>Apply</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' icon="cog"></Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' primary icon="cog">Settings</Button></td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <article>
                <h2>DropDownList</h2>
                <table className="chrome-table">
                    <tbody>
                        <tr>
                            <th>Disabled</th>

                            <td><DropDownList { ...ddlProps } disabled /></td>
                        </tr>

                        <tr>
                            <th>Normal</th>
                            <td><DropDownList { ...ddlProps } /></td>
                        </tr>

                        <tr>
                            <th>Hover</th>
                            <td><DropDownList { ...ddlProps } anchorClassName='__pseudo-hover' /></td>
                        </tr>

                        <tr>
                            <th>Focused</th>
                            <td><DropDownList { ...ddlProps } anchorClassName='k-state-focused' /></td>
                        </tr>

                        <tr>
                            <th>Invalid</th>
                            <td><DropDownList { ...ddlProps } anchorClassName='k-state-invalid' /></td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <article>
                <h2>ComboBox</h2>
                <table className="chrome-table">
                    <tbody>
                        <tr>
                            <th>Disabled</th>

                            <td><ComboBox { ...ddlProps } disabled /></td>
                        </tr>

                        <tr>
                            <th>Normal</th>
                            <td><ComboBox { ...ddlProps } /></td>
                        </tr>

                        <tr>
                            <th>Hover</th>
                            <td><ComboBox { ...ddlProps } anchorClassName='__pseudo-hover' /></td>
                        </tr>

                        <tr>
                            <th>Focused</th>
                            <td><ComboBox { ...ddlProps } anchorClassName='k-state-focused' /></td>
                        </tr>

                        <tr>
                            <th>Invalid</th>
                            <td><ComboBox { ...ddlProps } anchorClassName='k-state-invalid' /></td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <article>
                <h2>List</h2>

                <ListContainer show>
                    <ListFilter value="Filter" />
                    <List {...ddlProps} height={300} selected={5} focused={3} />
                </ListContainer>
            </article>
            </main>
        );
    }
}

ReactDOM.render(<Container />, document.querySelector('#main'))
