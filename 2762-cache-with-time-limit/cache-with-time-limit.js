class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        let exists = this.cache.has(key);

        if (exists) {
            clearTimeout(this.cache.get(key).timer);
        }

        let timer = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timer });

        return exists;
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }

        return -1;
    }

    count() {
        return this.cache.size;
    }
}
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */