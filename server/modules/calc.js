let userInput;
let result;
let selectedOp;

// console.log('calc.js userInput:', currentInput);

console.log('calc.js userInput:', userInput);

function doMath(){
    if(selectedOp == 'add'){
        result = Number(userInput.firstOperand) + Number(userInput.secondOperand);
    } else if(selectedOp == 'subtract'){
        result = Number(userInput.firstOperand) - Number(userInput.secondOperand);
    } else if(selectedOp == 'multiply'){
        result = Number(userInput.firstOperand) * Number(userInput.secondOperand);
    } else if(selectedOp == 'divide'){
        result = Number(userInput.firstOperand) / Number(userInput.secondOperand);
    }
    console.log('calc.js result:', result);
    return result;
}
doMath();


let testExport = 'TEST EXPORT';

module.exports = testExport;

// export whole new object that includes result?
//    or object AND result?