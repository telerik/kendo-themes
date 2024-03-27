import { FloatingLabel, FloatingLabelInputValue, FloatingLabelNormal } from '..';
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
            <span>Floating label flat</span>
            <span>Floating label flat RTL</span>

            <div>
                <FloatingLabelNormal label="Label with placeholder">
                    <TextboxNormal fillMode="flat" placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder">
                    <TextboxNormal fillMode="flat" placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label with placeholder focused" focus>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder focused" focus>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>

            {[ 'normal', ...FloatingLabel.states ].map((state) => (
                <>
                    <div>
                        <FloatingLabelInputValue label="Label" { ...{ [state]: true }}>
                            <TextboxNormal fillMode="flat" value={state === 'empty' ? '' : state} { ...{ [state]: true }}/>
                        </FloatingLabelInputValue>
                    </div>
                    <div dir="rtl">
                        <FloatingLabelInputValue label="Label" { ...{ [state]: true }}>
                            <TextboxNormal fillMode="flat" value={state === 'empty' ? '' : state} { ...{ [state]: true }} />
                        </FloatingLabelInputValue>
                    </div>
                </>
            ))}

        </div>
    </>
);
