const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  // postという名前の関数を定義しています。この関数は、後でHTMLのフォームが送信されるときに実行される処理を記述します。
  const form = document.getElementById("form");
  // document.getElementById("form")を使って、HTMLのIDが"form"である要素（通常は<form>タグ）を取得し、formという定数に代入しています。これは、特定のフォームを操作するために使用されます。
  form.addEventListener("submit", (e) => {
    // フォームが送信されるときに実行される関数を設定します。
    e.preventDefault();
    // フォームのデフォルト送信動作（ページリロードなど）をキャンセルして、カスタム処理を行う準備をします。
    const formData = new FormData(form);
// FormDataオブジェクトを作成し、formに入力されたデータを収集します。これにより、フォームの全データをformDataという変数に保存して、あとで送信や操作が可能になります。
    const XHR = new XMLHttpRequest();
// 新しいXMLHttpRequestオブジェクトを生成します。このオブジェクトを使って、GETやPOSTリクエストをサーバーに送信することができます。
    XHR.open("POST", "/posts", true);
    // POSTメソッドを使って、/postsというURLに非同期でリクエストを送信する準備をするためのものです。
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
        formText.value = "";
    };
  });
};
 
 window.addEventListener('turbo:load', post)
//  これは、ページが読み込まれたとき（turbo:loadイベント）に、先ほど定義したpost関数を実行するよう設定しています。turbo:loadは、Turboリンクやページが完全に読み込まれた後のイベントです。この記述により、ページがロードされたときにフォームの送信処理を設定します。