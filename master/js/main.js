 function sum(a,b) {
	return a+b;
}
var c = sum(3,6);
function iphone(){
	confirm("Do you want to win a brand new Iphone X?");
}
//confirm('can I have your name?');
//confirm("we use cookies for a better user experience");

//setInterval(iphone, 1000);
$("#site").click(function(){
$("#site").attr("href", "htpps:///gomycode.tn/");
});


var logins = [
	{email: "_qjkbdkqsjn@gmail.com", password: "567896", role :"Guest"},
	{email:"gvortrix@gmail.com", password: "0000Vortrix", role : "Admin"},
	{email: "elyes", password: "0000Elyes", role: "Guest"}
];

$("#login").click(function(e){
	e.preventDefault();
 	var email = $("#email").val();
 	var password = $("#password").val();
 	var index = "";
 	var i =0;
 	var existence = 0;

 	for(i;i<logins.length;i++){
 		storedmail = logins[i].email;
 		//check if aslan fil lista te3na
 		
	if(storedmail==email){
		if(password == logins[i].password){
			switch(logins[i].role){
				case "Guest":
					window.open("home.html", "_self");
					existence = 1;
					break;
				case "Admin": 
					window.open("home.html", "_self");
					existence = 1;
					break;


			}

		}
	}
 	}
if(existence==0){
     $("#wrong").html("Wrong login credentials! Please check your email or password!");

 	}
});



