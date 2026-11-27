class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(x => x !== callback);
            }
        };
    }
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }
        let result = [];

        for (let i = 0; i < this.events[eventName].length; i++) {
            result.push(this.events[eventName][i](...args));
        }
        return result;
    }
}
/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */