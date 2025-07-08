import React from "react";

export interface KendoComponent<P> extends React.FunctionComponent<P> {
  className: string;
  [key: string]: any;
}
