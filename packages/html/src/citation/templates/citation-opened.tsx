import Citation from "../citation.spec";
import CitationPopover from "../citation-popover.spec";

export const CitationOpened = (props: any) => (
  <>
    <Citation domain="some-link.com" count={5} selected {...props} />
    <CitationPopover
      body={
        <>
          <div className="k-citation-popover-view">
            <div>View 1</div>
          </div>
          <div className="k-citation-popover-view">
            <div>View 2</div>
          </div>
        </>
      }
    />
  </>
);
