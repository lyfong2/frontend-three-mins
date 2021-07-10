let str1 = 'abcdcba';
let str2 = 'aabbaa';
let str3 = 'abcdefg';


let compare = (str) => {
    return str.split('').reverse().join('') === str;
}

console.log(compare(str1));
console.log(compare(str2));
console.log(compare(str3));
