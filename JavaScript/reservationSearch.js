$(document).ready(function () {

});

//偵測reservationSearch.html按下查詢鍵後的動作
var script_url = "https://script.google.com/macros/s/AKfycbwVJ3PcHQtiRownTHIanQe6-CwFGFDCkDCQ7Ah_s4m6RSz0bAtyYmN32cLRef-VAG9D/exec";
$(document).ready(function ($) {
    $("#reservation_select").submit(function (event) {
        var account = sessionStorage.getItem('account') || '沒有資料';
        var url = script_url +
            "?account=" + account +
            "&action=reservation_Search";
        var request = $.ajax({
            url: url,
            type: "POST",

            //將回傳值存入session storage內讓後續頁面可以再運用
            success: function (response) {
                sessionStorage.setItem("user_Reservation_Data", JSON.stringify(response));
                alert("搜尋完成");
                //此為避免重複按下搜尋鈕使先前顯示之行列再加上新顯示的行列
                $("#reservation_Search_Data").empty();

                var info = response;
                var length = Number(info.length);
                if (length > 0) {
                    for (i = 0; info.length > i; i++) {
                        customer = info[i].customer;
                        date = info[i].date;
                        eatingTime = info[i].eatingTime;
                        print();

                        function print() {

                            $("#reservation_Search_Data").append(
                                '<tr>' +
                                '<th>' + date + '</th>' +
                                '<th>' + customer + '</th>' +
                                '<th>' + eatingTime + '</th>' +
                                '</tr>'

                            )
                        }
                    }
                }



            },
            error: function (thrownError) {
                console.log(thrownError);
                alert("搜尋失敗");
                window.location.reload();
            }

        });
        request.done(function (response, textStatus, jqXHR) {

        });
        request.always();
        event.preventDefault();
    })
})

