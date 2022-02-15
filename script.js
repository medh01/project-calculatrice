/*variables*/
var res=0;
var typedNumber="";
var op=""
/*varaibles*/

/*document objects*/
var myAC=document.querySelector(".AC");
var myOps=document.querySelector(".ops");
var myNumber=document.querySelector(".number");
var myDivision=document.querySelector(".division");
var myMultiplication=document.querySelector(".multiplication");
var mySoustraction=document.querySelector(".soustraction");
var myAddition=document.querySelector(".addition");
var myEqual=document.querySelector(".equal");
var zero=document.querySelector(".zero");
var one=document.querySelector(".one");
var two=document.querySelector(".two");
var three=document.querySelector(".three");
var four=document.querySelector(".four");
var five=document.querySelector(".five");
var six=document.querySelector(".six");
var seven=document.querySelector(".seven");
var eight=document.querySelector(".eight");
var nine=document.querySelector(".nine");
var myDot=document.querySelector(".dot");
/*document objects*/

one.addEventListener("click",()=>{
    typedNumber=typedNumber+"1";
    myNumber.textContent=typedNumber;
    
    
})

two.addEventListener("click",()=>{
    typedNumber=typedNumber+"2";
    myNumber.textContent=typedNumber;
        
    
})

three.addEventListener("click",()=>{
        typedNumber=typedNumber+"3";
        myNumber.textContent=typedNumber;

    
})


four.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"4";
        myNumber.textContent=typedNumber;

    
})


five.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"5";
        myNumber.textContent=typedNumber;

    
})


six.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"6";
        myNumber.textContent=typedNumber;

    
})

seven.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"7";
        myNumber.textContent=typedNumber;

    
})


eight.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"8";
        myNumber.textContent=typedNumber;

    
})

nine.addEventListener("click",()=>{
    
        typedNumber=typedNumber+"9";
        myNumber.textContent=typedNumber;

    
})

myAC.addEventListener("click",()=>{
    myNumber.textContent="0";
    myOps.textContent="";
    typedNumber="";
    op="";
})


myDivision.addEventListener("click",()=>{
    if(op==""){
        op="/";
        res=parseInt(typedNumber);
        myOps.textContent=typedNumber+op;
        typedNumber="";    
    }else{
        
            
        if(op=="+"){
            res=res+parseInt(typedNumber);
        }else if(op=="-"){
            res=res - parseInt(typedNumber);
        }else if(op== "*"){
            res=res * parseInt(typedNumber)
        }else{
            res= res / parseInt(typedNumber);
        }
        op="/";
        myOps.textContent=myOps.textContent+typedNumber+op;
        typedNumber="";
    }
    
})

myMultiplication.addEventListener("click",()=>{
    if(op==""){
        op="x";
        res=parseInt(typedNumber);
        myOps.textContent=typedNumber+op;
        typedNumber="";
    }else{
        if(op=="+"){
            res=res+parseInt(typedNumber);
        }else if(op=="-"){
            res=res - parseInt(typedNumber);
        }else if(op== "*"){
            res=res * parseInt(typedNumber)
        }else{
            res= res / parseInt(typedNumber);
        }
        op="x";
        myOps.textContent=myOps.textContent+typedNumber+op;
        typedNumber="";
    }
})

myAddition.addEventListener("click",()=>{
    if(op==""){
        op="+";
        res=parseInt(typedNumber);
        myOps.textContent=typedNumber+op;
        typedNumber="";

    }else{
        if(op=="+"){
            res=res+parseInt(typedNumber);
        }else if(op=="-"){
            res=res - parseInt(typedNumber);
        }else if(op== "*"){
            res=res * parseInt(typedNumber)
        }else{
            res= res / parseInt(typedNumber);
        }
        op="+";
        myOps.textContent=myOps.textContent+typedNumber+op;
        typedNumber="";
    }
})

mySoustraction.addEventListener("click",()=>{
    if(op==""){
        op="-";
        res=parseInt(typedNumber);
        myOps.textContent=typedNumber+op;
        typedNumber="";
    }else{
        if(op=="+"){
            res=res+parseInt(typedNumber);
        }else if(op=="-"){
            res=res - parseInt(typedNumber);
        }else if(op== "*"){
            res=res * parseInt(typedNumber)
        }else{
            res= res / parseInt(typedNumber);
        }
        op="-";
        myOps.textContent=myOps.textContent+typedNumber+op;
        typedNumber="";
    }
})

myEqual.addEventListener("click",()=>{
     if(op=="+"){
         myOps.textContent=myOps.textContent+typedNumber;
         res=res+parseInt(typedNumber);
         myNumber.textContent=res;
     }

     else if(op=="-"){
        myOps.textContent=myOps.textContent+typedNumber;
         res=res - parseInt(typedNumber);
        myNumber.textContent=res;
     }

     else if(op=="x"){
        myOps.textContent=myOps.textContent+typedNumber;
         res=res  * parseInt(typedNumber);
         myNumber.textContent=res;
     }

     else{
        myOps.textContent=myOps.textContent+typedNumber;
         res=res / parseInt(typedNumber);
         myNumber.textContent=res;
    }

    
})