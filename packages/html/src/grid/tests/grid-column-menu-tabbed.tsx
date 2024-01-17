import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Popup } from '../../popup';
import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuMultiCheck, FilterMenuNormal, ColumnMenuMulticheckItem, ColumnMenuMulticheckWrap } from '../../column-menu';

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
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
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
                                <FilterMenuNormal />
                            </div>
                        </div>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
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
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                                    <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Group column" icon="group" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Autosize this column" icon="max-width" />
                                    <ColumnMenuItem text="Autosize all columns" icon="display-inline-flex" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
                                </ColumnMenuItemWrapper>
                            </div>
                        </div>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
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
                                <FilterMenuMultiCheck>
                                    <Searchbox placeholder="Search..." />
                                    <ColumnMenuMulticheckWrap>
                                        <ColumnMenuMulticheckItem text="Select All" className="k-check-all-wrap" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                    </ColumnMenuMulticheckWrap>
                                    <div className="k-filter-selected-items">0 selected items</div>
                                    <ActionButtons alignment="stretched">
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </FilterMenuMultiCheck>
                            </div>
                        </div>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <span>2 Tab Set</span>
            <span>Single Tab Set</span>
            <span></span>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
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
                                <FilterMenuNormal />
                            </div>
                        </div>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <div className="k-tabstrip k-pos-relative k-tabstrip-top">
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
                                <FilterMenuNormal />
                            </div>
                        </div>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

        </div>
    </>
);