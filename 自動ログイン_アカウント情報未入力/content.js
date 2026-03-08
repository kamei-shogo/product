// ページが完全に読み込まれてから実行されることを確認
window.addEventListener('load', function() {
    // IDとパスワードの入力フィールドをIDで特定
    const userIdField = document.querySelector("#USER_ID");
    const passwordField = document.querySelector("#USER_PASSWORD");

    // ログインボタンをIDで特定 (name="cmdBtnSubmit"でも良いが、id="loginBtn"の方が直接的)
    const loginButton = document.querySelector("body > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(2) > div > input"); // こちらを推奨

    // あるいは、name属性で特定したい場合
    // const loginButton = document.querySelector('input[name="cmdBtnSubmit"]');


    // もし必要な要素が見つからなければ、何もしないで終了
    if (!userIdField || !passwordField || !loginButton) {
        console.log("自動ログイン: 必要なフィールドまたはボタンが見つかりませんでした。");
        return;
    }

    // ユーザー情報
    const userId = "ここにID";
    const password = "ここにパスワード"; // 

    // 各フィールドに値を設定
    userIdField.value = userId;
    passwordField.value = password;

    // ログインボタンをクリックしてログインを試行
    loginButton.click();

    console.log("自動ログイン: IDとパスワードを入力し、ログインボタンをクリックしました。");
});