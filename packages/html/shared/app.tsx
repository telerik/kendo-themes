import React from "react";
import ReactDOM from "react-dom/client";

import '@progress/kendo-theme-default/dist/all.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-
import App from "%MAIN_FILE%";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
