var userScore = {
    correct: 0,
    incorrect: 0,
  };

   var answers = ["right"];
   var answer1 = ["wallaby"];
   var answer2 = ["deedee"];
   var answer3 = ["farmers"];
   var answer4 = ["dora-winifred"];
   var answer5 = ["lighter-fur"];
   var answer6 = ["maurice"];
   var answer7 = ["hillwood"];
   var answer8 = ["grey-ghost"];


  

   var results = function(){

        if($("input[value='deedee']:checked").val() == answer2){
            if(userScore.correct < 8){
            userScore.correct ++ 
            console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }

        if($("input[value='deedee']:checked").val() == answer2){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='farmers']:checked").val() == answer3){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='dora-winifred']:checked").val() == answer4){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='lighter-fur']:checked").val() == answer5){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='maurice']:checked").val() == answer6){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='hillwood']:checked").val() == answer7){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }
        if($("input[value='grey-ghost']:checked").val() == answer8){
            if(userScore.correct < 8){
                userScore.correct ++ 
                console.log("you got question one right " + userScore.correct);
            }
        } else {
            if(userScore.incorrect < 8){
            userScore.incorrect ++
            console.log("you got it wrong")
            }
        }



        var playerScore = "Correct: " + userScore.correct + "<br>" + "Incorrect: " + userScore.incorrect + "<br>"
        $('#final-score').html(playerScore)
        $("#submit").hide();
    }
