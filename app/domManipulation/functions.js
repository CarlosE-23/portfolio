"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHeader = void 0;
const classes_ts_1 = require("./classes.ts");
// header functions
const showHeader = (header) => {
    console.log(header);
    header.classList.add(classes_ts_1.classes.showHeader);
};
exports.showHeader = showHeader;
