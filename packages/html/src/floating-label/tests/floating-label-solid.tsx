import { FloatingLabel, FloatingLabelNormal } from '..';
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
                <FloatingLabelNormal label="Label with placeholder" empty>
                    <TextboxNormal placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder" empty>
                    <TextboxNormal placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label with placeholder focused" empty focus>
                    <TextboxNormal placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder focused" empty focus>
                    <TextboxNormal placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>

            {[ 'normal', ...FloatingLabel.states ].map((state) => (
                <>
                    <div>
                        <FloatingLabelNormal label="Label" { ...{ [state]: true }}>
                            <TextboxNormal value={state === 'empty' ? '' : state} { ...{ [state]: true }}/>
                        </FloatingLabelNormal>
                    </div>
                    <div dir="rtl">
                        <FloatingLabelNormal label="Label" { ...{ [state]: true }}>
                            <TextboxNormal value={state === 'empty' ? '' : state} { ...{ [state]: true }} />
                        </FloatingLabelNormal>
                    </div>
                </>
            ))}

        </div>
    </>
);
