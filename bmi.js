 //var weight=50;
//var height=160;
//var bmi=weight/((height/100)**2);

//console.log("Hello!Your BMI value is"+ bmi)

function calcBMI() {
    //var weight=50;
    var height=
    Number(document.getElementById("height").value);
    var weight=
    document.getElementById("weight").value;
    var BMI=weight/((height/100)**2);
    document.getElementById("BMI").innerHTML=BMI;
    console.log("Hello, Your BMI is:" + BMI);
}
