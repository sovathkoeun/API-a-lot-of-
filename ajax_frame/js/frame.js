$(document).ready(function(){
    $(".button").on('click', function() {
        let user = $('#user').val();
        let pass = $('#pass').val();

        if(user != " "){
            $("#user").addClass("border-success");
            $("#user").removeClass("border-danger");
        }else{
            $("#user").addClass("border-danger");
            $("#user").removeClass("border-success");
        }
        if(pass != " "){
            $("#pass").addClass("border-success");
            $("#pass").removeClass("border-danger");
        }else{
            $("#pass").addClass("border-danger");
            $("#pass").removeClass("border-success");
        }
    });
});