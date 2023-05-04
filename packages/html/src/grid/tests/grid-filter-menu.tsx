import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';


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

export default () =>(
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
                                <Button themeColor="primary">Filter</Button>
                                <Button>Clear</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    </>
);
