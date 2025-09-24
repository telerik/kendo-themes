import React from "react";

export interface KendoComponent<P> extends React.FunctionComponent<P> {
  className: string;
  moduleName: string | null;
  folderName: string | null;
  [key: string]: any;
}
