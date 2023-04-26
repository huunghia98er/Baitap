var num = document.getElementById('year');
var result = document.getElementById('result');

function check() {
  if (num.value % 4 === 0 || (num.value % 100 === 0 && num.value % 400 === 0)){
    result.innerHTML = "Nam da nhap la nam nhuan";
    num.value = "";
  }
  else {
    result.innerHTML = "Nam da nhap khong phai nam nhuan";
    num.value = "";
  }
}