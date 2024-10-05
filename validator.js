export var validirajDaNijePrazno = function (text) {
    if (text === "") {
        return false;
    }
    else {
        return true;
    }
};

export var validirajMaksimalnuDuzinu = function (text, duzinaTeksta) {
    if (text.length > duzinaTeksta) {
        return false;
    }
    else {
        return true;
    }
};

export var validirajIme = function (ime) {
    var regexIme = /^[\p{L}'-]+$/u;
    return regexIme.test(ime);
};

export var validirajEmail = function (email) {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};

export var validirajUrl = function (url) {
    var regexUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w .-]*)*\/?$/i;
    return regexUrl.test(url);
};

