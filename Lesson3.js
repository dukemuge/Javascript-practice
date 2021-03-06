//Testing using  eslint
const sample = function(number) {
    factor = 4;
    
    if(number == 2) {
     return
    number * factor;
    }
    
    return number * 10;
    };
    
console.log(sample(2));

//Output Lint error
/*

1:1 error Use the global form of 'use strict' strict
2:3 error 'factor' is not defined no-undef
4:13 error Expected '===' and instead saw '==' eqeqeq
5:11 error Missing semicolon semi
6:1 error Expected indentation of 4 spaces but found 6 indent
6:7 error Unreachable code no-unreachable
6:16 error 'factor' is not defined no-undef
✖ 7 problems (7 errors, 0 warnings)
2 errors, 0 warnings potentially fixable with the `--fix` option.

*/

//Refactored output for the Lint
'use strict'
const refactoredFunc = function(number){
    const no =   4;
    if (number  ===  4) {
        return(number * no);
        
    }

    return  (number * 5);

}

console.log(refactoredFunc(6));
console.log(refactoredFunc(4));

