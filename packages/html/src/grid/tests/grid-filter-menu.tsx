import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-animation-container {
        display: inline-block;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {/* jQuery rendering */}
            <section>
                <div className="k-animation-container" style={{ overflow: "visible" }}>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <div className="k-filter-help-text">Show items with value that:</div>
                            <DropdownList value="Is equal to" />
                            <NumericTextbox />
                            <DropdownList value="And" className="k-filter-and" />
                            <DropdownList value="Is equal to" />
                            <NumericTextbox />
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
