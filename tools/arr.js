function findElemByCondition(arr, condition) {
    let ret = [];
    for (let i = 0; i < arr.length; ++i) {
        let elem = arr[i];
        if (condition && condition(elem)) {
            ret.push(elem);
        }
    }
    return ret;
}

module.expots = {
    findElemByCondition,
};
