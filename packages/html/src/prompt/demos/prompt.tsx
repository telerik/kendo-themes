import { Prompt } from '../prompt.spec';
import { PromptContent } from '../prompt-content';
import { PromptFooter } from '../prompt-footer';
import { PromptHeader } from '../prompt-header';
import { PromptView } from '../prompt-view';
import { PromptExpander } from '../prompt-expander';
import { PromptStopFloatingActionButton } from '../prompt-stop-fab';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { IconButton } from '../../button/templates/icon-button';
import { IconTextButton } from '../../button/templates/icon-text-button';
import { Toolbar } from '../../toolbar/toolbar.spec';
import { Popup } from '../../popup/popup.spec';
import { Suggestion } from '../../suggestion/suggestion';
import { SuggestionGroup } from '../../suggestion/suggestion-group.spec';
import { Card } from '../../card/card.spec';
import { CardBody } from '../../card/card-body';
import { CardHeader } from '../../card/card-header';
import { PanelBarGroup } from '../../panelbar/panelbar-group';
import { PanelBarItem } from '../../panelbar/panelbar-item';
import { PanelBarNormal } from '../../panelbar/templates/panelbar-normal';
import { SpeechToTextButton } from '../../speech-to-text-button/speech-to-text-button.spec';
import { Textarea } from '../../textarea/textarea.spec';

const options = Prompt.options;
const states = Prompt.states;
const defaults = {
  ...Prompt.defaultOptions,
  variant: 'ask',
};

const variants = [
  {
    name: 'ask',
    title: 'Ask AI',
  },
  {
    name: 'output',
    title: 'Output',
  },
  {
    name: 'more',
    title: 'More Actions',
  },
];

const modifiers = [
  {
    name: 'stt',
    title: 'SpeechToText',
  },
  {
    name: 'suggestions',
    title: 'Suggestions',
  }
];

