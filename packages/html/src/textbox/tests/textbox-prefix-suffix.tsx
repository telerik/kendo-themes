import { InputPrefixText, InputSuffixText } from '../../input';
import { Textbox, TextboxNormal, TextboxPrefix, TextboxSuffix } from '..';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            {Textbox.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{fillMode}</span>

                    <span>normal</span>
                    <div>
                        <TextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <TextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <TextboxNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <InputPrefixText>https://</InputPrefixText>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>.com</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <TextboxPrefix fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <TextboxSuffix fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <TextboxNormal fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <InputPrefixText>https://</InputPrefixText>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>.com</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <TextboxPrefix fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <TextboxSuffix fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <TextboxNormal fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <InputPrefixText>https://</InputPrefixText>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>.com</InputSuffixText>
                                </>
                            }
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <TextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <TextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <TextboxNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <InputPrefixText>https://</InputPrefixText>
                                </>
                            }
                            suffix={
                                <>
                                    <InputSuffixText>.com</InputSuffixText>
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
