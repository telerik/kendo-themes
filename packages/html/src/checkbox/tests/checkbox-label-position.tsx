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
            <span>With Label Before - vertical</span>
            <span>With Label After - vertical</span>
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
            <span>With Label Before - horizontal</span>
            <span>With Label After - horizontal</span>
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
