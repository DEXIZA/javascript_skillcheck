function post (){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    console.log(document.getElementById("new_article"));
    // htmlの　post,id: "new_article"から引用している
    e.preventDefault();
  });
 };
 
 window.addEventListener('load', post);