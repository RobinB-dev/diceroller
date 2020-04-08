const sliderDice = document.querySelector('.sliderDice');
const sliderFace = document.querySelector('.sliderFace');
// const outputFace = document.querySelector('.outputFace');
// outputFace.innerHTML = sliderFace.value;

// addEventListener('input', function() {    
//     outputFace.innerHTML = sliderFace.value;
// })

var randomDice = 0;
var i = 0;
var nbThrow = 0;
var randomArray = [];
var totalAverage = 0;
var saveAverage = 0;

var e = 0;
var gg = "";

function myRandom() {
    while (i < sliderDice.value) {        
        const randomDice = (Math.floor(Math.random() * sliderFace.value)) + 1;
        randomArray.push(randomDice);
        // console.log(randomArray);        
        i++        
    }    
    nbThrow = nbThrow + 1;
    document.getElementById('nbThrow').innerHTML = nbThrow    
    i = 0
    numbers = randomArray;    
    // document.getElementById('D1').innerHTML = numbers[0]    
    while (e < numbers.length) {  
        gg = gg + numbers[e] + " ";
        document.getElementById("dice").innerHTML = gg ;
        e++   
    }
    e = 0
    gg = "";
    var sum = numbers.reduce(myFunc);
    document.getElementById("sum").innerHTML = sum;
    var average = Math.round(sum / numbers.length * 100) / 100;
    document.getElementById("average").innerHTML = average;
    saveAverage = saveAverage + average;
    totalAverage = Math.round(saveAverage / nbThrow * 100) / 100;
    document.getElementById("totalAverage").innerHTML = totalAverage;
    function myFunc(total, num) {
        return total + num;
    }
    placeDice(randomArray);
    countDice(randomArray);
    randomArray = [];
    
}

function placeDice(randomArray){
    console.log(randomArray);    
    console.log(randomArray[0])
    var path1 = "images/D";
    var path2 = ".svg";
    document.getElementById("place1").src = "";   
    document.getElementById("place2").src = "";   
    document.getElementById("place3").src = "";   
    document.getElementById("place4").src = "";   
    document.getElementById("place5").src = "";   
    document.getElementById("place6").src = "";   
    document.getElementById("place7").src = "";             
    document.getElementById("place8").src = "";   
    document.getElementById("place9").src = "";  
    if (randomArray.length == 1) {
        document.getElementById("place5").src = path1 + randomArray[0] + path2;        
      } else if (randomArray.length == 2) {
        document.getElementById("place4").src = path1 + randomArray[0] + path2;   
        document.getElementById("place6").src = path1 + randomArray[1] + path2;            
      } else if (randomArray.length == 3) {
        document.getElementById("place4").src = path1 + randomArray[0] + path2;   
        document.getElementById("place5").src = path1 + randomArray[1] + path2;   
        document.getElementById("place6").src = path1 + randomArray[2] + path2;             
      } else if (randomArray.length == 4) {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place3").src = path1 + randomArray[1] + path2;   
        document.getElementById("place7").src = path1 + randomArray[2] + path2;             
        document.getElementById("place9").src = path1 + randomArray[3] + path2;             
      } else if (randomArray.length == 5) {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place3").src = path1 + randomArray[1] + path2;   
        document.getElementById("place5").src = path1 + randomArray[2] + path2;   
        document.getElementById("place7").src = path1 + randomArray[3] + path2;             
        document.getElementById("place9").src = path1 + randomArray[4] + path2;             
      } else if (randomArray.length == 6) {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place2").src = path1 + randomArray[1] + path2;   
        document.getElementById("place3").src = path1 + randomArray[2] + path2;   
        document.getElementById("place7").src = path1 + randomArray[3] + path2;             
        document.getElementById("place8").src = path1 + randomArray[4] + path2;   
        document.getElementById("place9").src = path1 + randomArray[5] + path2;             
      } else if (randomArray.length == 7) {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place2").src = path1 + randomArray[1] + path2;   
        document.getElementById("place3").src = path1 + randomArray[2] + path2;   
        document.getElementById("place5").src = path1 + randomArray[3] + path2;   
        document.getElementById("place7").src = path1 + randomArray[4] + path2;             
        document.getElementById("place8").src = path1 + randomArray[5] + path2;   
        document.getElementById("place9").src = path1 + randomArray[6] + path2;             
      } else if (randomArray.length == 8) {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place2").src = path1 + randomArray[1] + path2;   
        document.getElementById("place3").src = path1 + randomArray[2] + path2;   
        document.getElementById("place4").src = path1 + randomArray[3] + path2;   
        document.getElementById("place6").src = path1 + randomArray[4] + path2;   
        document.getElementById("place7").src = path1 + randomArray[5] + path2;             
        document.getElementById("place8").src = path1 + randomArray[6] + path2;   
        document.getElementById("place9").src = path1 + randomArray[7] + path2;             
      } else {
        document.getElementById("place1").src = path1 + randomArray[0] + path2;   
        document.getElementById("place2").src = path1 + randomArray[1] + path2;   
        document.getElementById("place3").src = path1 + randomArray[2] + path2;   
        document.getElementById("place4").src = path1 + randomArray[3] + path2;   
        document.getElementById("place5").src = path1 + randomArray[4] + path2;   
        document.getElementById("place6").src = path1 + randomArray[5] + path2;   
        document.getElementById("place7").src = path1 + randomArray[6] + path2;             
        document.getElementById("place8").src = path1 + randomArray[7] + path2;   
        document.getElementById("place9").src = path1 + randomArray[8] + path2;  
      }
    
}

