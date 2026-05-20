import { PromptBox, KendoPromptBoxProps } from '../prompt-box.spec';
import { IconButton } from '../../button';
import { Button } from '../../button';

const options = PromptBox.options;
const states = PromptBox.states;
const defaults = {
    ...PromptBox.defaultOptions,
    variant: 'Single',
};

const variants = [
    {
        name: 'Single',
        title: 'Singleline',
    },
    {
        name: 'Multi',
        title: 'Multiline',
    }
];

const modifiers = [
    {
        name: 'header',
        title: 'Header',
    },
    {
        name: 'endAffix',
        title: 'End Affix',
    },
    {
        name: 'startAffix',
        title: 'Start Affix',
    },
];

export const PromptBoxDemo = (
    props: KendoPromptBoxProps & { variant?: (typeof variants)[number]['name'] } &
    { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean }; }
) => {
    const { variant, modifiers: mods, ...other } = props;

    let additionalProps: KendoPromptBoxProps = {};

    const defaultEndAffix = (
        <>
            <IconButton size="small" icon="send" fillMode="flat" />
        </>
    );

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'header':
                additionalProps.header = mods?.[modifier] ? (
                    <Button>Button in header</Button>
                ) : undefined;
                break;
            case 'endAffix':
                if (mods?.[modifier]) {
                    additionalProps.endAffix = (
                        <>
                            {defaultEndAffix}
                            <IconButton icon="paperclip" size="small" fillMode="flat" />
                        </>
                    );
                }
                break;
            case 'startAffix':
                additionalProps.startAffix = mods?.[modifier] ? (
                    <>
                        <IconButton icon="plus" size="small" fillMode="flat" />
                    </>
                ) : undefined;
                break;
            default:
                break;
        }
    });

    switch (variant) {
        case 'Multi':
            return (
                <PromptBox style={{ width: 300 }}
                    lineMode="multi"
                    endAffix={defaultEndAffix}
                    placeholder="Enter your prompt..."
                    {...other}
                    {...additionalProps}
                />
            );
        case 'Single':
        default:
            return (
                <PromptBox style={{ width: 300 }}
                    lineMode="single"
                    endAffix={defaultEndAffix}
                    placeholder="Enter your prompt..."
                    {...other}
                    {...additionalProps}
                />
            );
    }
}

PromptBoxDemo.options = options;
PromptBoxDemo.states = states;
PromptBoxDemo.variants = variants;
PromptBoxDemo.defaultOptions = defaults;
PromptBoxDemo.modifiers = modifiers;
PromptBoxDemo.className = PromptBox.className;

export default PromptBoxDemo;
