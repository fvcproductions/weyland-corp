$(document).ready(function(){var e=Parse.Object.extend("User"),t=new Parse.Query(e),s="";t.find({success:function(e){var t=e.length;s=t.toString()}}),$("#loginButtonPress").click(function(){if(userIsRegistering){var e=!0,t=!1,r=!1,i=$("#usernameInputField").val(),n=$("#passwordInputField").val(),a=$("#passwordConfirmation").val(),o=$("#emailConfirmationOne").val(),l=$("#emailConfirmationTwo").val(),u=new Parse.Query(Parse.User),d=Parse.Object.extend("GameScore");if(u.equalTo("username",i),e=validateUser(e,u),e===!0&&(n===a?t=!0:alert("Please make sure that both of your passwords are identical"),o===l?r=!0:alert("Please make sure that both of your email addresses are identical"),t&&r)){var g=Parse.Object.extend("ProfilePictures"),m=new Parse.Query(g);m.first({success:function(e){var t=e.get("largeImage"),r=e.get("smallImage"),n=new Parse.User;n.set("username",i),n.set("password",a),n.set("email",o),n.set("timetrialSkill",20),n.set("memorySkill",20),n.set("recognitionSkill",20),n.set("definitionsSkill",20),n.set("aboveandbeyondSkill",20),n.set("criticalthinkingSkill",20),n.set("level","1"),n.set("progress","90"),n.set("levelResistance",1),n.set("rank",s),n.set("trueRank",1),n.set("profilePicture",t),n.set("thumbnail",r),userSigninFunction(n)},error:function(e){alert("Error: "+e.code+" "+e.message)}})}}userIsRegistering===!1&&(username=$("#usernameInputField").val(),password=$("#passwordInputField").val(),parseLoginAuthentication(username,password))}),$("#registrationButtonPress").click(function(){toggleHeight?(removeFormFields(),togglingUsernameAndRegisterationButtonText(),aniamteFormFieldsTo(),renderingRegistrationFieldsAndAppendingThemToDOM(),toggleBooleanValuesForRegistrationButtonPress()):(aniamteFormFieldsFrom(),hideFormFields(),clearOutInputs(),resettingRegistrationValuesForButtonPress(),resettingUsernameAndRegistrationButtonText())})});