var countD1 = 0
var countD2 = 0
var countD3 = 0
var countD4 = 0
var countD5 = 0
var countD6 = 0
var countD7 = 0
var countD8 = 0
var countD9 = 0
var countTotal = 0

function countDice(randomArray){
    countTotal = countTotal + randomArray.length
       
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 1)
        countD1++;
    }
    document.getElementById("percentD1").innerHTML = Math.round((countD1 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD1").innerHTML = countD1;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 2)
        countD2++;
    }
    document.getElementById("percentD2").innerHTML = Math.round((countD2 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD2").innerHTML = countD2;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 3)
        countD3++;
    }
    document.getElementById("percentD3").innerHTML = Math.round((countD3 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD3").innerHTML = countD3;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 4)
        countD4++;
    }
    document.getElementById("percentD4").innerHTML = Math.round((countD4 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD4").innerHTML = countD4;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 5)
        countD5++;
    }
    document.getElementById("percentD5").innerHTML = Math.round((countD5 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD5").innerHTML = countD5;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 6)
        countD6++;
    }
    document.getElementById("percentD6").innerHTML = Math.round((countD6 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD6").innerHTML = countD6;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 7)
        countD7++;
    }
    document.getElementById("percentD7").innerHTML = Math.round((countD7 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD7").innerHTML = countD7;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 8)
        countD8++;
    }
    document.getElementById("percentD8").innerHTML = Math.round((countD8 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD8").innerHTML = countD8;    
    for(var i = 0; i < randomArray.length; ++i){
        if(randomArray[i] == 9)
        countD9++;
    }
    document.getElementById("percentD9").innerHTML = Math.round((countD9 /countTotal * 100) * 10) / 10 + "%";
    document.getElementById("countD9").innerHTML = countD9;    
}



function resetButton() {
    randomDice = 0;
    i = 0;
    nbThrow = 0;
    randomArray = [];
    saveAverage = 0;
    totalAverage = 0;
    document.getElementById("dice").innerHTML = '~';
    document.getElementById("sum").innerHTML = '~';
    document.getElementById("average").innerHTML = '~';
    document.getElementById("nbThrow").innerHTML = '~';
    document.getElementById("totalAverage").innerHTML = '~';

    countD1 = 0
    countD2 = 0
    countD3 = 0
    countD4 = 0
    countD5 = 0
    countD6 = 0
    countD7 = 0
    countD8 = 0
    countD9 = 0
    countTotal = 0
    document.getElementById("percentD1").innerHTML = "~";
    document.getElementById("countD1").innerHTML = "~"; 
    document.getElementById("percentD2").innerHTML = "~";
    document.getElementById("countD2").innerHTML = "~"; 
    document.getElementById("percentD3").innerHTML = "~";
    document.getElementById("countD3").innerHTML = "~"; 
    document.getElementById("percentD4").innerHTML = "~";
    document.getElementById("countD4").innerHTML = "~"; 
    document.getElementById("percentD5").innerHTML = "~";
    document.getElementById("countD5").innerHTML = "~"; 
    document.getElementById("percentD6").innerHTML = "~";
    document.getElementById("countD6").innerHTML = "~"; 
    document.getElementById("percentD7").innerHTML = "~";
    document.getElementById("countD7").innerHTML = "~"; 
    document.getElementById("percentD8").innerHTML = "~";
    document.getElementById("countD8").innerHTML = "~"; 
    document.getElementById("percentD9").innerHTML = "~";
    document.getElementById("countD9").innerHTML = "~"; 
}



// var arr1 = ['a','b','c','d','e','f'];
// var arr2 = arr1;  // Reference arr1 by another variable 
// arr1 = [];
// console.log(arr1); // Output ['a','b','c','d','e','f']
// console.log(arr2);

// const foo = [2, 3, 5, 8]
// var e = 0;
// var gg = "";

// while (e < foo.length) {  
//     gg = gg + foo[e] + " - ";
//     console.log(gg);
    
//     document.getElementById("ff").innerHTML = gg ;
//     e++   
// }


// path = 'images/';
// var img = randomDice;
// var imgStr = '<img src="' + path + 'D' + img + '.svg' ;
// console.log(imgStr);
