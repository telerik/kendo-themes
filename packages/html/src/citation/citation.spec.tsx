import * as React from "react";
import { classNames } from "../misc";
import { Chip, KendoChipProps, KendoChipState } from "../chip";
import { KendoComponent } from "../_types/component";
import { CITATION_FOLDER_NAME, CITATION_MODULE_NAME } from "./constants";

export const CITATION_CLASSNAME = "k-citation";

const states = [] as const;
const options = {};

export type KendoCitationProps = {
  /** Source domain/name shown as the chip label, e.g. "some-link.com" */
  domain?: string;
  /** Number of additional sources not shown individually, renders as a "+N" suffix */
  count?: number;
};

const defaultOptions = {
  icon: "globe",
  size: "small",
  fillMode: "outline",
  rounded: "full",
} as const;

/**
 * @ux {Inline citation} Displays a source domain as a small, pill-shaped chip inline within AI-generated content.
 * @ux {Additional sources} An optional count renders as a "+N" suffix indicating further uncited sources.
 */
export const Citation: KendoComponent<KendoCitationProps & KendoChipProps & KendoChipState & React.HTMLAttributes<HTMLDivElement>> = (props: KendoCitationProps & KendoChipProps & KendoChipState & React.HTMLAttributes<HTMLDivElement>) => {
  const { domain, count, text, icon = defaultOptions.icon, size = defaultOptions.size, fillMode = defaultOptions.fillMode, rounded = defaultOptions.rounded, className, ...other } = props;

  const label = text ?? [domain, count ? `+${count}` : undefined].filter(Boolean).join(" ");

  return <Chip {...other} text={label} icon={icon} size={size} fillMode={fillMode} rounded={rounded} className={classNames(className, CITATION_CLASSNAME)} />;
};

Citation.states = states;
Citation.options = options;
Citation.className = CITATION_CLASSNAME;
Citation.defaultOptions = defaultOptions;
Citation.moduleName = CITATION_MODULE_NAME;
Citation.folderName = CITATION_FOLDER_NAME;

export default Citation;
