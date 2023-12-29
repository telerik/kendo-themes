import { MaskedTextbox, MaskedTextboxNormal, MaskedTextboxPrefix, MaskedTextboxSuffix } from '..';
import { TextButton } from '../../button';
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

            {MaskedTextbox.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{fillMode}</span>

                    <span>normal</span>
                    <div>
                        <MaskedTextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <MaskedTextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <MaskedTextboxNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <TextButton fillMode="clear" value="Submit" />
                                </>
                            }
                            suffix={
                                <>
                                    <Icon icon="lock"/>
                                </>
                            }
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <MaskedTextboxPrefix fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <MaskedTextboxSuffix fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <MaskedTextboxNormal fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <TextButton fillMode="clear" value="Submit" />
                                </>
                            }
                            suffix={
                                <>
                                    <Icon icon="lock"/>
                                </>
                            }
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <MaskedTextboxPrefix fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <MaskedTextboxSuffix fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <MaskedTextboxNormal fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <TextButton fillMode="clear" value="Submit" />
                                </>
                            }
                            suffix={
                                <>
                                    <Icon icon="lock"/>
                                </>
                            }
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <MaskedTextboxPrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <TextButton fillMode="clear" value="Submit" />
                                </>
                            }
                            suffix={
                                <>
                                    <Icon icon="lock"/>
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
