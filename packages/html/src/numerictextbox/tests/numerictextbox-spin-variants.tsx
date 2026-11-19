import { NumericTextbox, NumericTextboxNormal } from '../../numerictextbox';

const styles = `
    #test-area {
        max-width: 1000px;
        gap: 8px 24px;
        align-items: center;
    }
`;

const states = [ 'normal', ...NumericTextbox.states.filter((state) => state !== 'valid' && state !== 'required') ];

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid         k-grid-cols-3">
            <strong>Vertical spin buttons</strong>
            <strong>Horizontal spin buttons</strong>
                    <strong>Split spin buttons</strong>

            {states.map((state) => (
                <>
                    <div>
                        <NumericTextboxNormal fillMode="solid" { ...{ [state]: true }} value="1,250.50" aria-label={`Vertical ${state}`} />
                    </div>
                    <div>
                        <NumericTextboxNormal fillMode="solid" horizontal { ...{ [state]: true }} value="1,250.50" aria-label={`Horizontal ${state}`} />
                    </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" split { ...{ [state]: true }} value="1,250.50" aria-label={`Split ${state}`} />
                                            </div>
                                        </>
            ))}

            <div>
                <NumericTextboxNormal fillMode="solid" value="42" invalid focus aria-label="Vertical invalid focus" />
            </div>
            <div>
                <NumericTextboxNormal fillMode="solid" horizontal value="42" invalid focus aria-label="Horizontal invalid focus" />
            </div>
                            <div>
                                <NumericTextboxNormal fillMode="solid" split value="42" invalid focus aria-label="Split invalid focus" />
                            </div>

                            <strong>Vertical: spin button states</strong>
                            <strong>Horizontal: spin button states</strong>
                            <strong>Split: spin button states</strong>

            {[
                { label: 'increase hover', increaseState: { hover: true } },
                { label: 'decrease hover', decreaseState: { hover: true } },
                { label: 'increase pressed', increaseState: { hover: true, active: true } },
                { label: 'decrease pressed', decreaseState: { hover: true, active: true } },
                { label: 'increase focus', increaseState: { focus: true } }
            ].map(({ label, ...spin }) => (
                <>
                    <div>
                        <NumericTextboxNormal fillMode="solid" value="1,250.50" aria-label={`Vertical ${label}`} {...spin} />
                    </div>
                    <div>
                        <NumericTextboxNormal fillMode="solid" horizontal value="1,250.50"                         aria-label={`Horizontal ${label}`} {...spin} />
                                            </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" split value="1,250.50" aria-label={`Split ${label}`} {...spin} />
                                            </div>
                                        </>
                                    ))}

                                    <strong>Vertical: sizes</strong>
                                    <strong>Horizontal: sizes</strong>
                                    <strong>Split: sizes</strong>

                                    {[ 'small', 'medium', 'large' ].map((size) => (
                                        <>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" size={size} value="100" aria-label={`Vertical ${size}`} />
                                            </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" size={size} horizontal value="100" aria-label={`Horizontal ${size}`} />
                                            </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" size={size} split value="100" aria-label={`Split ${size}`} />
                                            </div>
                                        </>
                                    ))}

                                    <strong>Vertical: sample values</strong>
                                    <strong>Horizontal: sample values</strong>
                                    <strong>Split: sample values</strong>

                                    {[ '25', '100', '200', '500' ].map((value) => (
                                        <>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" value={value} aria-label={`Vertical ${value}`} />
                                            </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" horizontal value={value} aria-label={`Horizontal ${value}`} />
                                            </div>
                                            <div>
                                                <NumericTextboxNormal fillMode="solid" split value={value} aria-label={`Split ${value}`} />
                                            </div>
                                        </>
                                    ))}
        </div>
    </>
);
