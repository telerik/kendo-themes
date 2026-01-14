import React from "react";

export interface KendoComponent<P> extends React.FunctionComponent<P> {
  className: string;
  moduleName: string | null;
  folderName: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Index signature required for dynamic static properties (states, options, defaultOptions) on 80+ components. Proper typing would require generics refactor across all component specs.
  [key: string]: any;
}
