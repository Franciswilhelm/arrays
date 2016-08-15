$(document).ready(function() {
  $("form#show").submit(function(event) {
    event.preventDefault();
    var thing1 = $("input#color").val()
    var thing2 = $("input#food").val()
    var thing3 = $("input#number").val()
    var result = [thing1, thing2, thing3]
    var result2 = [thing2, thing1, thing3]
    var cloneResult2 = result2.slice()
    var result3 = cloneResult2;
    result3.push(result[0],result[1],result[2]);
    $("#output").text(result);
    $("#output2").text(result2);
    $("#output3").text(result3);
    $('ul').prepend('<li>'+result3[0]+'</li>');
    $('ul').prepend('<li>'+result3[1]+'</li>');
    $('ul').prepend('<li>'+result3[2]+'</li>');
    $('ul').prepend('<li>'+result3[3]+'</li>');
    $('ul').prepend('<li>'+result3[4]+'</li>');
    $('ul').prepend('<li>'+result3[5]+'</li>');
  });
});
