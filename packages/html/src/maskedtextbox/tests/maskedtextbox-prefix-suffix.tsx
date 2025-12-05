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
                        <label htmlFor={`maskedtextbox-${fillMode}-prefix`} className="k-label">Phone number</label>
                        <MaskedTextboxPrefix id={`maskedtextbox-${fillMode}-prefix`} fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-suffix`} className="k-label">Phone number</label>
                        <MaskedTextboxSuffix id={`maskedtextbox-${fillMode}-suffix`} fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-both`} className="k-label">Phone number</label>
                        <MaskedTextboxNormal id={`maskedtextbox-${fillMode}-both`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <TextButton fillMode="outline" value="Submit" aria-label="Submit" />
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
                        <label htmlFor={`maskedtextbox-${fillMode}-prefix-disabled`} className="k-label">Phone number (disabled)</label>
                        <MaskedTextboxPrefix id={`maskedtextbox-${fillMode}-prefix-disabled`} fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-suffix-disabled`} className="k-label">Phone number (disabled)</label>
                        <MaskedTextboxSuffix id={`maskedtextbox-${fillMode}-suffix-disabled`} fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-both-disabled`} className="k-label">Phone number (disabled)</label>
                        <MaskedTextboxNormal id={`maskedtextbox-${fillMode}-both-disabled`} fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <TextButton fillMode="outline" value="Submit" aria-label="Submit" />
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
                        <label htmlFor={`maskedtextbox-${fillMode}-prefix-invalid`} className="k-label">Phone number (invalid)</label>
                        <MaskedTextboxPrefix id={`maskedtextbox-${fillMode}-prefix-invalid`} fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-suffix-invalid`} className="k-label">Phone number (invalid)</label>
                        <MaskedTextboxSuffix id={`maskedtextbox-${fillMode}-suffix-invalid`} fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <label htmlFor={`maskedtextbox-${fillMode}-both-invalid`} className="k-label">Phone number (invalid)</label>
                        <MaskedTextboxNormal id={`maskedtextbox-${fillMode}-both-invalid`} fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <TextButton fillMode="outline" value="Submit" aria-label="Submit" />
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
                        <label htmlFor={`maskedtextbox-${fillMode}-prefix-rtl`} className="k-label">Phone number</label>
                        <MaskedTextboxPrefix id={`maskedtextbox-${fillMode}-prefix-rtl`} fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`maskedtextbox-${fillMode}-suffix-rtl`} className="k-label">Phone number</label>
                        <MaskedTextboxSuffix id={`maskedtextbox-${fillMode}-suffix-rtl`} fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`maskedtextbox-${fillMode}-both-rtl`} className="k-label">Phone number</label>
                        <MaskedTextboxNormal id={`maskedtextbox-${fillMode}-both-rtl`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <TextButton fillMode="outline" value="Submit" aria-label="Submit" />
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
