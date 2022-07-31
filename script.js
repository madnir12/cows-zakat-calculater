function cowsCounter(){
    let cows = document.getElementById("cows").value;
    let tabi = 0;
    let musin = 0;
    let show = "";
    

if(cows < 30){
    show = "there is no zakat on this amount of cows";

} else if (cows >= 30 && cows < 40) {
    tabi++;

} else if (cows >= 40 && cows < 60) {
    musin++;
} else if(cows == 60) {
    tabi = 2;
} else if (cows%40 == 0){
    let tadad = cows/40;
    musin = tadad;
} else if (cows%40 !=0){
    if(cows%30 ==0){
        tadad = cows/30;
        tabi = tadad;

    } else if(cows%40 ==30){
        let temptd = cows-30;
        tadad = temptd/40;
        musin = tadad;
        tabi++; 
    }
    else if(cows%40 ==10){
        let md = cows%40;
        let amt = cows -md;
        let temptadad = amt/40;
         let tempmusin =temptadad -2;
        musin = tempmusin;
        tabi = 3;
    }else if(cows%40 < 10){
        md = cows%40;
        amt = cows-md;
        tadad = amt/40;
        musin = tadad;
    }else if(cows%30 ==10){
        md = cows%40;
        amt = cows -md;
        temptadad = amt/40;
        tempmusin = temptadad -1;
        musin = tempmusin;
        tabi = 2;
    }else if(cows%30 < 20){
        md = cows%30;
        amt = cows -md;
        temptadad = amt/30;
        tabi = temptadad;
    }else if(cows%40 < 30){
        md = cows%40;
        amt = cows -md;
        temptadad = amt/40;
        musin = temptadad;  
    }else if(cows%40 > 30 && cows%40 <40){
      md = cows%40;
      amt = cows -md;
      temptadad = amt/40;
      musin = temptadad;
      tabi++;  
  }


}
document.getElementById("tabih2").innerText = tabi;
document.getElementById("musinh2").innerText = musin;
musin = 0;
tabi = 0;

}