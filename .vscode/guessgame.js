var readline = require("readline-sync");
var ans = Math.floor(Math.random()*9)+1;//0<=1
var win=false
while(!win){
    do{
        var a = readline.questionInt("Please input an intger 0-9: ");
    }while(a<0 || X>9)

    if(ans == a){
        console.log("You Win!");

        var again = readline.question("Again? Yes/No");
        if(again =="Yes"){
           ans = Math.floor(Math.random()*9)+1;
        }else{
              win = true;
        }
    }else{
        console.log("You Wrong!");
    }
} 