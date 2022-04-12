/*________ CODEWARS__________ */
/*
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the 
exponent ranging from 0 to n ( inclusive ).*/
/*
const powersOfTwo = (n) => {
    const list = []
    for(var i =0; i<=n; i++){
        list[i]=Math.pow(2,i)
    }
    return(
        list
    )
}*/

/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.*/


/*
function generateHashtag (str) {
    if(str==""){return false}
    const arrayOfWords = str.split(' ')
    const a=arrayOfWords.length
    for (var i=0; i<a;i++){
        if(arrayOfWords.indexOf('')===-1){
            break
        }else{
        arrayOfWords.splice(arrayOfWords.indexOf(''),1)
        }
    }
    for (var i=0; i<arrayOfWords.length; i++){
        arrayOfWords[i]=arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1)
    }
    let hash = '#' + arrayOfWords.join('')
    return hash==='#'?false:hash.length<=140?hash:false
}
*/
/*
function generateHashtag(str) {
    var hashed = '#' + str.split(' ').map(function(v) {return v.charAt(0).toUpperCase() + v.slice(1);}).join('');
    return hashed.length > 140 || str == ""||hashed==="#" ? false : hashed;
  }
*/

/*
Implement a function center that takes a string strng, 
an integer width, and an optional character fill (default: ' ') 
and returns a new string of length width where strng is centered 
and on the right and left padded with fill.
*/
/*
function center (strng, width, fill = ' ') {
    return strng.length>=width?strng:fill.repeat(Math.round((width-strng.length)/2)) + strng + fill.repeat(Math.floor((width-strng.length)/2))
  }
 */


/*

  Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, 
the cube above will have volume of (n-1)^3 
and so on until the top which will have a volume of 1^3.
You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m
and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m 
if such a n exists or -1 if there is no such n.
*/

function findNb(m) {
    let summa = 0
    let int = 0
    for (let n = 1; summa < m; n++) {
        int = n
        summa = summa + (int **= 3)
        return summa === m ? n : summa > m ? -1 : 'toto'
    }
}

/*Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present 
in list b keeping their order.*/

function arrayDiff(a, b) {
    if (a === []) {
        return b
    }
    if (b === []) {
        return a
    }
    const arrayDif = []
    for (let i in a) {
        if (b.includes(a[i]) == false) {
            arrayDif.push(a[i])
        }
    }
    for (let j in b) {
        if (a.includes(b[j]) === false && arrayDif.includes(b[j]) === false) {
            arrayDif.push(b[j])
        }
    }
    return arrayDif
}

/*
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Only capital characters can and will participate a battle.
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.*/

function battle(x, y) {
    const char = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }
    let xSumma = 0
    let ySumma = 0
    let zo = "a"
    for (let i = 0; i < x.length; i++) {
        zo = x[i].toUpperCase()
        xSumma = xSumma + char[zo]
    }
    for (let j = 0; j < y.length; j++) {
        zo = y[j].toUpperCase()
        ySumma = ySumma + char[zo]
    }
    return xSumma === ySumma ? "Tie!" : xSumma > ySumma ? x : y
}

function battle(x, y) {
    let alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let score = word => word.split('').reduce((acc, cur) => acc + alphabet.indexOf(cur), 0)

    return score(x) > score(y) ? x : score(x) < score(y) ? y : "Tie!"
}

/*The goal of this exercise is to convert a string
to a new string where each character in the new string
is "(" if that character appears only once in the original string, or ")"
if that character appears more than once in the original string.
 Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word) {
    const charArray = word.split("")
    let answerArray = []
    mapFunction = (char) => {
        let counter = 0
        for (i in charArray) {
            if (char.toUpperCase() === charArray[i].toUpperCase()) {
                counter += 1
            }
        }
        return counter > 1 ? ")" : "("
    }
    answerArray = charArray.map(mapFunction)
    return answerArray.join('')
}


/* John wants to decorate the walls of a room with wallpaper. 
He wants a fool-proof method for getting it right.
John knows that the rectangular room has a length of l meters,
a width of w meters, a height of h meters. The standard width of the rolls
 he wants to buy is 52 centimeters. The length of a roll is 10 meters. 
 He bears in mind however, that it’s best to have an extra length 
 of wallpaper handy in case of mistakes or miscalculations so he wants
  to buy a length 15% greater than the one he needs.
Last time he did these calculations he got a headache, so could you help John? */

function wallpaper(l, w, h) {
    let numbers = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

    if (l === 0 || w === 0 || h === 0) {
        return numbers[0]
    }
    let answer = Math.round(((2 * (l + w) / 0.52) / (10 / h)) * 1.15)
    return numbers[answer]
}

