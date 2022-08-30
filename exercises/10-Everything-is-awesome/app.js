let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            switch (arr[index]) {
                case 0:
                    return_array.push('Yahoo');
                    break;            
                case 1:
                    return_array.push(arr[index]);
                    break;
            }           
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));