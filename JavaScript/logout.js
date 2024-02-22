$(document).ready(function () {
    $("#Logout").click(function (event) {
        var logoutConfirm = confirm("您確定要登出嗎?")

        if (logoutConfirm) {
            sessionStorage.clear();
            window.location.href = "index.html";
        } else {

        }




    })
})