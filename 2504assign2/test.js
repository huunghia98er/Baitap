function getage() {
    var d = new Date()
    var by = document.getElementById("a");
    var year = d.getFullYear();
    var result = year - by.value;
    var abc = document.getElementById('result1');


    if (by.value > year) {
        alert
            ("Nam sinh ban nhap lon hon nam hien tai!");
        abc.innerHTML = "";
        by.value = "";
    }
    else {
        abc.innerHTML =
            "So tuoi cua ban la: " + result;
    }
}