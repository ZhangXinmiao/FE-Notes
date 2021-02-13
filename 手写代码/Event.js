class Event {
    constructor () {
        this.eventMap = {};
        this.onceList = [];
    }

    hasEvent (eventName) {
        return this.eventMap.hasOwnProperty(eventName);
    }

    on (eventName, cb, once) {
        if(!this.hasEvent(eventName)) {
            this.eventMap[eventName] = [];
        }
        this.eventMap[eventName].push(cb);
        if (once) this.onceList.push(eventName);
    }

    emit (eventName, ...arg) {
        if (this.hasEvent(eventName)) {
            for (let item of this.eventMap[eventName]) {
                item(...arg);
            }
            if (this.onceList.indexOf(eventName) > -1) {
                this.onceList.pop();
                this.off(eventName);
            }
        }
    }

    once (eventName, cb) {
        this.on(eventName, cb, true);
    }

    off (eventName) {
        if (this.hasEvent(eventName)) {
            delete this.eventMap[eventName];
        }
    }

    removeAll () {
        this.eventMap = {};
    }
}

let eventBus = new Event();
eventBus.once('test', function (arg1, arg2) {
    console.log('event emit,arg:', arg1, arg2);
});
eventBus.emit('test', 'hahaah', 'miaomiao');
// eventBus.off('test');
eventBus.emit('test', 'hahaah', 'miaomiao');
