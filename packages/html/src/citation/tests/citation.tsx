import { Citation } from "../citation.spec";
import CitationPopover from "../citation-popover.spec";
import CitationPopoverView from "../citation-popover-view.spec";

const styles = `
    .k-animation-container {
        position: relative;
        width: 318px;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-flex k-flex-col k-gap-8" style={{ maxWidth: "680px" }}>
      <section>
        <p>Inline Citation</p>
        <div className="k-d-flex k-flex-wrap k-gap-2 k-align-items-center">
          <Citation domain="some-link.com" count={5} />
          <Citation domain="some-link.com" count={5} hover />
        </div>
      </section>

      <section>
        <p>Inline Citation + Popover</p>
        <p>
          An inline citation component is an interactive UI element that embeds clickable reference badges, like [1] or source names, directly into text. <Citation domain="some-link.com" count={5} hover /> When users hover over or click these badges, the component displays full source details, such as titles, domains, URLs.
        </p>
        <CitationPopover
          body={
            <>
              <CitationPopoverView title="Advances in Natural Language" body="A comprehensive study on the recent developments in natural language processing technologies" source="https://example.com/nlp-advances" />
              <CitationPopoverView title="Advances in Natural Language" body="A comprehensive study on the recent developments in natural language processing technologies" source="https://example.com/nlp-advances" />
            </>
          }
        />
      </section>

      <section>
        <p>Inline Citation + Popover with long texts</p>
        <CitationPopover
          body={
            <>
              <CitationPopoverView title="Advances in Natural Language Processing Long Long Long" body="A comprehensive study on the recent developments in natural language processing technologies and their long long long long long long long long long long long long long long long long long long long long long text" source="https://example.com/nlp-advances/long/long/long" />
              <CitationPopoverView title="Advances in Natural Language Processing Long Long Long" body="A comprehensive study on the recent developments in natural language processing technologies and their" source="https://example.com/nlp-advances/long/long/long" />
            </>
          }
        />
      </section>
    </div>
  </>
);
