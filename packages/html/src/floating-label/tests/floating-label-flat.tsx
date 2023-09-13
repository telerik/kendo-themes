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
            <span>Floating label flat</span>
            <span>Floating label flat RTL</span>

            <div>
                <FloatingLabelNormal label="Label with placeholder" empty>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder" empty>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal label="Label with placeholder focused" empty focus>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>
            <div dir="rtl">
                <FloatingLabelNormal label="Label with placeholder focused" empty focus>
                    <TextboxNormal fillMode="flat" placeholder="placeholder" focus />
                </FloatingLabelNormal>
            </div>

            {[ 'normal', 'hover', ...FloatingLabel.states ].map((state) => {

                let value = state;
                state === 'empty' && (value = '');

                return (
                    <>
                        <div>
                            <FloatingLabelNormal label="Label" { ...{ [state]: true }}>
                                <TextboxNormal fillMode="flat" value={value} { ...{ [state]: true }}/>
                            </FloatingLabelNormal>
                        </div>
                        <div dir="rtl">
                            <FloatingLabelNormal label="Label" { ...{ [state]: true }}>
                                <TextboxNormal fillMode="flat" value={value} { ...{ [state]: true }} />
                            </FloatingLabelNormal>
                        </div>
                    </>
                );
            })}

        </div>
    </>
);
