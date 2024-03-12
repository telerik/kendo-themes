import { RadioGroup, RadioItem, RadioButtonWithLabelAfter, RadioButtonInsideLabel, RadioGroupNormal, RadioGroupHorizontal } from '../../radio';

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Normal - vertical</span>
            <span>With Label - vertical</span>
            <span>Inside Label - vertical</span>
            <RadioGroupNormal name="normal-vertical" />
            <RadioGroup>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-vertical-one" name="label-vertical">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-vertical-two" name="label-vertical">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-vertical-thee" name="label-vertical">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroup>
            <RadioGroup>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-vertical">First</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-vertical">Second</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-vertical">Third</RadioButtonInsideLabel>
                </RadioItem>
            </RadioGroup>
            <span>Normal - horizontal</span>
            <span>With Label - horizontal</span>
            <span>Inside Label - horizontal</span>
            <RadioGroupHorizontal name="normal-horizontal"/>
            <RadioGroupHorizontal>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-horizontal-one" name="label-horizontal">First</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-horizontal-two" name="label-horizontal">Second</RadioButtonWithLabelAfter>
                </RadioItem>
                <RadioItem>
                    <RadioButtonWithLabelAfter id="rad-horizontal-thee" name="label-horizontal">Third</RadioButtonWithLabelAfter>
                </RadioItem>
            </RadioGroupHorizontal>
            <RadioGroupHorizontal>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">First</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">Second</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">Third</RadioButtonInsideLabel>
                </RadioItem>
            </RadioGroupHorizontal>
        </div>
    </>
);
