const minMax = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        if (min > numbers[i]) {
            min = numbers[i];
        }

        if (max < numbers[i]) {
            max = numbers[i];
        }
    }

    return {min,max};
}

console.log(minMax([4,1,22,-2,0,5,6,7,8,9,10]))
