function pword(length) {
    var u = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var p = "";
    for (var x = 0; x < 8; x++) {
        var i = Math.floor(Math.random()* u.length);
        p += u.charAt(i);
    }
    return p;
}

function generate() {
    myform.length.value = pword(length);
}