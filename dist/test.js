"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/test.ts
var index_1 = require("./index");
var subject = new index_1.Subject();
var observer1 = new index_1.Observer(function (data) {
    return console.log("Observer 1 received: ".concat(data));
});
var observer2 = new index_1.Observer(function (data) {
    return console.log("Observer 2 received: ".concat(data));
});
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello, Observers!");
