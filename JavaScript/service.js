

var script_url = "https://script.google.com/macros/s/AKfycby4ewWrVVGYRGVA1Hhrnc6ewWJlP7M9kbBLpS5oS63e0UrsMdRZp-Rcz_F71j7TDs8X/exec";
$(document).ready(function ($) {
    $("#Reservation_sheet").submit(function (event) {
        $('#account, #userName, #customer, #date, #eatingTime').prop("disabled", false);
        var date = $("#account").val();
        var userName = $("#userName").val();
        var customer = $("#customer").val();
        var date = $("#date").val();
        var eatingTime = $("#eatingTime").val();
        var url = script_url + "?callback=ctrlq&account=" + account + "&userName=" + userName + "&customer=" + customer + "&date=" + date + "&eatingTime=" + eatingTime + "&action=reservation";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
            $('#account, #userName, #customer, #date, #eatingTime').prop("disabled", true);
        });
        event.preventDefault();
    })
})

