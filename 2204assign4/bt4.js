function gettime() {
  setInterval(timevalue,1000);
  clearInterval(setInterval(timevalue));
}


function timevalue () {
  const d = new Date();
  var timenow = document.querySelector(".result"); 
  
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h < 10 ? "0"+h : h;
  m = m < 10 ? "0"+m : m;
  s = s < 10 ? "0"+s : s;

  timenow.innerHTML = `${h} : ${m} : ${s} ${ampm}`
}