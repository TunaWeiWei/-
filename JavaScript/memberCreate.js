var script_url = "https://script.google.com/macros/s/AKfycbwVJ3PcHQtiRownTHIanQe6-CwFGFDCkDCQ7Ah_s4m6RSz0bAtyYmN32cLRef-VAG9D/exec";
$(document).ready(function ($) {
    $("#MemberCreate_sheet").submit(function (event) {
        $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", false);
        var account_create = $("#account").val();
        var userName_create = $("#userName").val();
        var passWord_create = $("#passWord").val();
        var age_create = $("#age").val();
        var tel_create = $("#tel").val();
        var cellphone_create = $("#cellphone").val();
        var email_create = $("#email").val();
        var url = script_url +
            "?account=" + account_create +
            "&userName=" + userName_create +
            "&passWord=" + passWord_create +
            "&age=" + age_create +
            "&tel=" + tel_create +
            "&cellphone=" + cellphone_create +
            "&email=" + email_create +
            "&action=Member_Create";
        var request = $.ajax({
            url: url,
            type: "POST",


            success: function (response) {
                sessionStorage.setItem("userData", JSON.stringify(response));
                alert("傳送完成");
                window.location.href = "login.html";
            },
            error: function (thrownError) {
                console.log(thrownError);
                alert("傳送失敗");
                window.location.reload();
            }


        });
        request.done(function (response, textStatus, jqXHR) {

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