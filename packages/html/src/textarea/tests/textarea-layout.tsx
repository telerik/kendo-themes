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
            <span>Textarea - vertical flow</span>
            <span>Textarea - horizontal flow</span>

            <span>Prefix/Suffix - horizontal orientation</span>

            <div>
                <label htmlFor="textarea-layout-vertical-horiz-affixes" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-layout-vertical-horiz-affixes" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                        </>
                    }
                />
            </div>

            <div>
                <label htmlFor="textarea-layout-horizontal-horiz-affixes" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-layout-horizontal-horiz-affixes" flow="horizontal" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                        </>
                    }
                />
            </div>

            <span>Prefix/Suffix - vertical orientation</span>

            <div>
                <label htmlFor="textarea-layout-vertical-vert-affixes" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-layout-vertical-vert-affixes" affixesOrientation="vertical" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                        </>
                    }
                />
            </div>

            <div>
                <label htmlFor="textarea-layout-horizontal-vert-affixes" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-layout-horizontal-vert-affixes" affixesOrientation="vertical" flow="horizontal" value="Prefix & Suffix"
                    prefix={
                        <>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                            <Icon icon="envelope"/>
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                            <IconButton icon="volume-up" fillMode="clear" aria-label="Play audio" />
                        </>
                    }
                />
            </div>
        </div>
    </>
);
