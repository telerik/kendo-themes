import { Icon } from '../../icon';
import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuNormal } from '../../column-menu';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-column-menu-popup {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>First tab seledted</span>
            <span>Second tab selected</span>
            <section>
                <ColumnMenuTabbed />
            </section>

            <section>
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
                                <ColumnMenuItem text="Item 1" icon="sort-asc-small" />
                                <ColumnMenuItem text="Item 2" icon="sort-desc-small" />
                            </ColumnMenuItemWrapper>
                            <ColumnMenuItemWrapper>
                                <ColumnMenuItem text="Item 3" icon="group" />
                            </ColumnMenuItemWrapper>
                            <ColumnMenuItemWrapper>
                                <ColumnMenuExpander itemText="Expandable item" itemIcon="set-column-position" />
                            </ColumnMenuItemWrapper>
                        </div>
                    </div>
                </ColumnMenuTabbed>
            </section>

            <span>2 Tabs Set</span>
            <span>Single Tab Set</span>

            <section>
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
            </section>

            <section>
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
            </section>

        </div>
    </>
);
