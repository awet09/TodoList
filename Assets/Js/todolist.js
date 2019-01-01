/// check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
        //create a new li and add to ul
      $("ul").append("<li><span>x</span> " + todoText + "</li>")
    }
});