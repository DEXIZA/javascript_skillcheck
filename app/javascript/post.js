function post (){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 重複防止用
  });
 };
 
 window.addEventListener('load', post);


//  投稿の確認用メモ
//  console.log(document.getElementById("new_article"));
//  // htmlの　post,id: "new_article"から引用している