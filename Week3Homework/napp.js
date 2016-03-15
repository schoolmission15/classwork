var submit = document.getElementById("submit");
submit.onclick = function() {

    var response = [];

    var responseElements = document.getElementsByClassName("response");

    for(var i = 0; i < responseElements.length; i++)
        response.push(responseElements[i].value);


//	var name = document.getElementById("name").value;{       [0]
//	var email = document.getElementById("email").value;{       [1]
//	var company = document.getElementById("company").value;{       [2]
//    var years = document.getElementById("years").value;{       [3]
//    var moves = document.getElementById("moves").value;{       [4]
//    var fav = document.getElementById("fav").value;{       [5]
//    var prior = document.getElementById("prior").value;{       [6]
//    var fight = document.getElementById("fight").value;       {[7]
//    var ideal = document.getElementById("ideal").value;{       [8]
//    var win = document.getElementById("win").value;{       [9]
//    var end = document.getElementById("end").value;{       [10]
//    var level = document.getElementById("level").value;{       [11]
//    var age = document.getElementById("age").value;{       [12]
//	console.log(name, email, company, years, moves, fav, prior, fight, win, end, level, age);

    var message = document.getElementById("message");

	message.innerHTML = " Hello " + response[0] + " your verified email is: "
	 + response[1] + ", and we noticed that you are a wrestler from " + response[2] + ". It has been confirmed that you have been wrestling for "+ " " + response[3] + ". You said that your favorite wrestling move is the " + response[4] + ". When we asked what you favorite championship in the WWE is you said: " + response[5] + ". We asked what your job was pror to wrestling and you said: " + response[6] + ". We asked if you had a family to fight for to which you answered: " + response[7] + ". We followed this up by asking who your ideal tag partnet would be and you chose: " + response[8] + ". Sfiting gears we posed the question asking if you ever won a championship in your lifetime to which you replied: " + response[9] + ". We posed the question as to where you would end your career to which your pick was: " + response[10] + ". You said that you see yourself as the following wrestler status: " + response[11] + ". You said you would like to end your wrestling career at: " + response[12];
};
