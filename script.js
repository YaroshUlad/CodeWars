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
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12,
        M:13,
        N:14,
        O:15,
        P:16,
        Q:17,
        R:18,
        S:19,
        T:20,
        U:21,
        V:22,
        W:23,
        X:24,
        Y:25,
        Z:26
    }
    let xSumma = 0
    let ySumma = 0
    let zo = "a"
    for (let i = 0; i < x.length; i++){
        zo = x[i].toUpperCase()
        xSumma = xSumma + char[zo]
    }
    for (let j = 0; j < y.length; j++){
        zo = y[j].toUpperCase()
        ySumma = ySumma + char[zo]
    }
    return xSumma === ySumma ? "Tie!" : xSumma > ySumma? x : y
  }

  function battle(x, y) {
    let alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let score = word => word.split('').reduce((acc,cur) => acc + alphabet.indexOf(cur), 0)
    
    return score(x) > score(y) ? x : score(x) < score(y) ? y : "Tie!"
  }

 /*The goal of this exercise is to convert a string 
 to a new string where each character in the new string 
 is "(" if that character appears only once in the original string, or ")" 
 if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate. */

  function duplicateEncode(word){
      const charArray = word.split("")
      let answerArray = []
      console.log (charArray)
      mapFunction = (char) => {
          let counter = 0
          for (i in charArray) {
              if (char === charArray[i]){
                  counter+=1
              }
          }
          return counter>1?")":"("
      }
      answerArray=charArray.map(mapFunction)
      return answerArray
}