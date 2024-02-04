$(document).ready(function () {
    var UserNameCheck = sessionStorage.getItem('username')
    if (UserNameCheck !== null) {
        document.getElementById("member").innerText = "你好:" + UserNameCheck;
    } else {
        document.getElementById("member").innerText = "登入/註冊";
    }

});