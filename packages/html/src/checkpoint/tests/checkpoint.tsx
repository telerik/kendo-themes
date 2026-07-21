import { Checkpoint } from "..";
import { Button } from "../../button";
import { Chat, ChatMessageGroup, ChatMessage } from "../../chat";

export default () => (
  <div id="test-area" className="k-d-flex k-flex-col k-gap-6" style={{ maxWidth: "480px" }}>
    <Checkpoint visible>
      <Button text="Restore Checkpoint" fillMode="flat" size="xsmall" />
    </Checkpoint>

    <Checkpoint visible>
      <span className="k-checkpoint-stamp">Checkpoint Restored</span>
      <span>·</span>
      <Button text="Redo" fillMode="flat" size="xsmall" />
    </Checkpoint>

    <Checkpoint visible>
      <Button text="Restore Checkpoint" fillMode="flat" size="xsmall" />
      <span>·</span>
      <Button icon="arrows-swap" fillMode="flat" size="xsmall" aria-label="Swap direction" />
    </Checkpoint>

    <section>
      <Chat>
        <ChatMessageGroup avatar="" author="" fullWidth>
          <ChatMessage text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior." />
        </ChatMessageGroup>
        <Checkpoint visible>
          <span className="k-checkpoint-stamp">Restore Checkpoint</span>
          <span>·</span>
          <Button icon="arrow-rotate-ccw" fillMode="flat" size="xsmall" />
        </Checkpoint>
        <ChatMessageGroup avatar="" author="" type="sender">
          <ChatMessage text="Lets create together" />
        </ChatMessageGroup>
        <ChatMessageGroup avatar="" author="" fullWidth>
          <ChatMessage text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior." />
        </ChatMessageGroup>
      </Chat>
    </section>
  </div>
);
