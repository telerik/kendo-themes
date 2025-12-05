import { InputSuffixText } from '../../input';
import { NumericTextbox, NumericTextboxNormal, NumericTextboxPrefix, NumericTextboxSuffix } from '..';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            {NumericTextbox.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{fillMode}</span>

                    <span>normal</span>
                    <div>
                        <label htmlFor={`numerictextbox-prefix-${fillMode}-normal`} className="k-label">Enter number</label>
                        <NumericTextboxPrefix id={`numerictextbox-prefix-${fillMode}-normal`} fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-suffix-${fillMode}-normal`} className="k-label">Enter number</label>
                        <NumericTextboxSuffix id={`numerictextbox-suffix-${fillMode}-normal`} fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-both-${fillMode}-normal`} className="k-label">Enter number</label>
                        <NumericTextboxNormal id={`numerictextbox-both-${fillMode}-normal`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="unlock"/>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>mm</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <label htmlFor={`numerictextbox-prefix-${fillMode}-disabled`} className="k-label">Enter number (disabled)</label>
                        <NumericTextboxPrefix id={`numerictextbox-prefix-${fillMode}-disabled`} fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-suffix-${fillMode}-disabled`} className="k-label">Enter number (disabled)</label>
                        <NumericTextboxSuffix id={`numerictextbox-suffix-${fillMode}-disabled`} fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-both-${fillMode}-disabled`} className="k-label">Enter number (disabled)</label>
                        <NumericTextboxNormal id={`numerictextbox-both-${fillMode}-disabled`} fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <Icon icon="lock"/>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>mm</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <label htmlFor={`numerictextbox-prefix-${fillMode}-invalid`} className="k-label">Enter number (invalid)</label>
                        <NumericTextboxPrefix id={`numerictextbox-prefix-${fillMode}-invalid`} fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-suffix-${fillMode}-invalid`} className="k-label">Enter number (invalid)</label>
                        <NumericTextboxSuffix id={`numerictextbox-suffix-${fillMode}-invalid`} fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <label htmlFor={`numerictextbox-both-${fillMode}-invalid`} className="k-label">Enter number (invalid)</label>
                        <NumericTextboxNormal id={`numerictextbox-both-${fillMode}-invalid`} fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <Icon icon="unlock"/>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>mm</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-prefix-${fillMode}-rtl`} className="k-label">Enter number</label>
                        <NumericTextboxPrefix id={`numerictextbox-prefix-${fillMode}-rtl`} fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-suffix-${fillMode}-rtl`} className="k-label">Enter number</label>
                        <NumericTextboxSuffix id={`numerictextbox-suffix-${fillMode}-rtl`} fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-both-${fillMode}-rtl`} className="k-label">Enter number</label>
                        <NumericTextboxNormal id={`numerictextbox-both-${fillMode}-rtl`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="unlock"/>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>mm</InputSuffixText>
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
