var submit = document.getElementById("submit");
submit.onclick = function() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var company = document.getElementById("company").value;
    var years = document.getElementById("years").value;
	console.log(name, email, company, years);
	
    var message = document.getElementById("message");
	message.innerHTML = " Hello " + name + " worked for " 
	 + years + company + ", this is very impressive." ;
};