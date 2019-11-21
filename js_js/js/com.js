$(document).ready(function(){
    $('#text').on('keyup', function(){
        var text = $('#text').val();
        $('.alert-danger').html(text);
    });
});