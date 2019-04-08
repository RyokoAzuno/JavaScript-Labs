let obj1 = {a: 2, mambo: 43, zelda: 10, lock: "333"};
let obj2 = {a: 2, mambo: 43, zelda: 10, lock: "333"};
let obj3 = {a: 5, mambo: 57, zelda: 30, lock: "568"};
let obj4 = {zelda: 10, mambo: 43, lock: "333", a: 2};

function equals(obj1, obj2){
    let keysObj1 = Object.keys(obj1).sort();
    let keysObj2 = Object.keys(obj2).sort();

    if(keysObj1.length != keysObj2.length)
        return false;

    for(let i = 0; i < keysObj1.length; ++i)
    {
        if(keysObj1[i] != keysObj2[i])
            return false;
    }

    for(let i = 0; i < keysObj1.length; ++i)
    {
        if(obj1[keysObj1[i]] != obj2[keysObj2[i]])
            return false;
    }

    return true;
}

function deleteKeys(obj){
    let len = arguments.length;
    if(len > 1){
        for(let i = 1; i < len; ++i){
            delete obj[arguments[i]];
        }
    }
    return obj;
}

document.write('<div>######Function equals() test######</div>');
document.write('<div>' + equals(obj3, obj4) + '</div>');
document.write('<div>######Function deleteKeys() test######</div>');
document.write(JSON.stringify(deleteKeys(obj1, "mambo", "ro", "kanto", "", "a")));
//deleteKeys(obj1, "mambo").forEach(function(value, key){
//document.write('<div>' + key +' - ' + value +'</div>');
//});