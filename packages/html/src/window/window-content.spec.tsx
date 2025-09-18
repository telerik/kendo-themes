import * as React from "react";
import { classNames } from "../misc";
import Window from "./window.spec";
import { KendoComponent } from "../_types/component";

const WINDOW_CONTENT_CLASSNAME = "k-window-content";

const states = [];

const options = {};

export type KendoWindowContentProps = {
  children?: React.ReactNode;
};

export type KendoWindowContentState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const WindowContent: KendoComponent<KendoWindowContentProps & KendoWindowContentState & React.HTMLAttributes<HTMLDivElement>> = (props: KendoWindowContentProps & KendoWindowContentState & React.HTMLAttributes<HTMLDivElement>) => {
  const { children, ...other } = props;

  return (
    <div {...other} className={classNames(WINDOW_CONTENT_CLASSNAME, props.className)}>
      {children}
    </div>
  );
};

WindowContent.states = states;
WindowContent.options = options;
WindowContent.className = WINDOW_CONTENT_CLASSNAME;
WindowContent.defaultOptions = defaultOptions;
WindowContent.moduleName = Window.moduleName;
WindowContent.folderName = Window.folderName;

export default WindowContent;
