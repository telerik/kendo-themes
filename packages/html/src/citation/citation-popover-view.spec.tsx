import * as React from "react";
import { classNames } from "../misc";
import { Icon } from "../icon";
import { KendoComponent } from "../_types/component";
import { CITATION_FOLDER_NAME, CITATION_MODULE_NAME } from "./constants";

export const CITATION_POPOVER_VIEW_CLASSNAME = "k-citation-popover-view";

const states = [] as const;
const options = {};

export type KendoCitationPopoverViewProps = {
  /** Title of the cited source, rendered in bold */
  title?: React.ReactNode;
  /** Short descriptive summary of the cited source */
  body?: React.ReactNode;
  /** URL of the cited source; rendered as a link, prefixed with an icon */
  source?: string;
  /** Icon shown before the source URL */
  sourceIcon?: string;
};

const defaultOptions = {
  sourceIcon: "globe",
};

/**
 * @ux {Structured view} Renders the title, body summary, and source link of a cited source in a consistent layout.
 */
export const CitationPopoverView: KendoComponent<KendoCitationPopoverViewProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoCitationPopoverViewProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { title, body, source, sourceIcon = defaultOptions.sourceIcon, className, children, ...other } = props;
  return (
    <div {...other} className={classNames(className, CITATION_POPOVER_VIEW_CLASSNAME)}>
      {title && <div className="k-citation-popover-view-title">{title}</div>}
      {source && (
        <a href={source} className="k-citation-popover-view-source">
          <Icon icon={sourceIcon} />
          {source}
        </a>
      )}
      {body && <span className="k-citation-popover-view-body">{body}</span>}
      {children}
    </div>
  );
};

CitationPopoverView.states = states;
CitationPopoverView.options = options;
CitationPopoverView.className = CITATION_POPOVER_VIEW_CLASSNAME;
CitationPopoverView.defaultOptions = defaultOptions;
CitationPopoverView.moduleName = CITATION_MODULE_NAME;
CitationPopoverView.folderName = CITATION_FOLDER_NAME;

export default CitationPopoverView;
