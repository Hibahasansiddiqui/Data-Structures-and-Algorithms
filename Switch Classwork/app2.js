//Consider the situation in which you are required to check
//if a number is 1 or 0. If it's 1 you need to print true. 
//Otherwise, you should print false. Do it with Switch method

let num = 1

switch (num) {
    case 0:
        console.log('true')
        break;
    case 1:
        console.log('false')
        break;
    default:
        console.log('Not applicable')
        break;
}