import React from "react";

export type KendoBaseProps = {
  as?: React.ElementType;
};

export interface KendoComponent<P> extends React.FunctionComponent<P & KendoBaseProps> {
  className: string;
  moduleName: string | null;
  folderName: string | null;
  [key: string]: any;
}
