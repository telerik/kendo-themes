import { PromptBoxLineModeAuto } from '..';

const styles = ``;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Default (speech-to-text + action)</span>
            <span>uploadButtonConfig object</span>
            <span>speechToTextButtonConfig fillMode + rounded</span>

            <div>
                <PromptBoxLineModeAuto placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    uploadButtonConfig={{ fillMode: 'outline', rounded: 'medium' }}
                />
            </div>
            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    speechToTextButtonConfig={{ fillMode: 'solid', rounded: 'small' }}
                />
            </div>

            <span>actionButtonConfig themeColor + rounded</span>
            <span>speechToTextButtonConfig themeColor</span>
            <span>uploadButtonConfig fillMode + rounded</span>

            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    value="Message"
                    actionButtonConfig={{ themeColor: 'primary', rounded: 'medium' }}
                />
            </div>
            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    speechToTextButtonConfig={{ themeColor: 'primary' }}
                />
            </div>
            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    uploadButtonConfig={{ fillMode: 'outline', rounded: 'large' }}
                />
            </div>

        </div>
    </>
);
