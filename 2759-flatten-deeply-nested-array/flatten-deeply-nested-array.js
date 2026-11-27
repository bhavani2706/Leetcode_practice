/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat=function(arr, n) {
    let result = [];
    function flatten(arr, n) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && n > 0) {
                flatten(arr[i], n - 1);
            } else {
                result.push(arr[i]);
            }
        }
    }
    flatten(arr, n);
    return result;
};