function gettime() {
    setInterval(CMastime, 1000);
    clearInterval(setInterval(CMastime));
}

function CMastime() {
    const today = new Date();
    const oneday = 24*60*60*1000;
    var CMdate = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() === CMdate.getMonth() && today.getDate() > CMdate.getDate()){
        CMdate.getFullYear += 1;
    }
    let dayleft = Math.floor((CMdate.getTime() - today.getTime()) / oneday);
    var a = (CMdate.getTime() - today.getTime()) % oneday;

    let hoursleft = Math.floor(a / 3600000);
    a = a%3600000

    let minutesleft = Math.floor(a / 60000);
    a = a%60000

    let secondsleft = Math.floor(a / 1000);

    document.getElementById('result').innerHTML = 
    "Thoi gian con lai den Giang Sinh la: "
    + dayleft +" ngay " 
    + hoursleft + " gio " 
    + minutesleft + " phut " 
    + secondsleft + " giay!";
}