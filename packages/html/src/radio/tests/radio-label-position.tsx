import { RadioItem, RadioButtonWithLabelAfter, RadioButtonWithLabelBefore, RadioGroupHorizontal, RadioGroupNormal } from '..';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>RadioButton with label after</span>
            <span>RadioButton with label before</span>
            <div>
                <RadioButtonWithLabelAfter id="label-after">Label after</RadioButtonWithLabelAfter>
            </div>
            <div>
                <RadioButtonWithLabelBefore id="label-before">Label before</RadioButtonWithLabelBefore>
            </div>
            <span>RadioButtonGroup with label after - vertical</span>
            <span>RadioButtonGroup with label before - vertical</span>
            <RadioGroupNormal>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-one" name="vertical-after">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-two" name="vertical-after">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="vertical-after-thee" name="vertical-after">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroupNormal>
            <RadioGroupNormal>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-one" name="vertical-before">First</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-two" name="vertical-before">Second</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="vertical-before-thee" name="vertical-before">Third</RadioButtonWithLabelBefore>
                </RadioItem>
            </RadioGroupNormal>
            <span>RadioButtonGroup with label after - horizontal</span>
            <span>RadioButtonGroup with label before - horizontal</span>
            <RadioGroupHorizontal>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-one" name="horizontal-after">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-two" name="horizontal-after">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="horizontal-after-three" name="horizontal-after">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroupHorizontal>
            <RadioGroupHorizontal>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-one" name="horizontal-before">First</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-two" name="horizontal-before">Second</RadioButtonWithLabelBefore>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelBefore id="horizontal-before-three" name="horizontal-before">Third</RadioButtonWithLabelBefore>
                </RadioItem>
            </RadioGroupHorizontal>
        </div>
    </>
);
