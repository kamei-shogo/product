// ページが完全に読み込まれてから実行されることを確認
window.addEventListener('load', function() {
    // ロール選択のラジオボタン（name="role"）を全て取得
    const roleRadios = document.querySelectorAll('input[type="radio"][name="role"]');

    // OKボタンをIDで特定
    const okButton = document.querySelector("#ok");

    // もし必要な要素が見つからなければ、何もしないで終了
    if (!roleRadios || roleRadios.length === 0 || !okButton) {
        console.log("自動ロール選択: 必要なフィールドまたはボタンが見つかりませんでした。");
        return;
    }

    // 最後のラジオボタンを選択する
    const targetRadio = roleRadios[roleRadios.length - 1];
    targetRadio.click();

    // OKボタンをクリック
    okButton.click();

    console.log("自動ロール選択: ラジオボタンを選択し、OKボタンをクリックしました。");
});
