const binarySearch = (sortedNumbers, n) => {
    // Определяем точки начала и конца поиска
    let start = 0;
    let end = sortedNumbers.length;

    while (start < end) {
        // Находим элемент в середине массива
        const middle = Math.floor((start + end) / 2);
        const value = sortedNumbers[middle];

        // Сравниваем аргумент со значением в середине массива
        if (n === value) {
            return middle;
        }

        // Если аргумент меньше, чем серединное значение, разделяем массив пополам
        // Теперь конец массива — это его бывшая середина
        if (n < value) {
            end = middle;
            // Иначе началом массива становится элемент, идущий сразу за «серединой»
        } else {
            start = middle + 1;
        }
    }

    // если искомое число не найдено, возвращаем -1
    return -1;
}

const intersection = (arr1, arr2) => {
    const elements = [];
    for (let i = 0; i < arr1.length; i++) {
        const haveElement = binarySearch(arr2, arr1[i])

        if (haveElement > -1) {
            elements.push(haveElement);
        }
    }

    return elements;
};

console.log(intersection([1,2,3,4,5,6], [7,8,2,0,3]));
