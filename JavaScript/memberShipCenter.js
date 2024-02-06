$(document).ready(function () {
    // 從session抓資料
    var username = sessionStorage.getItem('username') || '沒有資料';
    var age = sessionStorage.getItem('age') || '沒有資料';
    var tel = sessionStorage.getItem('tel') || '沒有資料';
    var cellphone = sessionStorage.getItem('cellphone') || '沒有資料';
    var email = sessionStorage.getItem('email') || '沒有資料';


    // 放入到html中
    $('#username').text(username);
    $('#age').text(age);
    $('#tel').text(tel);
    $('#cellphone').text(cellphone);
    $('#email').text(email);

});