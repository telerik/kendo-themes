// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-
import App from "%MAIN_FILE%";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
