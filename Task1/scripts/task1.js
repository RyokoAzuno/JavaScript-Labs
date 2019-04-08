// add
function add() {
    let result = typeof(arguments[0]) === typeof(0) ? 0 : '';
    for(let i = 0; i < arguments.length; ++i)
    {
        result += arguments[i];
    }
    return result;
}
// getType
function getType(){
    let result = '';
    for(let i = 0; i < arguments.length; ++i)
    {
        result += '<div>' + typeof(arguments[i]) + '</div>';
    }
    return result;
}
// createRandomArray
function createRandomArray(size){
    if(arguments.length == 0)
        size = 10;
    let arr = new Array(size);
    for(let i = 0; i < size; ++i)
    {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
// removeFromArray
function removeFromArray(number, arr){
    let newArr = arr.filter(function(elt){
        return elt > number;
    });
    let percent = 100 * (newArr.length / arr.length);
    return [newArr, percent];
}
// getDaysBetweenDates
function getDaysBetweenDates(date){
    return parseInt(((((Date.now() - date) / 1000) / 60) / 60) / 24);
}
// randomArrayWithNotZeroBasedIndex
function randomArrayWithNotZeroBasedIndex(arr){
    let indices = new Array(arr.length);
    let map = new Map();
    for(let i = 0; i < indices.length; ++i)
    {
        indices[i] = false;
    }
    for(let i = 0; i < arr.length; ++i)
    {
        let rndIdx = Math.floor(Math.random() * 6);
        if(indices[rndIdx] == true)
        {
            while(indices[rndIdx] != false)
            {
                rndIdx = Math.floor(Math.random() * 6);
            }          
        }
        map.set(i + 1, arr[rndIdx]);
        indices[rndIdx] = true;
    }

    return map;
}

let Person = {
    name: 'John',
    age:  22
};
document.write('<div>######Function add() test######</div>');
document.write('<div>' + add(1, 2, 3, 4, 5) + '</div>');
document.write(add("Hello ", "world!"));
document.write('</br>');
document.write('<div>######Function getType() test######</div>');
document.write(getType("Hello", 3, false, null, undefined, [1,2,3], Person));
document.write('<div>######Function createRandomArray() test######</div>');
let rndArr = createRandomArray(3);
rndArr.forEach(function(elt){document.write(elt+ ' ');});
document.write('</br>');
rndArr = createRandomArray();
rndArr.forEach(function(elt){document.write(elt+ ' ');});
document.write('<div>######Function removeFromArray() test######</div>');
removeFromArray(6, rndArr)[0].forEach(function(elt){document.write(elt+ ' ');});
document.write('</br>');
document.write('Not removed(%): ' + removeFromArray(6, rndArr)[1]);
document.write('<div>######Function getDaysBetweenDates() test######</div>');
document.write(getDaysBetweenDates(new Date("March 20 2019 18:27:34")));
document.write('</br>');
document.write('<div>######Function randomArrayWithNotZeroBasedIndex() test######</div>');
let arr = randomArrayWithNotZeroBasedIndex(["Царь","Укроп","Кенгуру","Ель","Небоскреб","Гусар"]);
arr.forEach(function(value, key){
    document.write('<div>' + key + ' - ' + value + '</div>');
});
