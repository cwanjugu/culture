function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
  function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var phil = new Date();
    phil.setDate(parseInt(day));
    phil.setMonth(parseInt(Month)-1);
    phil.setFullYear(parseInt(year));
    var p = phil.getDay();
    if(p===0){
        alert("Sunday");
    }else if(p===1){
        alert("Monday");
    }else if(p===2){
        alert("Tuesday");
    }else if(p===3){
        alert("Wednesday");
    }else if(p===4){
        alert("Thursday");
    }else if(p===5){
        alert("Friday");
    }else if(p===6){
        alert("Saturday");
    }
    if(year==""||year>2056){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid month");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleName[p]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is " + femaleName[p]);
    }
}
