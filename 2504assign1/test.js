function getage() {
    var d = new Date()
    var by = document.getElementById("a").value;
    var year = d.getFullYear();
    var result = year - by;
    console.log(by)
    document.getElementById("result1").innerHTML = 
    "So tuoi cua ban la: "+result;
}