import React from "react";
import { AriaRule, KbRule, UxRule } from "./accessibility";

export type KendoBaseProps = {
  as?: React.ElementType;
};

export interface KendoComponent<P> extends React.FunctionComponent<P & KendoBaseProps> {
  className: string;
  moduleName: string | null;
  folderName: string | null;
  ariaSpec?: AriaRule[];
  kbSpec?: KbRule[];
  uxSpec?: UxRule[];
  [key: string]: any;
}
