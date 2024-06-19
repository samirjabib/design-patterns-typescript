class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(obs => obs.refresh(data));
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const s = new Subject()

const o1 = new Observer(data => console.log('hola soy el observador uno', data))


s.subscribe(o1)

function change() {
    s.notify(myText.value)
}