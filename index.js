$(document.ready(function() {
	var firebase = new Firebase('intense-inferno-6709.firebaseIO.com'); 
	var email = $("#email").val();
	var password = $("#password").val();
	

	ref.createUser({
 		email: email,
  		password: password,
	}, function(error, userData) {
  	
  	if (error) {
    	switch (error.code) {
      		case "EMAIL_TAKEN":
        		console.log("The new user account cannot be created because the email is already in use.");
       			break;
      		case "INVALID_EMAIL":
        		console.log("The specified email is not a valid email.");
        		break;
      			default:
        		console.log("Error creating user:", error);
   }
  
  	} else {
    	console.log("Successfully created user account with uid:", userData.uid);
  	}
});
	
}