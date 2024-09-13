"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = exports.Subject = void 0;
// src/index.ts
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notify(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
}
exports.Subject = Subject;
class Observer {
    constructor(updateFn) {
        this.updateFn = updateFn;
    }
    update(data) {
        this.updateFn(data);
    }
}
exports.Observer = Observer;
