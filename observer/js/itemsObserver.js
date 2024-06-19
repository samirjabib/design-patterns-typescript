

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

class ItemsSubject extends Subject {
    constructor() {
        super();
        this.data = [];
    }

    addItem(item) {
        this.data.push(item);
        this.notify(this.data);
    }

    removeItem(item) {
        this.data = this.data.filter(i => i !== item);
        this.notify(this.data);
    }

    clearItems() {
        this.data = [];
        this.notify(this.data);
    }
}


class HtmlElementObserver {
    constructor(element) {
        this.element = element;
    }
    refresh(data) {
        this.element.innerHTML = data.reduce((acc, item) => acc + `<p>${item}</p>`, "");
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

const items = new ItemsSubject();

const o1 = new HtmlElementObserver(document.getElementById("div1"));
const o2 = new HtmlElementObserver(document.getElementById("div2"));
const o3 = new HtmlElementObserver(document.getElementById("div3"));
const newObserver = new Observer(data => {
    div3.innerHTML = data.lenght
});

items.subscribe(o1);
items.subscribe(o2);
items.subscribe(o3);



function add() {
    const name = document.getElementById("txtName").value;
    items.addItem(name);
}