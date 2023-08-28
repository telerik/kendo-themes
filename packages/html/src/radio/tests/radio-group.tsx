import { RadioGroup, RadioItem, RadioButtonLabel, RadioButtonInsideLabel, RadioButtonNormal } from '../../radio';

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
            <RadioGroup>
                <RadioItem>
                    <RadioButtonNormal name="normal-vertical" />
                </RadioItem>
                <RadioItem>
                    <RadioButtonNormal name="normal-vertical"/>
                </RadioItem>
                <RadioItem>
                    <RadioButtonNormal name="normal-vertical"/>
                </RadioItem>
            </RadioGroup>
            <RadioGroup>
                <RadioItem>
                    <RadioButtonLabel id="rad-vertical-one" name="label-vertical">First</RadioButtonLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonLabel id="rad-vertical-two" name="label-vertical">Second</RadioButtonLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonLabel id="rad-vertical-thee" name="label-vertical">Third</RadioButtonLabel>
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
            <RadioGroup layout="horizontal">
                <RadioItem>
                    <RadioButtonNormal name="normal-horizontal" />
                </RadioItem>
                <RadioItem>
                    <RadioButtonNormal name="normal-horizontal"/>
                </RadioItem>
                <RadioItem>
                    <RadioButtonNormal name="normal-horizontal"/>
                </RadioItem>
            </RadioGroup>
            <RadioGroup layout="horizontal">
                <RadioItem>
                    <RadioButtonLabel id="rad-horizontal-one" name="label-horizontal">First</RadioButtonLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonLabel id="rad-horizontal-two" name="label-horizontal">Second</RadioButtonLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonLabel id="rad-horizontal-thee" name="label-horizontal">Third</RadioButtonLabel>
                </RadioItem>
            </RadioGroup>
            <RadioGroup layout="horizontal">
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">First</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">Second</RadioButtonInsideLabel>
                </RadioItem>
                <RadioItem>
                    <RadioButtonInsideLabel name="inside-label-horizontal">Third</RadioButtonInsideLabel>
                </RadioItem>
            </RadioGroup>
        </div>
    </>
);
