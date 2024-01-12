import { TextareaNormal } from '..';
import { IconButton } from '../../button';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(2, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Textarea Resizable - vertical flow</span>
            <span>Textarea Resizable - horizontal flow</span>

            <span>Prefix/Suffix - horizontal orientation</span>

            <div>
                <TextareaNormal style={{ width: "max-content" }} value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                        </>
                    }
                />
            </div>

            <div>
                <TextareaNormal style={{ width: "max-content" }} flow="horizontal" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                        </>
                    }
                />
            </div>

            <span>Prefix/Suffix - vertical orientation</span>

            <div>
                <TextareaNormal style={{ width: "max-content" }} affixesOrientation="vertical" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                        </>
                    }
                />
            </div>

            <div>
                <TextareaNormal style={{ width: "max-content" }} affixesOrientation="vertical" flow="horizontal" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                            <IconButton icon="volume-up" fillMode="clear" />
                        </>
                    }
                />
            </div>
        </div>
    </>
);
