var readline = require("readline-sync")
//input weight
var weight=readline.questionInt('Please input ur weight(KG)?');
var height=readline.questionInt('Please input ur height(CM)?');
var BMI=weight/((height/100)**2);
 //document.getElementById("BMI").innerHTML=BMI;
console.log("Hello, Your BMI is:" + BMI);

switch(True){
    case BMI<18.5:
        Cout <<"體重過輕" << end1;
        break;
    case 18.5<=BMI<24:
        cout <<"健康體位" << end1;
        break;
    case 24<=BMI<27:
        cout <<"過重" << end1;
        break;
    case 27<=BMI<30:
        cout <<"輕度肥胖" << end1;
        break;
    case 30<=BMI<35:
        cout <<"中度肥胖" << end1;
        break;
    case BMI>=35:
        cout <<"重度肥胖" << end1;   
        break;

}