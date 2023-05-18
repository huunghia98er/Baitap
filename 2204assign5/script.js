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
      abc = "0";
      result.innerHTML = abc;
    }
    else if (e.target.innerHTML == "DEL"){
      abc = abc.substring(0, abc.length-1);
      if (abc == '') abc = '0';
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
      if (abc == '0') abc = '';
      abc += e.target.innerHTML;
      if (abc.length === 18){
        abc = 'Loi qua ky tu!'
      }
      result.innerHTML = abc;
    }
  })
})