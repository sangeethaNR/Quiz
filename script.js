document.getElementById("startbtn").addEventListener("click",startquiz_fun1);
var choice1 = document.querySelector('#choiceA');
var choice2 = document.querySelector('#choiceB');
var choice3 = document.querySelector('#choiceC');
var choices = document.querySelector('#choices');
var question_div=document.querySelector('#question_div');
var validation_text = document.querySelector("#validation");

 var result =0 ;

// var running_question = 0;
const questions = [

    {

        question : "What does HTML stand for?",

        imgSrc : "img/html.png",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        imgSrc : "img/css.png",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        imgSrc : "img/js.png",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"

    }

];

let lasatquestionindex = questions.length-1;
  let runningquestionindex=0;
  function startquiz_fun1()
      {  
   if(runningquestionindex <= lasatquestionindex)
  {
    startquiz_fun();
    runningquestionindex++;
  }
}

function startquiz_fun(){
    var q= questions[runningquestionindex];
    console.log("before loop" + runningquestionindex);
   

  
  
     
   
    question_div.innerHTML="<p>" + q.question +"<p>";
   

 
        document.getElementById('question_div').style.display='block';
     
        choice1.innerHTML = "1. " + q.choiceA ;
        choice2.innerHTML = "2. " + q.choiceB;
        choice3.innerHTML = "3. "+ q.choiceC;
        
     document.getElementById('choices').addEventListener("click",function(event){
     
         if(event.target.id === "choice"+q.correct)
         {
             validation_text.innerHTML="CORRECT";
             validation_text.setAttribute("style","display:block");
             result +=10;
            
        
            

         }
         else{
            validation_text.innerHTML="WRONG";
            validation_text.style.display="block";
          
            
         }
    
         startquiz_fun1();
         
   
         
         
     })
    
    // }
    // else{
    //     console.log("finfished");
    //     choices.setAttribute('style','display:none');
    //     question_div.setAttribute('style','display:none');

    // }
  
}


// questions for the quiz

