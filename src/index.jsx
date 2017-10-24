"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
alert("Test 2");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page are fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    alert("Test");
};
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page are fully unloaded.
*******************************************************************************************************************/
window.onunload = function () {
};
var React = require("react");
var ReactDOM = require("react-dom");
var tl = require("./tl");
// specify the application title
var APPLICATION_TITLE = "React Task List";
// acclaim debug console and set page title
console.log(APPLICATION_TITLE);
document.title = APPLICATION_TITLE;
// render the App component into the main container
ReactDOM.render(<tl.App title={APPLICATION_TITLE}/>, document.getElementById('mainContainer'));
