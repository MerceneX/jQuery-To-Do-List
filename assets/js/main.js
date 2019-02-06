$(document).ready(function () {
    
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    $("ul").on("click", "li span", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove()
        });
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) {
            $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + $(this).val() + "</li>")
            $(this).val("");
        }
    });

    $("h1 i").click(function(){
        $("input").fadeToggle(500);
    });
});