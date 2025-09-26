import { FloatingLabel, FloatingLabelNormal, FloatingLabelInputValue } from '..';
import { TextboxNormal } from '../../textbox';

const styles = `
    #test-area {
        width: 660px;
    }
    .k-floating-label-container {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Floating label</span>
            <span>Floating label RTL</span>

            <div>
                <FloatingLabelNormal label="Label without placeholder">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label without placeholder">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label with placeholder">
                    <TextboxNormal placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder">
                    <TextboxNormal placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label optional" optional>
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label optional" optional>
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label with placeholder focused" focus>
                    <TextboxNormal placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder focused" focus>
                    <TextboxNormal placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>

            {[ 'normal', ...FloatingLabel.states ].map((state) => (
                <>
                    <div>
                        <FloatingLabelInputValue label="Label" { ...{ [state]: true }}>
                            <TextboxNormal value={state === 'empty' ? '' : state} { ...{ [state]: true }}/>
                        </FloatingLabelInputValue>
                    </div>
                    <div dir="rtl">
                        <FloatingLabelInputValue label="Label" { ...{ [state]: true }}>
                            <TextboxNormal value={state === 'empty' ? '' : state} { ...{ [state]: true }} />
                        </FloatingLabelInputValue>
                    </div>
                </>
            ))}

        </div>
    </>
);
