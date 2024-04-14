$(document).ready(function () {
    getWord();
})

function getWord() {
    $.ajax({
        url: "/get-word",
        type: "get",
        success: function (result) {
            fillBlanks(result.word)
        },
        error: function (result) {
            alert(result.responseJSON.message)
        }
    })
}

function fillBlanks(word) {

 $("#blanks").empty();

 for (let i = 0; i < word.inputs; i++) {
     let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
     $("#blanks").append(input_html)
 }
 
 $("#hint").html(word.category)

 var gameOver = false

 $(".clickable").click(function () {
     var correctGuess = false;      

     let id = $(this).attr("id");

     var life = parseInt($("#life").text())

     for (var i = 0; i < word.word.length; i++) {

         if (word.word.charAt(i).toLowerCase() == id) {
             if ((life > 0) && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {
                 $(".fill_blanks").eq(i).html(id);
                 correctGuess = true;

                 if ($("#blanks").text() === word.word.toLowerCase()) {
                     $("#lives_container").replaceWith($("#result_container"))
                     $("#result_container").removeClass("hidden")
                     $("#result").text("Correct Guess, You Won!!")
                     correctGuess = true;
                     gameOver = true
                 }
             }                
         }
         
     }
    
     if ((life > 0) && (correctGuess!= true) && (gameOver != true)) {           
         life = life - 1
         $("#life").text(life)
     }
     else if (life == 0) {
        $("#lives_container").replaceWith($("#result_container"))
        $("#result_container").removeClass("hidden")
        $("#result").text("Incorrect Guess, You Lost!!")
     }

})
}

