$("button").click(function(){
    $("h1").css("color","purple")
})

$(document).keypress(function(event){
    // var key= event.key
    $("h1").text(event.key)
})

$("h1").on("mouseover",function(){
    $("h1").css("color","purple")
})