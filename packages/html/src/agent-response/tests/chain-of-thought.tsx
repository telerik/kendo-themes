import { ChainOfThought } from "..";
import { Chip } from "../../chip";
import Thought from "../thought.spec";

export default () => (
  <div id="test-area" className="k-d-flex k-flex-col" style={{ maxWidth: "680px" }}>
    <section>
      <ChainOfThought label="Thought" time="for 4m 18s" completed expandable />

      <ChainOfThought label="Thought" time="for 4m 18s" completed expandable expanded>
        <Thought icon="search" label="Searched for components" completed />
        <Thought icon="book" label='Found 12 components matching "button". Reviewing variants — identified 3 candidates with primary intent.' completed />
        <Thought icon="book" label="Retrieved design system documentation for Button components." completed>
          <span>
            Retrieved design system documentation for Button components. Found usage guidelines, spacing specs, and variant definitions across 3 libraries. <Chip text="some-link.com +2" icon="globe" size="small" fillMode="outline" rounded="full" />
          </span>
        </Thought>
        <Thought icon="search" label="Searched for related work" completed />
      </ChainOfThought>

      <ChainOfThought label="Reviewed" secondaryLabel="and updated _theme.scss" linesAdded={3} linesRemoved={1} completed expanded expandable>
        <Thought icon="book" label="Read" secondaryLabel="_theme.scss, lines 1 to 15" completed />
        <Thought icon="search" label="Searched for text" secondaryLabel="text-shimmer, 1 result" completed />
        <Thought icon="book" label="Read" secondaryLabel="_theme.scss, lines 45 to 56" completed />
        <Thought icon="pencil" label="Edited" secondaryLabel="_theme.scss" linesAdded={3} linesRemoved={1} completed />
      </ChainOfThought>
      <ChainOfThought icon="search" label="Searched for components" completed expandable />
      <ChainOfThought icon="book" label="Reviewed component variants" time="for 12s" expandable completed />

      <ChainOfThought label="Thinking through request" secondaryLabel="I'm considering the best approach to the problem..." expandable expanded>
        <Thought icon="search" label="Searched for components" completed />
        <Thought icon="book" label='Found 12 components matching "button". Reviewing variants — identified 3 candidates with primary intent.' completed />
        {/* active thought */}
        <Thought icon="search" label="Searching for related work...">
          <div className="k-d-flex k-flex-wrap k-gap-1">
            <Chip text="some-link.com" icon="globe" size="small" fillMode="outline" rounded="full" />
            <Chip text="some-link.com" icon="globe" size="small" fillMode="outline" rounded="full" />
            <Chip text="some-link.com" icon="globe" size="small" fillMode="outline" rounded="full" />
            <Chip text="some-link.com" icon="globe" size="small" fillMode="outline" rounded="full" />
            <Chip text="some-link.com" icon="globe" size="small" fillMode="outline" rounded="full" />
          </div>
        </Thought>
      </ChainOfThought>
    </section>
  </div>
);
