var script_url = "https://script.google.com/macros/s/AKfycby2DiMVf-jdLwPrQW8R6hMxZXbBuXhODdWN7-Wr9Eo78zpiu5AshzTh3sK0WIl2sSHT/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
        $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", false);
        var account = $("#account").val();
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        var age = $("#age").val();
        var tel = $("#tel").val();
        var cellphone = $("#cellphone").val();
        var email = $("#email").val();
        var url = script_url + "?callback=ctrlq&date=" + "&account=" + account
        "&userName=" + userName
            + "&passWord=" + passWord
            + "&age=" + age
            + "&tel=" + tel
            + "&cellphone=" + cellphone
            + "&email=" + email
            + "&action=create";
        var request = $.ajax({
            url: url,
            type: "post"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
            $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", true);
        });
        event.preventDefault();
    })
})