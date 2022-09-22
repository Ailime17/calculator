 //add 
 function add(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
  };
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
  };
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
  };

  //add click sound to all buttons
  let audio = document.querySelector("audio");
  function playSound() {
    audio.playbackRate = 3;
    audio.currentTime = 0;
    audio.play();
  };
  let buttons = document.querySelectorAll("button");
  Array.from(buttons).forEach(button => button.addEventListener("mousedown", () => {
        if (button.getAttribute("class").includes("wrong")) {
            return;
        }
        playSound();
    }));

  let display = document.querySelector(".display");
  //clear display:
  let clearbtn = document.querySelector(".clear");
  clearbtn.addEventListener("click", () => {
    display.textContent = 0;
  });

  //click and display numbers:
  let numberbtns = document.querySelectorAll(".number");
  Array.from(numberbtns).forEach(numberbtn => numberbtn.addEventListener("click", () =>{
    if (display.textContent === "0" || 0) {
        display.textContent = "";
    }
    if (display.textContent.length === 11) {
        return;
    }
    display.textContent += numberbtn.textContent;
  }));
    Array.from(numberbtns).forEach(numberbtn => numberbtn.addEventListener("mousedown", () => {
        if (display.textContent.length === 10) {
                numberbtn.classList.add("wrong");
        }
    }));
    Array.from(numberbtns).forEach(numberbtn => numberbtn.addEventListener("mouseover", () => {
        if (display.textContent.length === 11) {
                numberbtn.classList.add("wrong");
                return;
        }
        numberbtn.classList.remove("wrong");
    }));



    //some keyboard support (for the numbers):
    function digits(x) {
      let digit;
      for (i=0;i<=9;i++) {
        digit = `Digit${i}`
        if (x.code !== digit) {
          continue;
        } else {
        if (display.textContent === "0" || 0) {
          display.textContent = "";
        }
        if (display.textContent.length === 11) {
            return;
        } 
        display.textContent += x.key;
      }
      }
    };
    document.addEventListener("keypress", (e) => {
      digits(e);
    });


  //backspace display:
  let backspacebtn = document.querySelector(".backspace");
  backspacebtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
    if (display.textContent === "") {
        display.textContent = 0;
    }
  });


  function check() {
    if (display.textContent.includes("+") ||
    display.textContent.slice(1).includes("-") ||
    display.textContent.includes("*") ||
    display.textContent.includes("/")){
        return true;
    }
  };

  //add decimal to the display:
  let decimalbtn = document.querySelector(".decimal");
  decimalbtn.addEventListener("click", () => {
    if (display.textContent.includes(".") || display.textContent.length === 11) {
        return;
    }
    display.textContent += decimalbtn.textContent;
  });
  decimalbtn.addEventListener("mouseover", () => {
    if (display.textContent.includes(".") || display.textContent.length === 11) {
            decimalbtn.classList.add("wrong");
            return;
    }
    decimalbtn.classList.remove("wrong");
  });

  //add operation:
  let plusbtn = document.querySelector(".plus");
  plusbtn.addEventListener("click", () => {
    if (check() || display.textContent.length === 11) {
        return;
    }
    display.textContent += plusbtn.textContent;
  });
  plusbtn.addEventListener("mouseover", () => {
    if (check() || display.textContent.length === 11) {
            plusbtn.classList.add("wrong");
            return;
    }
    plusbtn.classList.remove("wrong");
  });

  //substract operation:
  let minusbtn = document.querySelector(".minus");
  minusbtn.addEventListener("click", () => {
    if (check() || display.textContent.length === 11) {
            return;
    }
    display.textContent += minusbtn.textContent;
  });
  minusbtn.addEventListener("mouseover", () => {
    if (check() || display.textContent.length === 11) {
            minusbtn.classList.add("wrong");
            return;
    }
    minusbtn.classList.remove("wrong");
  });

  //multiply operation:
  let multiplybtn = document.querySelector(".multiply");
  multiplybtn.addEventListener("click", () => {
    if (check() || display.textContent.length === 11) {
            return;
    }
    display.textContent += '*';
  });
  multiplybtn.addEventListener("mouseover", () => {
    if (check() || display.textContent.length === 11) {
            multiplybtn.classList.add("wrong");
            return;
    }
    multiplybtn.classList.remove("wrong");
  });

  //divide operation:
  let dividebtn = document.querySelector(".divide");
  dividebtn.addEventListener("click", () => {
    if (check() || display.textContent.length === 11) {
            return;
    }
    display.textContent += '/';
  });
  dividebtn.addEventListener("mouseover", () => {
    if (check() || display.textContent.length === 11) {
            dividebtn.classList.add("wrong");
            return;
    }
    dividebtn.classList.remove("wrong");
  });

  //equals operation:
let equalsbtn = document.querySelector(".equals");
  equalsbtn.addEventListener("click", () => {
    if (display.textContent.at(-1) === ("+") ||
    display.textContent.at(-1) === ("-") ||
    display.textContent.at(-1) === ("*") ||
    display.textContent.at(-1) === ("/") ||
    display.textContent.at(-1) === (".") ||
    (!(display.textContent.slice(1).includes("-")) &&
    !(display.textContent.includes("+")) &&
    !(display.textContent.includes("*")) &&
    !(display.textContent.includes("/")))) {
        return;
    }
    let num1and2;
    let myOperator;
    if (display.textContent.includes("+")) {
        myOperator = "+";
        num1and2 = display.textContent.split("+");

    } else if (display.textContent.charAt(0) === "-" && display.textContent.slice(1).includes("-")) {
        myOperator = "-";
        num1and2 = display.textContent.split("-");
        num1and2[0] = `-${num1and2[1]}`;
        num1and2[1] = num1and2[2];
    } else if (display.textContent.slice(1).includes("-") && !(display.textContent.charAt(0) === "-")) {
        myOperator = "-";
        num1and2 = display.textContent.split("-");

    } else if (display.textContent.includes("*")) {
        myOperator = "*";
        num1and2 = display.textContent.split("*");
    } else if (display.textContent.includes("/")) {
        myOperator = "/";
        num1and2 = display.textContent.split("/");
        if (num1and2[1] === '0') {
            alert("Oops! You tried to divide by 0! Don't worry, I'm a computer, I won't tell your maths teacher! :)");
            return;
        }
    }
    let number1 = Number(num1and2[0]);
    let number2 = Number(num1and2[1]);
    let result = operate(myOperator, number1, number2);
    display.textContent = result;
    display.textContent = Math.round(Number(display.textContent) * 100) / 100;
  });
