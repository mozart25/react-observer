"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Subject = void 0;
// src/index.ts
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.notify = function (data) {
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return Subject;
}());
exports.Subject = Subject;
var Observer = /** @class */ (function () {
    function Observer(updateFn) {
        this.updateFn = updateFn;
    }
    Observer.prototype.update = function (data) {
        this.updateFn(data);
    };
    return Observer;
}());
exports.Observer = Observer;
