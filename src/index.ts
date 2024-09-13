// src/index.ts
export class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

export class Observer {
  constructor(private updateFn: (data: any) => void) {}

  update(data: any) {
    this.updateFn(data);
  }
}
