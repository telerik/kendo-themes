import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { AnimationContainer } from '../../animation-container/animation-container.spec';


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

            <span>Normal</span>
            <span>Long filter operator</span>

            {/* jQuery rendering */}
            <section>
                <AnimationContainer>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <div className="k-filter-help-text">Show items with value that:</div>
                            <DropdownList value="Is equal to" />
                            <NumericTextbox />
                            <DropdownList value="And" className="k-filter-and" />
                            <DropdownList value="Is equal to" />
                            <NumericTextbox />
                            <ActionButtons alignment="stretched">
                                <Button icon="filter" themeColor="primary">Filter</Button>
                                <Button icon="filter-clear">Clear</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <form className="k-filter-menu k-popup k-group k-reset">
                        <div className="k-filter-menu-container">
                            <div className="k-filter-help-text">Show items with value that:</div>
                            <DropdownList value="An example of some very very very long filter operator" />
                            <NumericTextbox />
                            <DropdownList value="And" className="k-filter-and" />
                            <DropdownList value="Is equal to" />
                            <NumericTextbox />
                            <ActionButtons alignment="stretched">
                                <Button icon="filter" themeColor="primary">Filter</Button>
                                <Button icon="filter-clear">Clear</Button>
                            </ActionButtons>
                        </div>
                    </form>
                </AnimationContainer>
            </section>

        </div>
    </>
);
