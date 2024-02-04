$(document).ready(function () {
    // 從session抓資料
    var username = sessionStorage.getItem('username') || '沒有資料';
    var account = sessionStorage.getItem('account') || '沒有資料';

    // 放入到html中

    if (username) {
        $('#userName').val(username);
        $('#account').val(account);
    }

});

//偵測service.html按下submit鍵後的動作
var script_url = "https://script.google.com/macros/s/AKfycbwVJ3PcHQtiRownTHIanQe6-CwFGFDCkDCQ7Ah_s4m6RSz0bAtyYmN32cLRef-VAG9D/exec";
$(document).ready(function ($) {
    $("#Reservation_sheet").submit(function (event) {
        $('#account, #userName, [name="customer"], #date, [name="eatingTime"]').prop("disabled", false);
        var account = $("#account").val();
        var userName = $("#userName").val();
        var customer = $("[name='customer']:checked").val();
        var date = $("#date").val();
        var eatingTime = $("[name='eatingTime']:checked").val();
        var url = script_url +
            "?account=" + account +
            "&userName=" + userName +
            "&customer=" + customer +
            "&date=" + date +
            "&eatingTime=" + eatingTime +
            "&action=service_Submit";
        var request = $.ajax({
            url: url,
            type: "POST",

            //將回傳值存入session storage內讓後續頁面可以再運用
            success: function (response) {
                sessionStorage.setItem("userData", JSON.stringify(response));
                alert("傳送完成");
                window.location.href = "index.html";
            },
            error: function (thrownError) {
                console.log(thrownError);
                alert("傳送失敗");
                window.location.reload();
            }

        });
        request.done(function (response, textStatus, jqXHR) {


            //將回傳值存入session storage內讓後續頁面可以再運用 2/1改由success及error處執行
            //   sessionStorage.setItem("userData", JSON.stringify(response));
            //   window.location.href = "index.html";

        });
        request.always(function () {
            $('#account, #userName, [name="customer"], #date, [name="eatingTime"]').prop("disabled", true);

        });
        event.preventDefault();
    })
})