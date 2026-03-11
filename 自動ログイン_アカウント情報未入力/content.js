function clickSamlLoginButton() {
    const samlLoginButton = document.querySelector('input#loginsaml');
    if (!samlLoginButton || samlLoginButton.dataset.cleAutoClicked === '1') {
        return false;
    }

    samlLoginButton.dataset.cleAutoClicked = '1';
    samlLoginButton.click();
    console.log('自動選択: 「ログイン(大阪大学個人IDを持っている方）」ボタンをクリックしました。');
    return true;
}

function fillAndSubmitLoginForm() {
    const userIdField = document.querySelector('#USER_ID');
    const passwordField = document.querySelector('#USER_PASSWORD');

    const loginButton = document.querySelector(
        'body > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(2) > div > input'
    );

    if (!userIdField || !passwordField || !loginButton || loginButton.dataset.cleAutoClicked === '1') {
        return false;
    }

    // TODO: Enter your id and password
    const userId = 'ここにIDを入力';
    const password = 'ここにパスワードを入力';

    userIdField.value = userId;
    passwordField.value = password;

    loginButton.dataset.cleAutoClicked = '1';
    loginButton.click();
    console.log('自動ログイン: IDとパスワードを入力し、ログインボタンをクリックしました。');
    return true;
}

function selectLowerRoleAndClickOk() {
    // ロール選択画面では選択候補の最後の項目を選び、OKを押す
    const roleInputs = Array.from(
        document.querySelectorAll('input[type="radio"], input[type="checkbox"]')
    ).filter((input) => !input.disabled);

    if (roleInputs.length < 2) {
        return false;
    }

    const lowerOption = roleInputs[roleInputs.length - 1];
    if (!lowerOption.checked) {
        // onclick(setDisabled) を確実に走らせるため click を優先する
        lowerOption.click();
        lowerOption.checked = true;
        lowerOption.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const normalize = (value) =>
        (value || '')
            .replace(/\u00a0/g, ' ')
            .replace(/&nbsp;/gi, ' ')
            .trim()
            .toUpperCase();

    const okButton =
        document.querySelector('input#ok') ||
        Array.from(document.querySelectorAll('input[type="button"], input[type="submit"]')).find(
            (input) => normalize(input.value) === 'OK'
        ) ||
        Array.from(document.querySelectorAll('button')).find(
            (button) => normalize(button.textContent) === 'OK'
        );

    if (!okButton || okButton.disabled || okButton.dataset.cleAutoClicked === '1') {
        return false;
    }

    okButton.dataset.cleAutoClicked = '1';
    okButton.click();
    console.log('自動選択: 下側のロールにチェックしてOKをクリックしました。');
    return true;
}

function runAutomation() {
    if (clickSamlLoginButton()) {
        return;
    }
    if (fillAndSubmitLoginForm()) {
        return;
    }
    selectLowerRoleAndClickOk();
}

window.addEventListener('load', runAutomation);

let retryCount = 0;
const retryTimer = setInterval(() => {
    runAutomation();
    retryCount += 1;
    if (retryCount >= 20) {
        clearInterval(retryTimer);
    }
}, 500);