// app.js


var btn = document.getElementById('btn');
var content = document.getElementById('content');




//音声認識APIの使用
var speech = new webkitSpeechRecognition();


//言語を日本語に設定
speech.lang = "ja";




btn.addEventListener( 'click' , function() {


    // ?ボタンをクリックした時の処理
    // 音声認識をスタート
    speech.start();

} );




speech.addEventListener( 'result' , function( e ) {


    // ?音声認識した結果を得る処理
    var text = e.results[0][0].transcript;

    // 認識された「言葉(text)」を、表示用のdivタグに代入する
    content.textContent = text;

} );