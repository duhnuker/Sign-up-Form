function check() {
    let input = document.getElementById("confirm-password");
    if (input.value != document.getElementById("password").value) {
        input.setCustomValidity('Passwords Must Be Matching!');
    } else {
        input.setCustomValidity('');
    }
}