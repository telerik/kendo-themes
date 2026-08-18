import Citation from "../citation.spec";
import CitationPopover from "../citation-popover.spec";
import CitationPopoverView from "../citation-popover-view.spec";

export const CitationOpened = (props: any) => (
  <>
    <Citation domain="some-link.com" count={5} selected {...props} />
    <CitationPopover
      body={
        <>
          <CitationPopoverView title="View 1" />
          <CitationPopoverView title="View 2" />
        </>
      }
    />
  </>
);
