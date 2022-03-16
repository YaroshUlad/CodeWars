/*________ CODEWARS__________ */
/*
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the 
exponent ranging from 0 to n ( inclusive ).*/

const powersOfTwo = (n) => {
    const list = []
    for(var i =0; i<=n; i++){
        list[i]=Math.pow(2,i)
    }
    return(
        list
    )
}

