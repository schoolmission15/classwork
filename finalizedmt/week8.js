var today = new Date(Date());
var submit = document.getElementById("submit");
submit.onclick = function() {
	var name = document.getElementById("name").value;

	var message =document.getElementById("username");

	message.innerHTML="Welcome~ "+"<strong>"+name+"</strong>"+"!  "+"<br /><br /> "+Date();
};






var button= document.getElementById("button");
var post = document.getElementById("post");
var mypost=document.getElementById("mypost");


button.onclick = function() {
    var name = document.getElementById("name").value;
    var posts = post.value+"<br>"+"<br>"+"Posted by "+name+" --"+today.getDate();

    post.value="";

    var elem=document.createElement("p");
    elem.style.borderBottom="2px dotted #5D95F5";
    elem.innerHTML =posts;

    mypost.appendChild(elem);

}

