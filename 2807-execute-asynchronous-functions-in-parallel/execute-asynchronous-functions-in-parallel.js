/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll=function(functions) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        if (functions.length === 0) {
            resolve(result);
        }
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => {
                    result[i] = value;
                    count++;
                    if (count === functions.length) {
                        resolve(result);
                    }
                })
                .catch(reject);
        }
    });
};;

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */