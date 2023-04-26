let result = document.getElementById('result');
let buttons = document.querySelectorAll
('button');
let abc = "";
let arr = Array.from(buttons);
arr.forEach( button => {
  button.addEventListener('click', (e) => {
    if ( e.target.innerHTML == "="){
      abc = eval(abc);
      result.innerHTML = abc;
    }
    else if (e.target.innerHTML == "AC"){
      abc = "";
      result.innerHTML = abc;
    }
    else if (e.target.innerHTML == "DEL"){
      abc = abc.substring(0, abc.length-1);
      result.innerHTML = abc;
    }
    else if (e.target.innerHTML == "+/-"){
      abc = -abc;
      result.innerHTML = abc;
    }
    else if (e.target.innerHTML == "%"){
      abc /= 100;
      result.innerHTML = abc;
    }
    else {
      abc += e.target.innerHTML;
      result.innerHTML = abc;
    }
  })
})