import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Searchbox } from '../../searchbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 700px;
    }

    .k-animation-container,
    .k-popup {
        position: relative;
    }

    .k-animation-container {
        display: inline-block;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>LTR</span>
            <span className="k-rtl">RTL</span>

            <span>Multi Checkboxes</span>
            <span className="k-rtl">Multi Checkboxes</span>

            <section>
                <div className="k-animation-container" style={{ overflow: "visible" }}>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <Searchbox placeholder="Search..." />
                            <ul className="k-reset k-multicheck-wrap">
                                <li className="k-item k-check-all-wrap"><label className="k-label k-checkbox-label"><Checkbox /><span>Select All</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chai</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chang</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Aniseed Syrup Aniseed Syrup Aniseed Syrup Aniseed Syrup </span></label></li>
                            </ul>
                            <div className="k-filter-selected-items">0 selected items</div>
                            <ActionButtons alignment="stretched">
                                <Button>Clear</Button>
                                <Button themeColor="primary">Filter</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-animation-container" style={{ overflow: "visible" }}>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <Searchbox placeholder="Search..." />
                            <ul className="k-reset k-multicheck-wrap">
                                <li className="k-item k-check-all-wrap"><label className="k-label k-checkbox-label"><Checkbox /><span>Select All</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chai</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chang</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Aniseed Syrup Aniseed Syrup Aniseed Syrup Aniseed Syrup </span></label></li>
                            </ul>
                            <div className="k-filter-selected-items">0 selected items</div>
                            <ActionButtons alignment="stretched">
                                <Button>Clear</Button>
                                <Button themeColor="primary">Filter</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </div>
            </section>

            <span>Boolean</span>
            <span className="k-rtl">Boolean</span>

            <section>
                <div className="k-animation-container" style={{ overflow: "visible" }}>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <div className="k-filter-help-text">Show items with value that:</div>
                            <ul className="k-reset k-multicheck-wrap">
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is true</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is true</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is undefined</span></label></li>
                            </ul>
                            <ActionButtons alignment="stretched">
                                <Button>Clear</Button>
                                <Button themeColor="primary">Filter</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-animation-container" style={{ overflow: "visible" }}>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <div className="k-filter-help-text">Show items with value that:</div>
                            <ul className="k-reset k-multicheck-wrap">
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is true</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is true</span></label></li>
                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>is undefined</span></label></li>
                            </ul>
                            <ActionButtons alignment="stretched">
                                <Button>Clear</Button>
                                <Button themeColor="primary">Filter</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    </>
);
