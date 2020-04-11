const sliderDice = document.querySelector(".sliderDice");
const sliderFace = document.querySelector(".sliderFace");

var randomDice = 0;
var i = 0;
var nbThrow = 0;
var randomArray = [];
var totalAverage = 0;
var saveAverage = 0;

var e = 0;
var dispDice = "";
// for me all these variables are necessary, but I must do it wrong

function myRandom() {
    // if (sliderDice.value == 1) {
    //     document.querySelector(".oneDie").play(); 
    // } else {
    //     document.querySelector(".manyDice").play();
    // }

    // functionality turned off because the launch delay did not satisfy me
    // And I did not have time to make the mute button (as well as the night mode) :(
    while (i < sliderDice.value) {        
        randomDice = (Math.floor(Math.random() * sliderFace.value)) + 1;
        randomArray.push(randomDice);
        i++;
    }    
    nbThrow = nbThrow + 1;
    document.querySelector(".nbThrow").innerHTML = nbThrow;
    i = 0;
    numbers = randomArray;
    while (e < numbers.length) {  
        dispDice = dispDice + numbers[e] + " ";
        document.querySelector(".dice").innerHTML = dispDice ;
        e++   
    }
    e = 0;
    dispDice = "";    
    const sum = numbers.reduce((total, amount) => total + amount);
    document.querySelector(".sum").innerHTML = sum;
    const average = Math.round(sum / numbers.length * 100) / 100;
    document.querySelector(".average").innerHTML = average;
    saveAverage = saveAverage + average;
    totalAverage = Math.round(saveAverage / nbThrow * 100) / 100;
    document.querySelector(".totalAverage").innerHTML = totalAverage;
    document.querySelector(".overlay").innerHTML = sum;
    placeDice(randomArray);
    countDice(randomArray);
    randomArray = [];
    
}

function placeDice(randomArray){
    const path1 = "images/D";
    const path2 = ".svg";
    document.querySelector(".place1mod").src = "";   
    document.querySelector(".place2mod").src = "";   
    document.querySelector(".place3mod").src = "";   
    document.querySelector(".place1").src = "";   
    document.querySelector(".place2").src = "";   
    document.querySelector(".place3").src = "";   
    document.querySelector(".place4").src = "";   
    document.querySelector(".place5").src = "";   
    document.querySelector(".place6").src = "";   
    document.querySelector(".place7").src = "";             
    document.querySelector(".place8").src = "";   
    document.querySelector(".place9").src = "";  
    if (randomArray.length == 1) {
        document.querySelector(".place1mod").src = path1 + randomArray[0] + path2;        
      } else if (randomArray.length == 2) {
        document.querySelector(".place2mod").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place3mod").src = path1 + randomArray[1] + path2;            
      } else if (randomArray.length == 3) {
        document.querySelector(".place4").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place5").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place6").src = path1 + randomArray[2] + path2;             
      } else if (randomArray.length == 4) {
        document.querySelector(".place2").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place4").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place6").src = path1 + randomArray[2] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[3] + path2;             
      } else if (randomArray.length == 5) {
        document.querySelector(".place2").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place4").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place5").src = path1 + randomArray[2] + path2;   
        document.querySelector(".place6").src = path1 + randomArray[3] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[4] + path2;             
      } else if (randomArray.length == 6) {
        document.querySelector(".place1").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place2").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place3").src = path1 + randomArray[2] + path2;   
        document.querySelector(".place7").src = path1 + randomArray[3] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[4] + path2;   
        document.querySelector(".place9").src = path1 + randomArray[5] + path2;             
      } else if (randomArray.length == 7) {
        document.querySelector(".place1").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place2").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place3").src = path1 + randomArray[2] + path2;   
        document.querySelector(".place5").src = path1 + randomArray[3] + path2;   
        document.querySelector(".place7").src = path1 + randomArray[4] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[5] + path2;   
        document.querySelector(".place9").src = path1 + randomArray[6] + path2;             
      } else if (randomArray.length == 8) {
        document.querySelector(".place1").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place2").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place3").src = path1 + randomArray[2] + path2;   
        document.querySelector(".place4").src = path1 + randomArray[3] + path2;   
        document.querySelector(".place6").src = path1 + randomArray[4] + path2;   
        document.querySelector(".place7").src = path1 + randomArray[5] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[6] + path2;   
        document.querySelector(".place9").src = path1 + randomArray[7] + path2;             
      } else {
        document.querySelector(".place1").src = path1 + randomArray[0] + path2;   
        document.querySelector(".place2").src = path1 + randomArray[1] + path2;   
        document.querySelector(".place3").src = path1 + randomArray[2] + path2;   
        document.querySelector(".place4").src = path1 + randomArray[3] + path2;   
        document.querySelector(".place5").src = path1 + randomArray[4] + path2;   
        document.querySelector(".place6").src = path1 + randomArray[5] + path2;   
        document.querySelector(".place7").src = path1 + randomArray[6] + path2;             
        document.querySelector(".place8").src = path1 + randomArray[7] + path2;   
        document.querySelector(".place9").src = path1 + randomArray[8] + path2;  
      }
    
}

var countD1 = 0;
var countD2 = 0;
var countD3 = 0;
var countD4 = 0;
var countD5 = 0;
var countD6 = 0;
var countD7 = 0;
var countD8 = 0;
var countD9 = 0;
var countTotal = 0;

