/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let result = {};
    for (let i=0;i<arr1.length;i++) {
        result[arr1[i].id]=arr1[i];
    }
    for (let i=0;i<arr2.length;i++) {
        let id=arr2[i].id;
        if(result[id]) {
            result[id]={...result[id], ...arr2[i]};
        } else {
            result[id] = arr2[i];
        }
    }
    return Object.values(result).sort((a, b) => a.id - b.id);
};