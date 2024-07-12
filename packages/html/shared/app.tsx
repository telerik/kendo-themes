import React from "react";
import ReactDOM from "react-dom/client";

// @ts-ignore-
import App from "%MAIN_FILE%";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
