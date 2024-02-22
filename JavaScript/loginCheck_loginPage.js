
$(document).ready(function loginCheck() {
    var loginCheck = sessionStorage.getItem('loginCheck')
    if (loginCheck == 'success') {
        window.location.href = "memberShipCenter.html";
    }
});	