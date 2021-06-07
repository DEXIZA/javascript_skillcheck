function post (){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 重複防止用
    const formData = new FormData(document.getElementById("new_article"));
    // フォームの情報を取得し、Ajaxで送信できる形へと整形しています。
    const XHR = new XMLHttpRequest();
    // Ajaxに利用するオブジェクトを生成しています。
    XHR.open("POST", "/articles", true);
    // Ajaxに関する情報を初期化し、URIを設定しています。
    XHR.responseType = "json";
    // レスポンスとして求めるデータ形式を指定しています
    XHR.send(formData);
    // Ajaxで送信しています。
  });
 };
 
 window.addEventListener('load', post);


//  投稿の確認用メモ
//  console.log(document.getElementById("new_article"));
//  // htmlの　post,id: "new_article"から引用している