$("button").click(function(){
    var message=$('input').val();
    $("p").append("hello" + message);
    $("p").text('hello ' + message);
});