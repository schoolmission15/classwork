var question = [
    "is the sky blue?",
    "what is the capital of latvial?"
    "what is 2 + 3?"
                ];

var answers = [
    "yes"
    "riga"
    "4"

];

var makeQuestion = function() {
var q = document.createElement("p");
q.innerHTML = "is the sky blue?";
document.body.appendChild(q);

var t = document.createElement("input");
t.type = "text";
t.placeholder = "answer";
document.body.appendChild(t);

var b = document.createElement("button");
b.innerHTML = "submit answer.";
b.onclick= function() {
var m = document.createElement("p");
var a = t.value;
    if (a == "yes") {
        m.innerHTML ="correct";
    } else {
        m.innerHTML = "no, you idiot!";
}
document.body.appendChild(m);

}
document.body.appendChild(b);};

    for (var i = 0; i< 3; i++) {
        //document.write(questions[i]);
        //document.write("<br>");
    }
