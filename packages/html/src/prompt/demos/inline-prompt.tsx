import { Prompt } from '../prompt.spec';
import { PromptContent } from '../prompt-content';
import { PromptView } from '../prompt-view';
import { PromptSendButton } from '../prompt-send-button';
import { ActionButtons } from '../../action-buttons';
import { IconButton, IconTextButton } from '../../button';
import { Card, CardBody } from '../../card';
import { SpeechToTextButton } from '../../speech-to-text-button';
import { Textarea } from '../../textarea';
import { Popup } from '../../popup';

const options = Prompt.options;
const states = Prompt.states;
const defaults = {
    ...Prompt.defaultOptions,
};

const modifiers = [
    {
        name: 'commands',
        title: 'Commands Menu',
        default: true,
    },
    {
        name: 'stt',
        title: 'SpeechToText',
        default: true,
    },
    {
        name: 'response',
        title: 'Response Card',
    },
    {
        name: 'generating',
        title: 'Generating',
    },
];

export const InlineAIPromptDemo = (props: {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}) => {
    const { modifiers: mods, ...other } = { ...props };

    let additionalProps: any = {
        commands: true,
        stt: true,
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'commands':
                {
                    additionalProps.commands = mods?.[modifier] ? true : undefined;
                }
                break;
            case 'stt':
                {
                    additionalProps.stt = mods?.[modifier] ? true : undefined;
                }
                break;
            case 'response':
                {
                    additionalProps.response = mods?.[modifier] ? true : undefined;
                }
                break;
            case 'generating':
                {
                    additionalProps.generating = mods?.[modifier] ? true : undefined;
                }
                break;
            default:
                return;
        }
    });

    const responseCard = (
        <Card>
            <CardBody style={{ maxHeight: '150px', overflowY: 'auto' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
            </CardBody>
            <ActionButtons className="k-card-actions" alignment="start">
                <IconTextButton fillMode="flat" themeColor="primary" icon="copy">
                    Copy
                </IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="insert-bottom">
                    Insert
                </IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="check">
                    Replace
                </IconTextButton>
                <IconTextButton fillMode="flat" themeColor="base" icon="cancel">
                    Discard
                </IconTextButton>
            </ActionButtons>
        </Card>
    );

    return (
        <Popup className="k-prompt-popup">
            <Prompt style={{ width: '450px', height: 'auto' }} {...other}>
                <PromptContent>
                    <PromptView>
                        {additionalProps.response ? responseCard : null}
                        <Textarea
                            rows={1}
                            placeholder="Edit, generate or explain ..."
                            resize="none"
                            flow="horizontal"
                            prefixSeparator={additionalProps.commands && additionalProps.stt}
                            suffixSeparator={false}
                            prefix={
                                <>
                                    {additionalProps.commands ? <IconButton fillMode="flat" icon="menu" /> : null}
                                    {additionalProps.stt ? <SpeechToTextButton fillMode="flat" /> : null}
                                </>
                            }
                            suffix={<PromptSendButton generating={additionalProps.generating ? true : false} />}
                        />
                    </PromptView>
                </PromptContent>
            </Prompt>
        </Popup>
    );
}

InlineAIPromptDemo.options = options;
InlineAIPromptDemo.states = states;
InlineAIPromptDemo.variants = [];
InlineAIPromptDemo.defaultOptions = defaults;
InlineAIPromptDemo.modifiers = modifiers;
InlineAIPromptDemo.className = Prompt.className;

export default InlineAIPromptDemo;
