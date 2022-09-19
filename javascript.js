 //add (addEventListener to the "+" button, on "click" run this function:)
 function add(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
  }
  //substract
  function substract(...args) {
    let total = 0;
    for (let i=0;i<args.length;i++) {
      if (i === 0) {
        total = args[i];
      } else {
      total -= args[i];
      }
    }
    return total;
  }
  //multiply
  function multiply(...args) {
    let total = 0;
    for (i=0;i<args.length;i++){
      if ((i+1)>=args.length) {
        break;
      }
      if (i==0) { 
        total += args[i]*args[i+1];
      }else {
        total = total*args[i+1];
      }
    }
    return total;
  };
  //divide
  function divide(...args) {
      let total = 0;
    for (i=0;i<args.length;i++){
      if ((i+1)>=args.length) {
        break;
      }
      if (i==0) { 
        total += args[i]/args[i+1];
      }else {
        total = total/args[i+1];
      }
    }
    return total;
  };

  function operate(operator, num1, num2) {
    if (operator === '+') {
      return add(num1,num2);
    } else if (operator === '-') {
      return substract(num1,num2);
    } else if (operator === '*') {
      return multiply(num1,num2);
    } else if (operator === '/') {
      return divide(num1,num2);
    }
  }
  console.log();