/*
Write a function to split a string and convert it into an array of words.*/
function stringToArray(string) {
    return string.split(' ')
}


/*
My roommate and I occasionally make wagers on if
    we can beat each other in Super Smash Bros.
    Being the competitor I am,
    I can't take a loss without getting a chance at redemption. ' +
'Often times, this manifests in the form of a "Double or nothing" bet. ' +
'Rather than paying up, the wager will instead be doubled, and an additional round will be played.
...This consistently results in me losing more money than I initially wagered.
    Given the amount of cash on hand, the initial wager,
    and the number of rounds played, return the amount of money
that I'll have left after our gam(bl)ing session has concluded.
If I can't afford to pay up, return "I'll pay you back later" instead ;)
*/

function doubleOrNothing(cash, wager, losses) {
    let a = 1
    let b = wager
    while (a < losses) {
        a++
        b = b * 2
    }
    return cash - b
}

// Given an integral number, determine if it's a square number:
let isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n)) ? true : false
}

/*Create a method each_cons that accepts a list and a number n,
 and returns cascading subsets of the list of size n, like so:*/
function eachCons(array, n) {
    const a = array.map(el => [el])
    let answer = []
    for (let i in array) {
        let z = i
        while (a[i].length !== n) {
            ++z
            a[i].push(array[z])
        }
        if (a[i].includes(undefined) === false) {
            answer.push(a[i])
        }
    }
    return answer
}

/*Complete the function that calculates the area of the red square,
    when the length of the circular arc A is given as the input.
    Return the result rounded to two decimals.*/

function squareArea(A) {
    return parseFloat(Math.pow(2 * A / Math.PI, 2).toFixed(2))
}


/*
In this simple exercise, you will build a program that takes a value, integer ,
and returns a list of its multiples up to another value, limit .
If limit is a multiple of integer, it should be included as well.
There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.
 */

/*
function findMultiples(integer, limit) {
    let answerArray = [integer]
    answerArray.map(el=>{
        let counter = integer
        while (counter<limit){
            answerArray.push(counter+1)
            counter++
        }
    })
    return answerArray.filter(el=>Number.isInteger(el/ integer))
}
*/

const findMultiples = (i, l) => {
    let a = []
    let b = i
    while (b <= l) {
        a.push(b)
        b += i
    }
    return a
}

/*Create a function that takes an array of letters, and combines them into words in a sentence.*/

const arrAdder = (arr) => {
    let resArr = []
    const count = arr[0].length
    for (let i = 0; i < count; i++) {
        resArr[i] = arr.map(el => el[i]).filter(el => el !== '').join('')
    }
    return resArr.filter(el => el !== '').join(' ')
}
/*const arrrrrr = [
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']]*/

/*Write the following function:
function areaOfPolygonInsideCircle(circleRadius, numberOfSides)*/

const areaOfPolygonInsideCircle = (circleRadius, numberOfSides) => {
    const area = (numberOfSides * Math.pow(circleRadius, 2) * Math.sin((2 * Math.PI) / numberOfSides)) / 2
    return parseFloat(area.toFixed(3))
}


/*IPv4 to int32*/

function ipToInt32(ip) {
    let arr = ip.split('.').map(el => Number(el).toString(2))
    arr = arr.map(el => {
        if (el.length < 8) {
            let n = Array(8 - el.length).fill('0').join('')
            el = n.concat(el)
        }
        return el
    })
    return parseInt(arr.join(''), 2)
}

//console.log(ipToInt32('128.32.10.1'))

/*Given an n x n array, return the array elements arranged from outermost elements
to the middle element, traveling clockwise.*/
snail = function (array) {
    let copy = [...array]
    if (array.length === 1){
        return array[0]
    }
    let res = []
    let count = Math.pow(array.length, 2)
    while (count > 0) {
        //____________________from left to right _________________

        if (count===0){
            break
        }
        let a = copy[0].length
        res = [...res, ...copy.shift()]
        count -= a
        //_______________________from up to down_____________

        if (count===0){
            break
        }
        copy.map(el => {
            res = [...res, el.pop()]
            return el
        })
        count -= copy.length

        //_________________________from right to left_________

        if (count===0){
            break
        }
        let b = copy[copy.length-1].reverse()
        res = [...res, ...b]
        count -= copy[copy.length - 1].length
        copy.pop()

        //__________________________ from down to up ____________

        if (count===0){
            break
        }
        copy.reverse().map(el => {
            res = [...res, el[0]]
            el.shift()
            count-=1
            return el
        })
        copy.reverse()
    }
    return res
}
/*let a = [[1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]]*/
/*[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]*/


/*let a = [[1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]]*/
//[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]


/*let a = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]*/