export const PromptDemo = (
  props: { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { variant, modifiers: mods, ...other } = { ...props };

  const suggestions = (
    <>
      <SuggestionGroup layout="wrap">
        <Suggestion text="Post for work-life balance importance" />
        <Suggestion text="Out of office" />
      </SuggestionGroup>
    </>
  );

  let additionalProps: any = { suggestions: suggestions, stt: true };

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'suggestions':
        additionalProps.suggestions = mods?.[modifier] ? true : false;
        break;
      case 'stt':
        additionalProps.stt = mods?.[modifier] ? true : false;
        break;
    }
  });

  switch (variant) {
    case 'more':
      return (
        <Popup className="k-prompt-popup">
          <Prompt style={{ width: '330px', height: '350px' }} {...other}>
            <PromptHeader>
              <Toolbar className="k-toolbar-flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">
                  Ask AI
                </IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">
                  Output
                </IconTextButton>
                <IconButton
                  fillMode="flat"
                  themeColor="primary"
                  icon="more-horizontal"
                  rounded="full"
                  selected
                ></IconButton>
              </Toolbar>
            </PromptHeader>
            <PromptContent>
              <PromptView>
                <PanelBarNormal>
                  <PanelBarItem header icon="brush" text="Change Formality">
                    <PanelBarGroup>
                      <PanelBarItem level={1} text="Casual" />
                      <PanelBarItem level={1} text="Neutral" />
                      <PanelBarItem level={1} text="Formal" />
                    </PanelBarGroup>
                  </PanelBarItem>
                  <PanelBarItem header expanded icon="edit-tools" text="Translate">
                    <PanelBarGroup>
                      <PanelBarItem level={1} text="German" />
                      <PanelBarItem level={1} text="Spanish" />
                    </PanelBarGroup>
                  </PanelBarItem>
                  <PanelBarItem header icon="min-width" text="Simplify" />
                  <PanelBarItem header icon="arrows-left-right" text="Expand" />
                </PanelBarNormal>
              </PromptView>
            </PromptContent>
          </Prompt>
        </Popup>
      );
    case 'output':
      return (
        <Popup className="k-prompt-popup">
          <Prompt style={{ width: '330px', height: '350px' }} {...other}>
            <PromptHeader>
              <Toolbar className="k-toolbar-flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">
                  Ask AI
                </IconTextButton>
                <IconTextButton
                  fillMode="flat"
                  themeColor="primary"
                  icon="comment"
                  rounded="full"
                  selected
                >
                  Output
                </IconTextButton>
                <IconButton
                  fillMode="flat"
                  themeColor="primary"
                  icon="more-horizontal"
                  rounded="full"
                ></IconButton>
              </Toolbar>
            </PromptHeader>
            <PromptContent>
              <PromptStopFloatingActionButton />
              <PromptView>
                <div className="k-card-list">
                  <Card>
                    <CardHeader
                      title="Generated with AI"
                      subtitle="Linked in post for work/life balance importance"
                    ></CardHeader>
                    <CardBody>
                      <p>
                        🌟 Embracing Work/Life Balance for Success 🌟
                        <br />
                        <br />
                        Hello LinkedIn network! 👋 Today, let's talk about a key to our well-being:
                        work/life balance. 🌐⚖️
                        <br />
                        <br />
                        In our fast-paced world, balancing professional and personal life is not
                        just a luxury, it's a necessity for health and productivity. 📈🌿
                        <br />
                        <br />
                        ✨ Key Points ✨
                        <br />
                        <br />
                        Enhances Productivity: Less burnout, more motivation. 🚀
                        <br />
                        Boosts Creativity: New experiences = fresh ideas. 💡
                        <br />
                        Improves Health: Mental and physical benefits. 🧘‍♂️
                        <br />
                        Strengthens Relationships: Quality time matters. 🤝
                        <br />
                        Let's champion a culture where success and well-being go hand in hand. Share
                        your work/life balance tips below! 👇
                        <br />
                        <br />
                        #WorkLifeBalance #Productivity #WellBeing
                      </p>
                    </CardBody>
                    <ActionButtons className="k-card-actions" alignment="start">
                      <IconTextButton fillMode="flat" themeColor="primary" icon="copy">
                        Copy
                      </IconTextButton>
                      <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">
                        Retry
                      </IconTextButton>
                      <span className="k-spacer"></span>
                      <IconButton
                        fillMode="flat"
                        themeColor="base"
                        icon="thumb-up-outline"
                      ></IconButton>
                      <IconButton
                        fillMode="flat"
                        themeColor="base"
                        icon="thumb-down-outline"
                      ></IconButton>
                    </ActionButtons>
                  </Card>
                  <Card>
                    <CardHeader title="Generated with AI" subtitle="Out of Office"></CardHeader>
                    <CardBody>
                      <p>
                        Subject: Out of Office: [Your Name]
                        <br />
                        <br />
                        Dear [Recipient's Name],
                        <br />
                        <br />
                        I am currently out of the office until [Return Date] and won't have access
                        to email. For urgent matters, please contact [Colleague's Name] at
                        [Colleague's Email]. I'll respond to your email upon my return.
                        <br />
                        <br />
                        Thank you,
                        <br />
                        [Your Name]
                      </p>
                    </CardBody>
                    <ActionButtons className="k-card-actions" alignment="start">
                      <IconTextButton fillMode="flat" themeColor="primary" icon="copy">
                        Copy
                      </IconTextButton>
                      <IconTextButton fillMode="flat" themeColor="base" icon="arrow-rotate-cw">
                        Retry
                      </IconTextButton>
                      <span className="k-spacer"></span>
                      <IconButton
                        fillMode="flat"
                        themeColor="base"
                        icon="thumb-up-outline"
                      ></IconButton>
                      <IconButton
                        fillMode="flat"
                        themeColor="base"
                        icon="thumb-down-outline"
                      ></IconButton>
                    </ActionButtons>
                  </Card>
                </div>
              </PromptView>
            </PromptContent>
          </Prompt>
        </Popup>
      );
    case 'ask':
    default:
      return (
        <Popup className="k-prompt-popup">
          <Prompt style={{ width: '330px', height: '350px' }} {...other}>
            <PromptHeader>
              <Toolbar className="k-toolbar-flat">
                <IconTextButton
                  fillMode="flat"
                  themeColor="primary"
                  icon="sparkles"
                  rounded="full"
                  selected
                >
                  Ask AI
                </IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">
                  Output
                </IconTextButton>
                <IconButton
                  fillMode="flat"
                  themeColor="primary"
                  icon="more-horizontal"
                  rounded="full"
                ></IconButton>
              </Toolbar>
            </PromptHeader>
            <PromptContent>
              <PromptView>
                <Textarea
                  resize="none"
                  rows={2}
                  placeholder="Ask or generate content with AI"
                  suffixSeparator={false}
                  suffix={
                    <>{additionalProps.stt ? <SpeechToTextButton fillMode="flat" /> : null}</>
                  }
                />
                <PromptExpander expanded={additionalProps.suggestions} title="Suggestions">
                  {suggestions}
                </PromptExpander>
              </PromptView>
            </PromptContent>
            <PromptFooter>
              <ActionButtons className="k-prompt-actions" alignment="start">
                <IconTextButton icon="sparkles" themeColor="primary" rounded="full">
                  Generate
                </IconTextButton>
              </ActionButtons>
            </PromptFooter>
          </Prompt>
        </Popup>
      );
  }
}


PromptDemo.options = options;
PromptDemo.states = states;
PromptDemo.variants = variants;
PromptDemo.defaultOptions = defaults;
PromptDemo.modifiers = modifiers;

export default PromptDemo;

