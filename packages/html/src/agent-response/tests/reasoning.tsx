import { Reasoning } from "..";

export default () => (
  <div id="test-area" className="k-d-flex k-flex-col" style={{ maxWidth: "680px" }}>
    <section>
      <Reasoning secondaryLabel="for 48s" completed label="Completed" expandable />

      <Reasoning secondaryLabel="for 48s" completed label="Completed" expandable expanded>
        <span>I'll design a resource component system for an AI chat — covering different resource types, states, and variants. Let me read the relevant skills first.</span>
        <span>I'll gather local design system context, then create a comprehensive resource component system.</span>
      </Reasoning>

      <Reasoning expandable secondaryLabel="I'm considering the best approach to the problem..." />

      <Reasoning expandable secondaryLabel="I'm considering the best approach to the problem..." expanded>
        <span>I'll design a resource component system for an AI chat — covering different resource types, states, and variants. Let me read the relevant skills first.</span>
        <span>I'll gather local design system context, then create a comprehensive resource component system.</span>
      </Reasoning>
    </section>
  </div>
);
