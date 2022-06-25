const combinations = (arr1, arr2) => {
    const combinations = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            combinations.push([arr1[i], arr2[j]])
        }
    }

    return combinations;
};

console.log(combinations([1,2,3,4], [7,8,9,0]))
