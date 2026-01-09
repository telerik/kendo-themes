import { Chat, KendoChatProps } from '../chat.spec';
import { FileBox } from '../../file-box/file-box';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';
import { ChatMessageReference } from '../chat-message-reference';
import { ChatNormal } from '../templates/chat-normal';
import { Appbar, AppbarSection } from '../../appbar';
import { Button } from '../../button';
import { Suggestion, SuggestionGroup } from '../../suggestion';

const states = Chat.states;
const defaults = Chat.defaultOptions;
const options = Chat.options;
const modifiers = [
  {
    name: 'header',
    title: 'Header',
  },
  {
    name: 'pinned',
    title: 'Pinned',
  },
  {
    name: 'suggested',
    title: 'Suggested Actions',
  },
  {
    name: 'author',
    title: 'Author',
  },
  {
    name: 'avatar',
    title: 'Avatar',
  },
  {
    name: 'quick',
    title: 'Quick Replies',
  },
];
const variants = [];

export const ChatDemo = (
  props: KendoChatProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {
    author: null,
    avatar: null,
  };

  const demoHeader = (
    <Appbar className="k-chat-header" positionMode="sticky" themeColor={'primary'}>
      <span className="k-spacer k-spacer-sized k-w-1"></span>
      <AppbarSection>
        <span>Chat with demo bot</span>
      </AppbarSection>
      <span className="k-spacer" />

      <AppbarSection>
        <Button fillMode="flat" icon="more-vertical" />
      </AppbarSection>
    </Appbar>
  );

  const demoPinned = (
    <ChatMessageReference
      type="sender"
      pinned
      content="Hello! Generate a cover letter."
      closeable
    />
  );

  const demoSuggestedActions = (
    <SuggestionGroup>
      <Suggestion text="Provide a CV template" />
      <Suggestion text="Generate a cover letter" />
    </SuggestionGroup>
  );

  const demoQuickReplies = (
    <SuggestionGroup>
      <Suggestion themeColor="primary" text="Thank you!" />
      <Suggestion themeColor="primary" text="Great!" />
    </SuggestionGroup>
  );

  const userAvatar = 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg';
  const botAvatar = null;
  const userAuthor = 'User';
  const botAuthor = 'Demo Bot';

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'header':
        additionalProps.header = mods?.[modifier] ? demoHeader : false;
        break;
      case 'pinned':
        additionalProps.pinned = mods?.[modifier] ? demoPinned : false;
        break;
      case 'suggested':
        additionalProps.suggestedActions = mods?.[modifier] ? demoSuggestedActions : false;
        break;
      case 'author':
        additionalProps.author = mods?.[modifier] ? true : null;
        break;
      case 'avatar':
        additionalProps.avatar = mods?.[modifier] ? userAvatar : null;
        break;
      case 'quick':
        additionalProps.quickReplies = mods?.[modifier] ? demoQuickReplies : <></>;
        break;
      default:
        break;
    }
  });

  const { header, pinned, suggestedActions, author, avatar, quickReplies } = additionalProps;

  return (
    <ChatNormal
      value="Thank you!"
      style={{ minHeight: '100%' }}
      {...other}
      header={header}
      pinned={pinned}
      suggestedActions={suggestedActions}
    >
      <ChatMessageGroup avatar={botAvatar} author={author ? botAuthor : null}>
        <ChatMessage text="Hello, this is a demo bot. How can I help you ?" />
      </ChatMessageGroup>
      <ChatMessageGroup
        avatar={avatar ? userAvatar : null}
        author={author ? userAuthor : null}
        type="sender"
      >
        <ChatMessage text="Hello! Generate a cover letter." />
      </ChatMessageGroup>
      <ChatMessageGroup avatar={botAvatar} author={author ? botAuthor : null}>
        <ChatMessage
          text="Sure. Here is a cover letter template"
          files={
            <FileBoxWrapper>
              <FileBox icon="file-pdf" name="cover_letter.pdf" size="1.43MB" />
            </FileBoxWrapper>
          }
        />
      </ChatMessageGroup>
      {quickReplies}
    </ChatNormal>
  );
}


ChatDemo.options = options;
ChatDemo.states = states;
ChatDemo.variants = variants;
ChatDemo.defaultOptions = defaults;
ChatDemo.modifiers = modifiers;

export default ChatDemo;

