$('#buttonPress').click(function () {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycby4ewWrVVGYRGVA1Hhrnc6ewWJlP7M9kbBLpS5oS63e0UrsMdRZp-Rcz_F71j7TDs8X/exec',
        type: 'post',
        dataType: 'json',
        success: function (result) {
            alert('預約結果: ' + result.reservation_result + '/n' + result.greetWord);

            window.location.href = 'https://www.google.com';

        },
        error: function (xhr, status, error) {
            console.error('Error:', status, error);
        }
    });
});