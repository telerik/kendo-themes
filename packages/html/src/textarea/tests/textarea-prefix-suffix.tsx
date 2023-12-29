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
                        <TextareaNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" />
                                </>
                            }
                        />
                    </div>
                    <div>
                        <TextareaNormal fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" />
                                </>
                            }
                        />
                    </div>

                    <div>
                        <TextareaNormal fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" />
                                </>
                            }
                        />
                    </div>

                    <div dir="rtl">
                        <TextareaNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="envelope"/>
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="volume-up" fillMode="clear" />
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
