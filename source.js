function loginMessage(success, failure) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var success = document.getElementsByClassName('successMessage')[0];
    var failure = document.getElementsByClassName('failureMessage')[0];
    if (username === 'test' && password === '123') {
        success.setAttribute("style", "color:green");
        success.removeAttribute("hidden");
    }
    else {
        failure.setAttribute("style", "color:red");
        failure.removeAttribute("hidden");
    }
}

function clearMessage() {
    var success = document.getElementsByClassName('successMessage')[0];
    var failure = document.getElementsByClassName('failureMessage')[0];
    success.setAttribute("hidden","true");
    failure.setAttribute("hidden","true");
}