function countDice(randomArray){
    countTotal = countTotal + randomArray.length;
       
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 1)
        countD1++;
    }
    document.querySelector(".percentD1").innerHTML = Math.round((countD1 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD1").innerHTML = countD1;    
    document.querySelector(".blueBar1").style.height = 2.4* Math.round((countD1 /countTotal * 100) * 10) / 10 + "px"; 
    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 2)
        countD2++;
    }
    document.querySelector(".percentD2").innerHTML = Math.round((countD2 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD2").innerHTML = countD2;
    document.querySelector(".blueBar2").style.height = 2.4* Math.round((countD2 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 3)
        countD3++;
    }
    document.querySelector(".percentD3").innerHTML = Math.round((countD3 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD3").innerHTML = countD3;
    document.querySelector(".blueBar3").style.height = 2.4* Math.round((countD3 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 4)
        countD4++;
    }
    document.querySelector(".percentD4").innerHTML = Math.round((countD4 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD4").innerHTML = countD4;
    document.querySelector(".blueBar4").style.height = 2.4* Math.round((countD4 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 5)
        countD5++;
    }
    document.querySelector(".percentD5").innerHTML = Math.round((countD5 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD5").innerHTML = countD5;
    document.querySelector(".blueBar5").style.height = 2.4* Math.round((countD5 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 6)
        countD6++;
    }
    document.querySelector(".percentD6").innerHTML = Math.round((countD6 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD6").innerHTML = countD6;
    document.querySelector(".blueBar6").style.height = 2.4* Math.round((countD6 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 7)
        countD7++;
    }
    document.querySelector(".percentD7").innerHTML = Math.round((countD7 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD7").innerHTML = countD7;
    document.querySelector(".blueBar7").style.height = 2.4* Math.round((countD7 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 8)
        countD8++;
    }
    document.querySelector(".percentD8").innerHTML = Math.round((countD8 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD8").innerHTML = countD8;
    document.querySelector(".blueBar8").style.height = 2.4* Math.round((countD8 /countTotal * 100) * 10) / 10 + "px"; 

    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 9)
        countD9++;
    }
    document.querySelector(".percentD9").innerHTML = Math.round((countD9 /countTotal * 100) * 10) / 10;
    document.querySelector(".countD9").innerHTML = countD9;
    document.querySelector(".blueBar9").style.height = 2.4* Math.round((countD9 /countTotal * 100) * 10) / 10 + "px"; 

}



function resetButton() {
    randomDice = 0;
    i = 0;
    nbThrow = 0;
    randomArray = [];
    saveAverage = 0;
    totalAverage = 0;
    document.querySelector(".dice").innerHTML = "~";
    document.querySelector(".sum").innerHTML = "~";
    document.querySelector(".average").innerHTML = "~";
    document.querySelector(".nbThrow").innerHTML = "~";
    document.querySelector(".totalAverage").innerHTML = "~";
    document.querySelector(".overlay").innerHTML = "";

    countD1 = 0;
    countD2 = 0;
    countD3 = 0;
    countD4 = 0;
    countD5 = 0;
    countD6 = 0;
    countD7 = 0;
    countD8 = 0;
    countD9 = 0;
    countTotal = 0;
    document.querySelector(".percentD1").innerHTML = "";
    document.querySelector(".countD1").innerHTML = "~"; 
    document.querySelector(".blueBar1").style.height = "0px"; 
    document.querySelector(".percentD2").innerHTML = "";
    document.querySelector(".countD2").innerHTML = "~";
    document.querySelector(".blueBar2").style.height = "0px"; 
    document.querySelector(".percentD3").innerHTML = "";
    document.querySelector(".countD3").innerHTML = "~";
    document.querySelector(".blueBar3").style.height = "0px"; 
    document.querySelector(".percentD4").innerHTML = "";
    document.querySelector(".countD4").innerHTML = "~";
    document.querySelector(".blueBar4").style.height = "0px"; 
    document.querySelector(".percentD5").innerHTML = "";
    document.querySelector(".countD5").innerHTML = "~";
    document.querySelector(".blueBar5").style.height = "0px"; 
    document.querySelector(".percentD6").innerHTML = "";
    document.querySelector(".countD6").innerHTML = "~";
    document.querySelector(".blueBar6").style.height = "0px"; 
    document.querySelector(".percentD7").innerHTML = "";
    document.querySelector(".countD7").innerHTML = "~";
    document.querySelector(".blueBar7").style.height = "0px"; 
    document.querySelector(".percentD8").innerHTML = "";
    document.querySelector(".countD8").innerHTML = "~";
    document.querySelector(".blueBar8").style.height = "0px"; 
    document.querySelector(".percentD9").innerHTML = "";
    document.querySelector(".countD9").innerHTML = "~";
    document.querySelector(".blueBar9").style.height = "0px"; 

    document.querySelector(".place1mod").src = "";   
    document.querySelector(".place2mod").src = "";   
    document.querySelector(".place3mod").src = "";   
    document.querySelector(".place1").src = "";   
    document.querySelector(".place2").src = "";   
    document.querySelector(".place3").src = "";   
    document.querySelector(".place4").src = "";   
    document.querySelector(".place5").src = "";   
    document.querySelector(".place6").src = "";   
    document.querySelector(".place7").src = "";             
    document.querySelector(".place8").src = "";   
    document.querySelector(".place9").src = "";  
}


