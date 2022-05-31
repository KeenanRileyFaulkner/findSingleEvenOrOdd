//Simplest solution syntactically
const simpleOutlierCheck = (arr) => {
    console.time('simpleOutlierCheck');
    const evenArr = arr.filter(elem => elem % 2 === 0);
    const oddArr = arr.filter(elem => elem % 2 === 1);
    if(evenArr.length === 1) {
        console.timeEnd('simpleOutlierCheck');
        return evenArr[0];
    } else if (oddArr.length === 1) {
        console.timeEnd('simpleOutlierCheck');
        return oddArr[0];
    } else {
        console.timeEnd('simpleOutlierCheck');
        throw 'The provided array does not have a single odd/even num.';
    }
}


const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const arr2 = [160, 3, 1719, 19, 11, 13, -21];
const evenArr = [22, 10, 12, 14, 54, 3215682];
const oddArr = [13, 45, 61, 69, 73, 87, 101];

console.log('Testing func: simpleOutlierCheck (should return 11)', '\n => ', simpleOutlierCheck(arr1));
console.log('Testing func: simpleOutlierCheck (should return 160)', '\n => ', simpleOutlierCheck(arr2));
// console.log('Testing func: simpleOutlierCheck (throw err)', '\n => ', simpleOutlierCheck(evenArr));
// console.log('Testing func: simpleOutlierCheck (throw err)', '\n => ', simpleOutlierCheck(oddArr));


//Alternate solution, slightly faster due to single loop over arr (generally about 50% faster)
const isEven = num => {
    return (num % 2 === 0);
}

const checkFirstThree = (num1, num2, num3) => {
    const num1isEven = isEven(num1);
    const num2isEven = isEven(num2);
    const num3isEven = isEven(num3);

    if(num1isEven && num2isEven) {
        return 'even';
    } else {
        if ((num1isEven && num3isEven) || (num2isEven && num3isEven)) {
            return 'even'
        }
        return 'odd';
    }
}

const findOutlier = (arr) => {
    console.time('findOutlier');
    const arrOrder = checkFirstThree(arr[0], arr[1], arr[2]);
    if (arrOrder === 'even') {
        for(let i = 0; i < arr.length; ++i) {
            if (!isEven(arr[i])) {
                console.timeEnd('findOutlier');
                return arr[i];
            }
        }
        console.timeEnd('findOutlier');
        throw 'Array is all even!';
    } else {
        for(let i = 0; i < arr.length; ++i) {
            if (isEven(arr[i])) {
                console.timeEnd('findOutlier');
                return arr[i];
            }
        }
        console.timeEnd('findOutlier');
        throw 'Array is all odd!';
    }
}

console.log('Testing func: findOutlier (should return 11)', '\n => ', findOutlier(arr1));
console.log('Testing func: findOutlier (should return 160)', '\n => ', findOutlier(arr2));
// console.log('Testing func: findOutlier ---\n', evenArr, '\n => ', findOutlier(evenArr));
// console.log('Testing func: findOutlier ---\n', oddArr, '\n => ', findOutlier(oddArr));