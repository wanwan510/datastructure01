function bracketMatch(inputString){
    var left="{[(<";
    var right="}])>";

    var open =[];//develop stack
    var isMatched = true;
    var symbol = inputString.charAt( i=0);
    while(isMatched && symbol[]='\n'){
        //if(symbol =='{'|| symbol =='('|| symbol =='[') >>rewrite

            open.cpush(symbol);
        if(symbol =='}'|| symbol ==')' || symbol ==']'){
        if(opening.length ==0)isMatched = false;
        else{
            match = opening.pop();
            isMatched = (symbol == '}' && match =='{')||(symbol == ')'&& match =='(')||(symbol == ']' && match =='['); 
        }    
      }
      symbol = inputString.charAt(++);
    }
    if(opening.length>0 || !isMatched) return"unmatched';
    else return "matched"