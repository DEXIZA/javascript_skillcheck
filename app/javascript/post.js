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
    XHR.onload = () => {
      const item = XHR.response.article;
      // レスポンスのうち、コントローラー側で指定したjson形式のデータを変数に代入しています。
      const contentsArea = document.getElementById("contents_area");
      // 今回投稿したデータを追加する要素を取得しています。今回追加する要素の親要素にあたります。
      const articleText = document.getElementById("article_text");
      // フォーム投稿の際にテキストを入力した、テキストエリアを取得しています。
      const HTML = `
        <div class="article">
          ${ item.text }
        </div>`;
        // 今回追加する要素を定義しています。${ item.text }によって、レスポンスとして返されたデータのうち、textのプロパティを指定しています。
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      // 親要素に直前で定義した要素を追加しています。afterbeginは親要素内の最上部に追加することを意味しています。
      articleText.value = "";
      // フォームの入力欄を空にしています。
    };
  });
 };
 
 window.addEventListener('load', post);


//  投稿の確認用メモ
//  console.log(document.getElementById("new_article"));
//  // htmlの　post,id: "new_article"から引用している

// 絶対どこかで使う const formData = new FormData(form);
