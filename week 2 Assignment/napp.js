var submit = document.getElementById("submit");
submit.onclick = function() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var company = document.getElementById("company").value;
	console.log(name, email, company);
	var message = document.getElementById("message");
	message.innerHTML = " Hello " + name + " from " 
	 + company + ", Welcome to your Talent Scout Tryout.";
};