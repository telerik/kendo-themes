import { Citation } from "../citation.spec";
import CitationPopover from "../citation-popover.spec";
import Icon from "../../icon/icon.spec";

const styles = `
    .k-animation-container {
        position: relative;
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
          <Citation domain="some-link.com" count={5} selected />
        </div>
      </section>

      <section>
        <p>Inline Citation + Popover</p>
        <p>
          An inline citation component is an interactive UI element that embeds clickable reference badges, like [1] or source names, directly into text. <Citation domain="some-link.com" count={5} selected /> When users hover over or click these badges, the component displays full source details, such as titles, domains, URLs.
        </p>
        <CitationPopover
          body={
            <>
              <div className="k-citation-popover-view">
                <div className="k-font-weight-bold">Advances in Natural Language Processing</div>
                <span className="k-color-subtle k-font-size-sm k-mt-2">A comprehensive study on the recent developments in natural language processing technologies and their...</span>
                <a href="#" className="k-d-flex k-align-items-center k-font-size-sm k-mt-1 k-gap-1">
                  <Icon icon="globe" />
                  https://example.com/nlp-advances
                </a>
              </div>
              <div className="k-citation-popover-view">
                <div className="k-font-weight-bold">Advances in Natural Language Processing</div>
                <span className="k-color-subtle k-font-size-sm k-mt-2">A comprehensive study on the recent developments in natural language processing technologies and their...</span>
                <a href="#" className="k-d-flex k-align-items-center k-font-size-sm k-mt-1 k-gap-1">
                  <Icon icon="globe" />
                  https://example.com/nlp-advances
                </a>
              </div>
            </>
          }
        />
      </section>
    </div>
  </>
);
