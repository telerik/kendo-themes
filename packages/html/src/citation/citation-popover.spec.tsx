import * as React from "react";
import { classNames } from "../misc";
import { IconButton } from "../button";
import { ButtonGroup } from "../button-group";
import { KendoComponent } from "../_types/component";
import { CITATION_FOLDER_NAME, CITATION_MODULE_NAME } from "./constants";
import { Popover } from "../popover";

export const CITATION_POPOVER_CLASSNAME = "k-citation-popover";

const states = [] as const;
const options = {};

export type KendoCitationPopoverProps = {
  pageIndex?: number;
  totalPages?: number;
  body?: React.JSX.Element;
};

const defaultOptions = {
  pageIndex: 1,
  totalPages: 2,
};

/**
 * @aria {aria-label} Accessible name applied to the Previous and Next pagination icon buttons.
 * @ux {Paged navigation} Displays a "current/total" page indicator with Previous/Next buttons to move between citation pages.
 * @ux {Sliding views} Slides between page views using the --kendo-citation-popover-view-current CSS variable instead of unmounting content.
 */
export const CitationPopover: KendoComponent<KendoCitationPopoverProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoCitationPopoverProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { body, pageIndex = defaultOptions.pageIndex, totalPages = defaultOptions.totalPages, className, children, ...other } = props;
  return (
    <Popover
      {...other}
      className={classNames(className, CITATION_POPOVER_CLASSNAME)}
      style={{ "--kendo-citation-popover-view-current": pageIndex } as React.CSSProperties}
      title={
        <>
          <span className="k-citation-pages">
            {pageIndex}/{totalPages}
          </span>
          <ButtonGroup fillMode="flat">
            <IconButton className="k-group-start" icon="arrow-left" fillMode="flat" size="small" aria-label="Previous" disabled={pageIndex <= 1} />
            <IconButton className="k-group-end" icon="arrow-right" fillMode="flat" size="small" aria-label="Next" disabled={pageIndex >= totalPages} />
          </ButtonGroup>
        </>
      }
      body={body}
    >
      {children}
    </Popover>
  );
};

CitationPopover.states = states;
CitationPopover.options = options;
CitationPopover.className = CITATION_POPOVER_CLASSNAME;
CitationPopover.defaultOptions = defaultOptions;
CitationPopover.moduleName = CITATION_MODULE_NAME;
CitationPopover.folderName = CITATION_FOLDER_NAME;

/**
 * @keyboard {Enter or Space} Triggers the focused Previous/Next icon button.
 * @keyboard {Escape} Dismisses the popover (inherited from Popover).
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ WAI-ARIA Authoring Practices: Dialog (Modal) Pattern
 */

export default CitationPopover;
