import { CheckboxGroupHorizontal, CheckboxGroupNormal, CheckboxItem, CheckboxWithLabelAfter, CheckboxWithLabelBefore } from '..';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Checkbox with label after</span>
            <span>Checkbox with label before</span>
            <div>
                <CheckboxWithLabelAfter id="label-after">Label after</CheckboxWithLabelAfter>
            </div>
            <div>
                <CheckboxWithLabelBefore id="label-before">Label before</CheckboxWithLabelBefore>
            </div>
            <span>CheckboxGroup with label after - vertical</span>
            <span>CheckboxGroup with label before  - vertical</span>
            <CheckboxGroupNormal>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="vertical-after-one">First</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="vertical-after-two">Second</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="vertical-after-thee">Third</CheckboxWithLabelAfter>
                </CheckboxItem>
            </CheckboxGroupNormal>
            <CheckboxGroupNormal>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="vertical-before-one">First</CheckboxWithLabelBefore>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="vertical-before-two">Second</CheckboxWithLabelBefore>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="vertical-before-thee">Third</CheckboxWithLabelBefore>
                </CheckboxItem>
            </CheckboxGroupNormal>
            <span>CheckboxGroup with label after - horizontal</span>
            <span>CheckboxGroup with label before - horizontal</span>
            <CheckboxGroupHorizontal>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="horizontal-after-one">First</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="horizontal-after-two">Second</CheckboxWithLabelAfter>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelAfter id="horizontal-after-three">Third</CheckboxWithLabelAfter>
                </CheckboxItem>
            </CheckboxGroupHorizontal>
            <CheckboxGroupHorizontal>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="horizontal-before-one">First</CheckboxWithLabelBefore>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="horizontal-before-two">Second</CheckboxWithLabelBefore>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxWithLabelBefore id="horizontal-before-three">Third</CheckboxWithLabelBefore>
                </CheckboxItem>
            </CheckboxGroupHorizontal>
        </div>
    </>
);
