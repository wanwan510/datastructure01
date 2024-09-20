var weight=50;
var height=160;
var bmi=weight/((height/100)**2);

console.log("Hello!Your BMI value is"+ bmi)

function calcBMI(){
    //var weight=50;
    var height=
    Number(document.getElementsById("height").value);
    var weight=
    document.getElementById("weight").value;
    var bmi=weight/((height/100)**2);
    document.getElementById("bmi").innerHTML=bmi;
    console.log("Hello, Your BMI is:" + bmi);
}
IPO