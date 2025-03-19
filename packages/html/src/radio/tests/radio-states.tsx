import { RadioButtonInsideLabel } from '../templates/radio-inside-label';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Disabled</span>

            <div>Unchecked</div>
            <div>
                <RadioButtonInsideLabel>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel hover>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel focus>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel disabled>Label</RadioButtonInsideLabel>
            </div>

            <div>Checked</div>
            <div>
                <RadioButtonInsideLabel checked>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel checked hover>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel checked focus>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel checked disabled>Label</RadioButtonInsideLabel>
            </div>

            <div>Invalid</div>
            <div>
                <RadioButtonInsideLabel invalid>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel invalid hover>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel invalid focus>Label</RadioButtonInsideLabel>
            </div>
            <div>
                <RadioButtonInsideLabel invalid disabled>Label</RadioButtonInsideLabel>
            </div>

        </div>
    </>
);
