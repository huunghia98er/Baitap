function getage() {
    var d = new Date()
    var by = document.getElementById("a").value;
    var year = d.getFullYear();
    var result = year - by;
    var abc = document.getElementById('result1');
    var xyz = document.getElementById("result1")


    if (by > year){
        alert
        ("Nam sinh ban nhap lon hon nam hien tai!");
        xyz.value = "";
    }
    else {
        abc.innerHTML = 
        "So tuoi cua ban la: "+result;
    }
}