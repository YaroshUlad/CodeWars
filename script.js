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
        return summa === m ? n : summa > m ? -1
    }
}

/*Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present 
in list b keeping their order.*/

function arrayDiff(a, b) {
  
}