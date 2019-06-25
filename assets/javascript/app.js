$(document).ready(function(){

    $(document).on("scroll", function(){
        if($(this).scrollTop() >= $("#main").position().top) {
            $("#navbar").css("background-color", "#345189");
        } 

        if($(this).scrollTop() <= $("#main").position().top) {
            //console.log("scrolled back into header");
            $("#navbar").css("background-color", "#ffffff00");
        }
    });
});