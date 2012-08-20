$(document).ready(function(){

/*
The remove form matches array items exactly as opposed to the index position number.
*/

	//GLOBAL VARS
	var myArr = [];

	

	//DISPLAY LIST FUNCTION (prints the updated userslist in the div below the forms)
	for (var i=0; i < myArr.length; i += 1) {
			$('#user_list').append('<li>' +myArr[i]+ '</li>');
	};



	//ON EVENT ADD_USER FORM SUBMIT FUNCTION
	$('#add_user').submit(function(){
		if ($('#user_name').val().length == 0) {
			alert("Please enter a valid username.");
			$('#user_name').css({'border': '1px solid red'});
		} else {
			name = $('#user_name').val();
			$('#user_name').css({'border': '1px solid #666'});
		}
		myArr.push(name);
		myArr.sort();
		$('#user_list').html('');
		for (var i=0; i < myArr.length; i+= 1){
			$('#user_list').append('<li>' +myArr[i]+ '</li>')
		};
		return false; //prevents form from processing (page reload)
	});


	//ON EVENT REMOVE_USER FORM SUBMIT FUNCTION
	$('#remove_user').submit(function(){
		id = $('#user_num').val();
		diffVal = $.grep(myArr, function(value, i){
			return value != id;
		});
		if (diffVal.length == myArr.length) {
			alert('User not in database. Please try another name.')
			$('#user_num').css({'border': '1px solid red'})
		} else {
			myArr = diffVal;
			$('#user_num').css({'border' : '1px solid #666'})
		};
		$('#user_list').html('');
		for (var i=0; i < myArr.length; i += 1) {
			$('#user_list').append('<li>' +myArr[i]+ '</li>');
		};
		return false;
	});

	
});