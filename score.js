var database = firebase.database().ref();




//button's action

function changeScore(){

  var name = $("#name").val();

  var score = $("#score").val();

  //send to your database

  database.push({

    'NAME':name,

    'SCORE':score

  });

}




//function to save data to firebase database when a submit button is pressed




function getScore(){




    database.on('child_added',function(dataRow){

        //getting raw values

        var row = dataRow.val();

        //adding to the div

        $("#display_score").append("<p>" + row.NAME + " : " + row.SCORE);

    })

 }