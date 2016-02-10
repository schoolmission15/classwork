var submit = document.getElementById("submit");
submit.onclick = function() {
    //console.log(this);
    //submit.onclick = function() {
	//var name = document.getElementById("name").value;
        //console.log(name);
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var borough = document.getElementById("borough").value;
	console.log(name, email, borough);
	var message = document.getElementById("message");
	message.innerHTML = " Hello " + name + " from " 
	 + borough + ", welcome to my website.";
};