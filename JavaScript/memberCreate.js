var script_url = "https://script.google.com/macros/s/AKfycbwVJ3PcHQtiRownTHIanQe6-CwFGFDCkDCQ7Ah_s4m6RSz0bAtyYmN32cLRef-VAG9D/exec";
$(document).ready(function ($) {
    $("#MemberCreate_sheet").submit(function (event) {
        $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", false);
        var account = $("#account").val();
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        var age = $("#age").val();
        var tel = $("#tel").val();
        var cellphone = $("#cellphone").val();
        var email = $("#email").val();
        var url = script_url +
            "?account=" + account +
            "&userName=" + userName +
            "&passWord=" + passWord +
            "&age=" + age +
            "&tel=" + tel +
            "&cellphone=" + cellphone +
            "&email=" + email +
            "&action=Member_Create";
        var request = $.ajax({
            url: url,
            type: "POST",


            success: function (response) {
                sessionStorage.setItem("userData", JSON.stringify(response));
                window.location.href = "index.html";
            },
            error: function (thrownError) {
                console.log(thrownError);
                window.location.reload();
            }


        });
        request.done(function (response, textStatus, jqXHR) {
            alert("傳送完成");

            //將回傳值存入session storage內讓後續頁面可以再運用
            //    sessionStorage.setItem("userData", JSON.stringify(response));
            //    window.location.href = "index.html";

        });
        request.always(function () {
            $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", true);

        });
        event.preventDefault();
    })
})