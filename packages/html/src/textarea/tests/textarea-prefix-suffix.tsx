import { Textarea, TextareaNormal } from '..';
import { IconButton } from '../../button';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(4, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>normal</span>
            <span>disabled</span>
            <span>validation</span>
            <span>RTL</span>

            {Textarea.options.fillMode.map((fillMode) => (
                <>

                    <span>FillMode - {fillMode}</span>

                    <div>
                        <label htmlFor={`textarea-prefix-suffix-${fillMode}-normal`} className="k-label">Enter text</label>
                        <TextareaNormal id={`textarea-prefix-suffix-${fillMode}-normal`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                                </>
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor={`textarea-prefix-suffix-${fillMode}-disabled`} className="k-label">Enter text (disabled)</label>
                        <TextareaNormal id={`textarea-prefix-suffix-${fillMode}-disabled`} fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                                </>
                            }
                        />
                    </div>

                    <div>
                        <label htmlFor={`textarea-prefix-suffix-${fillMode}-invalid`} className="k-label">Enter text (invalid)</label>
                        <TextareaNormal id={`textarea-prefix-suffix-${fillMode}-invalid`} fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                                </>
                            }
                        />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`textarea-prefix-suffix-${fillMode}-rtl`} className="k-label">Enter text</label>
                        <TextareaNormal id={`textarea-prefix-suffix-${fillMode}-rtl`} fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
