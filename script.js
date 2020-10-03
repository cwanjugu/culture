function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
  function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var carol = new Date();
    carol.setDate(parseInt(day));
    carol.setMonth(parseInt(Month)-1);
    carol.setFullYear(parseInt(year));
    var c = carol.getDay();
    if(c===0){
        ("Sunday");
    }else if(c===1){
        ("Monday");
    }else if(c===2){
        ("Tuesday");
    }else if(c===3){
        ("Wednesday");
    }else if(c===4){
        ("Thursday");
    }else if(c===5){
        ("Friday");
    }else if(c===6){
       alert("Saturday");
    }
    if(year==""||year>2030){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid date");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleName[c]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is " + femaleName[c]);
    }
}
