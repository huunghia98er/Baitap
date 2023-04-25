setInterval(gettime, 1000);

function gettime () {
  const d = new Date();
  var timenow = document.getElementById("result");
  var h = d.getHours();
  var ampm = h >= 12 ? 'PM' : 'AM'; 
  timenow.innerHTML = d.toLocaleTimeString() + ` ${ampm}`
}