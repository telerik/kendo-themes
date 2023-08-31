import { RadioGroup, RadioItem, RadioButtonWithLabelAfter, RadioButtonWithLabelBefore } from '..';

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
            <RadioGroup>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-one" name="vertical-after">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-two" name="vertical-after">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-thee" name="vertical-after">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroup>
            <RadioGroup>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-one" name="vertical-before">First</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-two" name="vertical-before">Second</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-thee" name="vertical-before">Third</RadioButtonWithLabelBefore>
                </RadioItem>
            </RadioGroup>
            <span>With Label Before - horizontal</span>
            <span>With Label After - horizontal</span>
            <RadioGroup layout="horizontal">
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-one" name="horizontal-after">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-two" name="horizontal-after">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-three" name="horizontal-after">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroup>
            <RadioGroup layout="horizontal">
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-one" name="horizontal-before">First</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-two" name="horizontal-before">Second</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-three" name="horizontal-before">Third</RadioButtonWithLabelBefore>
                </RadioItem>
            </RadioGroup>
        </div>
    </>
);
