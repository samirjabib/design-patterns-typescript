interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

export class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((obs) => obs.refresh(value));
  }
}

class Observer<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((value) => {
  console.log(value, "hello");
});

subject.subscribe(obs1);
subject.notify(1);
