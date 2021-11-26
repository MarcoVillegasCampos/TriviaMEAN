

$(document).ready(function(){

    //Queries
    $.get("https://opentdb.com/api.php?amount=4&category=9&difficulty=medium&type=multiple", function(data1){
        general = data1.results;
    })   
    $.get("https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple", function(data2){
        science = data2.results;
    })
    $.get("https://opentdb.com/api.php?amount=4&category=21&difficulty=medium&type=multiple", function(data3){
        sports = data3.results;
    })

    //General Boxes
    $("#a1").click(function(){
        $("#a1").html("<div class='center'><form><h4>"+general[0].question+
        "</h4>"+"<input type='radio' name='question1' value='general[0].incorrect_answers[0]'><label for='answerOne'>"+general[0].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='general[0].incorrect_answers[1]'><label for='answerOne'>"+general[0].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='general[0].correct_answer'><label for='answerOne'>"+general[0].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='general[0].incorrect_answers[2]'><label for='answerOne'>"+general[0].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#a2").click(function(){
        $("#a2").html("<div class='center'><form><h4>"+general[1].question+
        "</h4>"+"<input type='radio' name='question1' value='general[1].incorrect_answers[0]'><label for='answerOne'>"+general[1].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='general[1].incorrect_answers[1]'><label for='answerOne'>"+general[1].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='general[1].correct_answer'><label for='answerOne'>"+general[1].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='general[1].incorrect_answers[2]'><label for='answerOne'>"+general[1].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })


    $("#a3").click(function(){
        $("#a3").html("<div class='center'><form><h4>"+general[2].question+
        "</h4>"+"<input type='radio' name='question1' id='A1' value='general[2].incorrect_answers[0]'><label for='answerOne'>"+general[2].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' id='A2' name='question1' value='general[2].incorrect_answers[1]'><label for='answerOne'>"+general[2].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' id='A3' name='question1' value='general[2].correct_answer'><label for='answerOne'>"+general[2].correct_answer+"</label>"+
        "<br><input type='radio' id='A4' name='question1' value='general[2].incorrect_answers[2]'><label for='answerOne'>"+general[2].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })


    $("#a4").click(function(){
        $("#a4").html("<div class='center'><form><h4>"+general[3].question+
        "</h4>"+"<input type='radio' name='question1' value='general[3].incorrect_answers[0]'><label for='answerOne'>"+general[3].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='general[3].incorrect_answers[1]'><label for='answerOne'>"+general[3].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='general[3].correct_answer'><label for='answerOne'>"+general[3].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='general[3].incorrect_answers[2]'><label for='answerOne'>"+general[3].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })


    //Comp Science Boxes
    $("#b1").click(function(){
        $("#b1").html("<div class='center'><form><h4>"+science[0].question+
        "</h4>"+"<input type='radio' name='question1' value='science[0].incorrect_answers[0]'><label for='answerOne'>"+science[0].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='science[0].incorrect_answers[1]'><label for='answerOne'>"+science[0].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='science[0].correct_answer'><label for='answerOne'>"+science[0].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='science[0].incorrect_answers[2]'><label for='answerOne'>"+science[0].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#b2").click(function(){
        $("#b2").html("<div class='center'><form><h4>"+science[1].question+
        "</h4>"+"<input type='radio' name='question1' value='science[1].incorrect_answers[0]'><label for='answerOne'>"+science[1].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='science[1].incorrect_answers[1]'><label for='answerOne'>"+science[1].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='science[1].correct_answer'><label for='answerOne'>"+science[1].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='science[1].incorrect_answers[2]'><label for='answerOne'>"+science[1].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#b3").click(function(){
        $("#b3").html("<div class='center'><form><h4>"+science[2].question+
        "</h4>"+"<input type='radio' name='question1' value='sciencel[2].incorrect_answers[0]'><label for='answerOne'>"+science[2].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='science[2].incorrect_answers[1]'><label for='answerOne'>"+science[2].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='science[2].correct_answer'><label for='answerOne'>"+science[2].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='science[2].incorrect_answers[2]'><label for='answerOne'>"+science[2].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#b4").click(function(){
        $("#b4").html("<div class='center'><form><h4>"+science[3].question+
        "</h4>"+"<input type='radio' name='question1' value='science[3].incorrect_answers[0]'><label for='answerOne'>"+science[3].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='science[3].incorrect_answers[1]'><label for='answerOne'>"+science[3].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='science[3].correct_answer'><label for='answerOne'>"+science[3].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='science[3].incorrect_answers[2]'><label for='answerOne'>"+science[3].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    //Sports Boxes
    $("#c1").click(function(){
        $("#c1").html("<div class='center'><form><h4>"+sports[0].question+
        "</h4>"+"<input type='radio' name='question1' value='sports[0].incorrect_answers[0]'><label for='answerOne'>"+sports[0].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[0].incorrect_answers[1]'><label for='answerOne'>"+sports[0].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[0].correct_answer'><label for='answerOne'>"+sports[0].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='sports[0].incorrect_answers[2]'><label for='answerOne'>"+sports[0].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#c2").click(function(){
        $("#c2").html("<div class='center'><form><h4>"+sports[1].question+
        "</h4>"+"<input type='radio' name='question1' value='sports[1].incorrect_answers[0]'><label for='answerOne'>"+sports[1].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[1].incorrect_answers[1]'><label for='answerOne'>"+sports[1].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[1].correct_answer'><label for='answerOne'>"+sports[1].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='sports[1].incorrect_answers[2]'><label for='answerOne'>"+sports[1].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#c3").click(function(){
        $("#c3").html("<div class='center'><form><h4>"+sports[2].question+
        "</h4>"+"<input type='radio' name='question1' value='sports[2].incorrect_answers[0]'><label for='answerOne'>"+sports[2].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[2].incorrect_answers[1]'><label for='answerOne'>"+sports[2].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[2].correct_answer'><label for='answerOne'>"+sports[2].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='sports[2].incorrect_answers[2]'><label for='answerOne'>"+sports[2].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })

    $("#c4").click(function(){
        $("#c4").html("<div class='center'><form><h4>"+sports[3].question+
        "</h4>"+"<input type='radio' name='question1' value='sports[3].incorrect_answers[0]'><label for='answerOne'>"+sports[3].incorrect_answers[0]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[3].incorrect_answers[1]'><label for='answerOne'>"+sports[3].incorrect_answers[1]+"</label>"+
        "<br><input type='radio' name='question1' value='sports[3].correct_answer'><label for='answerOne'>"+sports[3].correct_answer+"</label>"+
        "<br><input type='radio' name='question1' value='sports[3].incorrect_answers[2]'><label for='answerOne'>"+sports[3].incorrect_answers[2]+"</label>"+
        
        
        
        "</form></div>");
    })
})