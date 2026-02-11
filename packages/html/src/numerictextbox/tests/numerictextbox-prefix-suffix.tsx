import { InputSuffixText } from '../../input/input-suffix-text';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { NumericTextboxNormal } from '../templates/numerictextbox-normal';
import { NumericTextboxPrefix } from '../templates/numerictextbox-prefix';
import { NumericTextboxSuffix } from '../templates/numerictextbox-suffix';
import { Icon } from '../../icon/icon.spec';

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
                    <span className="k-col-span-full k-text-center">{`${fillMode}`}</span>

                    <span>normal</span>
                    <div>
                        <NumericTextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <NumericTextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <NumericTextboxNormal fillMode={fillMode} value="Prefix & Suffix"
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
                        <NumericTextboxPrefix fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <NumericTextboxSuffix fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <NumericTextboxNormal fillMode={fillMode} value="Prefix & Suffix" disabled
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
                        <NumericTextboxPrefix fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <NumericTextboxSuffix fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <NumericTextboxNormal fillMode={fillMode} value="Prefix & Suffix" invalid
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
                        <NumericTextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <NumericTextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <NumericTextboxNormal fillMode={fillMode} value="Prefix & Suffix"
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
