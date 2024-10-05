"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elements_ts_1 = require("./app/domManipulation/elements.ts");
const functions_ts_1 = require("./app/domManipulation/functions.ts");
const d = document;
d.addEventListener("click", (e) => {
    if (!elements_ts_1.$HEADER)
        return;
    (0, functions_ts_1.showHeader)(elements_ts_1.$HEADER);
});
