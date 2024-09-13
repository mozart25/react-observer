// src/test.ts
import { Subject, Observer } from "./index";

const subject = new Subject();

const observer1 = new Observer((data) =>
  console.log(`Observer 1 received: ${data}`)
);
const observer2 = new Observer((data) =>
  console.log(`Observer 2 received: ${data}`)
);

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello, Observers!");
