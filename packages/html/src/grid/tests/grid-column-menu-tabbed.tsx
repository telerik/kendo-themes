import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';
import { Popup } from '../../popup';


const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-grid-columnmenu-popup {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Tab Filter</span>
            <span>Tab More</span>
            <span>Tab Column Visibility</span>

            <section>
                <Popup className="k-column-menu k-column-menu-tabbed k-grid-columnmenu-popup">
                    <div className="k-tabstrip k-tabstrip-top k-overflow-hidden">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-active">
                                    <span className="k-link">
                                        <Icon icon="filter" />
                                    </span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="sliders" />
                                    </span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="columns" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <form className="k-filter-menu k-group k-reset">
                                <div className="k-filter-menu-container">
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <DropdownList value="And" className="k-filter-and" />
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <ActionButtons>
                                        <Button themeColor="primary">Filter</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </div>
                            </form>
                        </div>
                    </div>
                </Popup>
            </section>

            <section>
                <Popup className="k-column-menu k-column-menu-tabbed k-grid-columnmenu-popup">
                    <div className="k-tabstrip k-tabstrip-top k-overflow-hidden">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="filter" />
                                    </span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">
                                        <Icon icon="sliders" />
                                    </span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="columns" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <div className="k-columnmenu-item-wrapper">
                                <div className="k-columnmenu-item">
                                    <Icon icon="sort-asc-small" />Sort ascending
                                </div>
                                <div className="k-columnmenu-item">
                                    <Icon icon="sort-desc-small" />Sort descending
                                </div>
                            </div>
                            <div className="k-columnmenu-item-wrapper">
                                <div className="k-columnmenu-item">
                                    <Icon icon="group" />Group column
                                </div>
                            </div>
                            <div className="k-columnmenu-item-wrapper">
                                <div className="k-columnmenu-item">
                                    <Icon icon="max-width" />Autosize this column
                                </div>
                                <div className="k-columnmenu-item">
                                    <Icon icon="display-inline-flex" />Autosize all columns
                                </div>
                            </div>
                            <div className="k-columnmenu-item-wrapper">
                                <div className="k-expander">
                                    <div className="k-columnmenu-item">
                                        <Icon icon="set-column-position" />Set column position
                                        <span className="k-spacer"></span>
                                        <Icon className="k-expander-indicator" icon="chevron-down" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popup>
            </section>

            <section>
                <Popup className="k-column-menu k-column-menu-tabbed k-grid-columnmenu-popup">
                    <div className="k-tabstrip k-tabstrip-top k-overflow-hidden">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="filter" />
                                    </span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="sliders" />
                                    </span>
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">
                                        <Icon icon="columns" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <form className="k-filter-menu k-group k-reset">
                                <div className="k-filter-menu-container">
                                    <Searchbox placeholder="Search..." />
                                    <ul className="k-reset k-multicheck-wrap">
                                        <li className="k-item k-check-all-wrap">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>(Select all)</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                        <li className="k-item">
                                            <label className="k-label k-checkbox-label">
                                                <Checkbox /><span>Column Name</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className="k-filter-selected-items">0 selected items</div>
                                    <ActionButtons>
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Reset</Button>
                                    </ActionButtons>
                                </div>
                            </form>
                        </div>
                    </div>
                </Popup>
            </section>

            <span>2 Tab Set</span>
            <span>Single Tab Set</span>
            <span></span>

            <section>
                <Popup className="k-column-menu k-column-menu-tabbed k-grid-columnmenu-popup">
                    <div className="k-tabstrip k-tabstrip-top k-overflow-hidden">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-active">
                                    <span className="k-link">
                                        <Icon icon="filter" />
                                    </span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">
                                        <Icon icon="sliders" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <form className="k-filter-menu k-group k-reset">
                                <div className="k-filter-menu-container">
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <DropdownList value="And" className="k-filter-and" />
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <ActionButtons>
                                        <Button themeColor="primary">Filter</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </div>
                            </form>
                        </div>
                    </div>
                </Popup>
            </section>

            <section>
                <Popup className="k-column-menu k-column-menu-tabbed k-grid-columnmenu-popup">
                    <div className="k-tabstrip k-tabstrip-top k-overflow-hidden">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-active">
                                    <span className="k-link">
                                        <Icon icon="filter" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <form className="k-filter-menu k-group k-reset">
                                <div className="k-filter-menu-container">
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <DropdownList value="And" className="k-filter-and" />
                                    <DropdownList value="Contains" />
                                    <Textbox placeholder="Filter..." />
                                    <ActionButtons>
                                        <Button themeColor="primary">Filter</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </div>
                            </form>
                        </div>
                    </div>
                </Popup>
            </section>

        </div>
    </>
);
