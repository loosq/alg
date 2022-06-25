const bubbleSort = (arr) => {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                swapped = true;
            }
        }
    }

    return arr;
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const unSortedArr = [6,5,3,1,8,7,2,4];
const sortedArr = bubbleSort(unSortedArr);
console.log(sortedArr)
