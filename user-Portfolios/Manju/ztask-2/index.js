// Write a function that takes a number as input and returns whether the number is "odd" or "even".

const EvenOrOdd = (num)=>{
    // if(num % 2 === 0){
    //     console.log(`${num} is a even number`);
    // } else{
    //     console.log(`${num} is an odd number`);
    // }
    num % 2 === 0 ? console.log(`${num} is a even number`) :  console.log(`${num} is an odd number`);
    
}

EvenOrOdd(6);


// Write a function to check whether a string is a palindrome 
// (a word or phrase that reads the same backward as forward).

function isPalin(word){
    let wordd = word.toLowerCase();
    let palinword = wordd.split('').reverse().join('');
    // console.log(word)
    // console.log(palinword)
    wordd === palinword? console.log(`${word} is a palindrome`) : console.log(`${word} is not palindrome`);
}
isPalin("madam");




// 3. Write a function that returns the largest number from an array. 
// You can define any set of numbers and the result should largest of the 

let arr = [5,7,9,2,4,90,1];
const ans = arr.reduce((r1,r2)=>r1>r2?r1:r2);
console.log(ans)

// const ans = Math.max(...arr);
// console.log(ans);



// let maxim = arr[0];

// arr.forEach(num =>{
//     if(num > maxim){
//         maxim = num
//     }
// })
// console.log(maxim)




// Write a function that counts the number of vowels in a string.

let namee = "aeiouaeiouqwrty";
let vowels = ['a','e','i','o','u'];

const count = namee.split('').filter(fil=>vowels.includes(fil));
console.log(count.length);


//Write a function that reverses a string.

const fullName = "SamAltMan";
const reverseName = fullName.split('').reverse().join('');
console.log(reverseName);


//Write a function that counts how many times a specific character appears in a string. 
// Result should be an object and each character as key, count as value.

let repeatWord = 'samsamsammmm';

let obj = {};
const wordArr = repeatWord.split('');
console.log(wordArr);
wordArr.map(word=>{
    if(obj[word]){
        obj[word] += 1;
    } else {
        obj[word] = 1
    }
});
console.log(obj);





//Write a function that removes duplicate values from an array.

const val = (arr) => {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr)
}

let arrr = ['apple','banana','apple','banana','pineapple','guava','guava','kiwi'];
val(arrr);




//Sort an array of user objects by age asc. Object should contain name, age.

const employees = [
    {"name":"alice",age:35},
    {"name":"bob",age:49},
    {"name":"Tony",age:53},
    {"name":"natasha",age:26},
    {"name":"peter",age:18},
];

employees.sort((a,b)=>a.age-b.age);
console.log(employees);