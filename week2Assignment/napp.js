var submit = document.getElementById("submit");
submit.onclick = function() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	var company = document.getElementById("company").value;
    var years = document.getElementById("years").value;
    var moves = document.getElementById("moves").value;
    var fav = document.getElementById("fav").value;
    var prior = document.getElementById("prior").value;
    var fight = document.getElementById("fight").value;
    var ideal = document.getElementById("ideal").value;
    var win = document.getElementById("win").value;
    var end = document.getElementById("end").value;
    var level = document.getElementById("level").value;
    var age = document.getElementById("age").value;
	console.log(name, email, company, years, moves, fav, prior, fight, win, end, level, age);

    var message = document.getElementById("message");

	message.innerHTML = " Hello " + name + " worked for "
	 + years + company + moves + ", this is very impressive." ;
};
