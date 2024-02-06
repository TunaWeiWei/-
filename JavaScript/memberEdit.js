$(document).ready(function () {
    // 從session抓資料
    var username = sessionStorage.getItem('username') || '沒有資料';
    var account = sessionStorage.getItem('account') || '沒有資料';
    var age = sessionStorage.getItem('age') || '沒有資料';
    var tel = sessionStorage.getItem('tel') || '沒有資料';
    var cellphone = sessionStorage.getItem('cellphone') || '沒有資料';
    var email = sessionStorage.getItem('email') || '沒有資料';

    // 放入到html中

    if (username) {
        $('#account').val(account);
        $('#userName').val(username);
        $('#age').val(age);
        $('#tel').val(tel);
        $('#cellphone').val(cellphone);
        $('#email').val(email);
    }

});

var script_url = "https://script.google.com/macros/s/AKfycbwVJ3PcHQtiRownTHIanQe6-CwFGFDCkDCQ7Ah_s4m6RSz0bAtyYmN32cLRef-VAG9D/exec";
$(document).ready(function ($) {
    $("#MemberEdit_sheet").submit(function (event) {
        $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", false);
        var account_edit = $("#account").val();
        var userName_edit = $("#userName").val();
        var passWord_edit = $("#passWord").val();
        var age_edit = $("#age").val();
        var tel_edit = $("#tel").val();
        var cellphone_edit = $("#cellphone").val();
        var email_edit = $("#email").val();
        var url = script_url +
            "?account=" + account_edit +
            "&userName=" + userName_edit +
            "&passWord=" + passWord_edit +
            "&age=" + age_edit +
            "&tel=" + tel_edit +
            "&cellphone=" + cellphone_edit +
            "&email=" + email_edit +
            "&action=Member_Edit";
        var request = $.ajax({
            url: url,
            type: "POST",


            success: function (response) {

                //接收google apps script回傳的值並解析
                if (response.editCheck == "failed") {
                    alert("修改失敗");
                    window.location.reload();
                } else if (response.editCheck == "success") {
                    alert("修改成功");

                    //回傳值判斷為修改成功故直接將方才修改的數值直接填入session中

                    sessionStorage.setItem("username", userName_edit);
                    sessionStorage.setItem("age", age_edit);
                    sessionStorage.setItem("tel", tel_edit);
                    sessionStorage.setItem("cellphone", cellphone_edit);
                    sessionStorage.setItem("email", email_edit);



                    window.location.href = "memberShipCenter.html";
                } else {
                    alert("沒有判定到");
                    window.location.href = "memberShipCenter.html";
                }


            },
            error: function (thrownError) {
                console.log(thrownError);
                alert("傳送失敗");
                window.location.reload();
            }


        });
        request.done(function (response, textStatus, jqXHR) {

        });
        request.always(function () {
            $('#account, #userName, #passWord, #age, #tel, #cellphone, #email').prop("disabled", true);

        });
        event.preventDefault();
    })
})