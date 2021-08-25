// You should implement your task here.

module.exports = function towelSort(matrix) {

    let resMatr = [];
    if (matrix === undefined) {
        return resMatr;
    }
    for (let i = 0; i < matrix.length; i++) {
        let curMatr = matrix[i].sort(function(a, b) {
            return (a - b);
        })
        if (i % 2 !== 0) {
            curMatr = curMatr.reverse();
        }
        for (let j = 0; j < curMatr.length; j++) {
            resMatr.push(curMatr[j]);
        }
    }
    return resMatr;
}